import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/* ==========================================================================
   PRODUCTION READY LEAD API HANDLER
   - Full server-side validation
   - Forwards directly to Google Sheets / Excel Webhook (Zapier, Make, Power Automate, Google Apps Script)
   - Appends safely to local backup file so no leads are ever lost
   ========================================================================== */
export async function POST(request) {
  try {
    const data = await request.json();

    const {
      fullName,
      workEmail,
      phoneNumber,
      companyName,
      teamSize,
      leadSource,
      message,
      walkthrough = false,
      planSource = "",
    } = data;

    // Server-side validation
    const errors = {};

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Full name is required (min 2 characters).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!workEmail || !emailRegex.test(workEmail.trim())) {
      errors.workEmail = "A valid work email is required.";
    }

    const phoneDigits = (phoneNumber || "").replace(/\D/g, "");
    if (!phoneNumber || phoneDigits.length !== 10) {
      errors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      errors.companyName = "Company name is required.";
    }

    if (!teamSize || teamSize === "Select team size") {
      errors.teamSize = "Please select a team size.";
    }

    if (!leadSource || leadSource === "Select lead source") {
      errors.leadSource = "Please select your primary lead source.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      errors.message = "Please share a brief requirement (min 5 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 400 }
      );
    }

    // Format message so that planSource clearly shows in Google Sheet column even if no new column is added
    const formattedMessage = planSource
      ? `[Plan: ${planSource}] ${message.trim()}`
      : message.trim();

    // Cleaned payload for Excel / Google Sheet
    const leadPayload = {
      timestamp: new Date().toISOString(),
      submittedAtLocal: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      fullName: fullName.trim(),
      workEmail: workEmail.trim().toLowerCase(),
      phoneNumber: `+91 ${phoneDigits}`,
      companyName: companyName.trim(),
      teamSize,
      leadSource,
      message: formattedMessage,
      walkthroughRequested: walkthrough ? "Yes" : "No",
      planSource: planSource || "Direct / General",
      selectedPlan: planSource || "General",
    };

    // 1. Webhook forwarding for Excel / Google Sheets
    const webhookUrl =
      process.env.LEAD_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      process.env.EXCEL_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxp512KJNYoFrtbOIqdA85v8VaKpIFG31VPv7FeugON8x69jgL-bvh7_mxa9RmcMjETEA/exec";

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
          redirect: "follow",
        });
      } catch (webhookErr) {
        console.error("Webhook forwarding error:", webhookErr);
      }
    }

    // 2. Local backup logging to ensure no lead is ever lost
    try {
      const backupDir = path.join(process.cwd(), ".leads");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      const backupFile = path.join(backupDir, "leads.jsonl");
      fs.appendFileSync(backupFile, JSON.stringify(leadPayload) + "\n", "utf8");
    } catch (logErr) {
      console.warn("Local backup log warning:", logErr.message);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your demo request has been received.",
      lead: {
        fullName: leadPayload.fullName,
        companyName: leadPayload.companyName,
      },
    });
  } catch (error) {
    console.error("API /api/lead error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
