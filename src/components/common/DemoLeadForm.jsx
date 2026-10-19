"use client";

import { useState } from "react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  Building2,
  Users,
  Target,
  FileText,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import CustomSelect from "./CustomSelect";

/* ==========================================================================
   DROPDOWN OPTIONS (UPDATED ACCORDING TO USER REQUIREMENTS)
   ========================================================================== */
export const TEAM_SIZE_OPTIONS = [
  "Select team size",
  "For 2 users",
  "Up to 5 users",
  "Up to 10 users",
  "Customized",
];

export const LEAD_SOURCE_OPTIONS = [
  "Select lead source",
  "Website / Organic Search",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads",
  "Justdial / IndiaMART",
  "Referrals & Offline Events",
  "Multiple Sources / Other",
];

/* ==========================================================================
   REUSABLE GLOBAL DEMO LEAD FORM COMPONENT
   Can be used:
   1. Inline inside sections (e.g. Tell Us Your Requirement / DemoRequestSection)
   2. Inside popup modals triggered by buttons across the website
   ========================================================================== */
export default function DemoLeadForm({
  onSuccess,
  onClose,
  defaultTeamSize = "Select team size",
  planSource = "",
  showHeader = true,
  className = "",
  isModal = false,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    teamSize: defaultTeamSize,
    leadSource: "Select lead source",
    message: "",
    walkthrough: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  // Validation function
  const validateField = (field, value) => {
    switch (field) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";

      case "workEmail": {
        if (!value.trim()) return "Work email is required.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid work email.";
        return "";
      }

      case "phoneNumber": {
        const digits = value.replace(/\D/g, "");
        if (!digits) return "Phone number is required.";
        if (digits.length < 10) return "Phone number must be exactly 10 digits.";
        return "";
      }

      case "companyName":
        if (!value.trim()) return "Company name is required.";
        if (value.trim().length < 2) return "Company name must be at least 2 characters.";
        return "";

      case "teamSize":
        if (!value || value === "Select team size") return "Please select your team size.";
        return "";

      case "leadSource":
        if (!value || value === "Select lead source") return "Please select a lead source.";
        return "";

      case "message":
        if (!value.trim()) return "Please describe your requirement.";
        if (value.trim().length < 5) return "Please enter at least 5 characters.";
        if (value.length > 500) return "Maximum 500 characters allowed.";
        return "";

      default:
        return "";
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field, value) => {
    let cleanValue = value;
    if (field === "phoneNumber") {
      // Strictly allow only digits (0-9) and maximum 10 digits
      cleanValue = value.replace(/\D/g, "").slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [field]: cleanValue }));
    if (touched[field]) {
      const errorMsg = validateField(field, cleanValue);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const newErrors = {};
    const fieldsToValidate = [
      "fullName",
      "workEmail",
      "phoneNumber",
      "companyName",
      "teamSize",
      "leadSource",
      "message",
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    setTouched(
      fieldsToValidate.reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          planSource: planSource || "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        if (typeof onSuccess === "function") {
          onSuccess(result, formData);
        }
      } else {
        setServerError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companyName: "",
      teamSize: defaultTeamSize,
      leadSource: "Select lead source",
      message: "",
      walkthrough: true,
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setServerError("");
  };

  return (
    <div
      className={`rounded-[24px] sm:rounded-[26px] bg-white transition-all ${
        isModal
          ? "border-0 shadow-none p-3.5 sm:p-4"
          : "border border-[#eeecf9] shadow-[0_16px_40px_rgba(91,19,255,0.06)] p-5 sm:p-7"
      } ${className}`.trim()}
    >
      {/* Optional Top Form Header */}
      {showHeader && (
        <div
          className={`flex items-center gap-3 ${
            isModal ? "mb-3 pb-2.5 border-b border-[#f1f0f7]" : "mb-5 pb-5 border-b border-[#f1f0f7]"
          }`}
        >
          <div
            className={`${
              isModal ? "w-8 h-8 rounded-xl" : "w-11 h-11 rounded-2xl"
            } bg-[#f4effe] text-[#5b13ff] flex items-center justify-center shrink-0`}
          >
            <Calendar
              className={`${isModal ? "w-4 h-4" : "w-5 h-5"} stroke-[2.2]`}
              aria-hidden="true"
            />
          </div>
          <div>
            <h3
              className={`${
                isModal ? "text-[16px] sm:text-[17px]" : "text-[20px] sm:text-[21px]"
              } font-bold text-[#0d0f19] tracking-tight`}
            >
              Request a Free Demo
            </h3>
            <p
              className={`${
                isModal ? "text-[11.5px] sm:text-[12px]" : "text-[12.5px] sm:text-[13px]"
              } text-[#64748b] mt-0.5`}
            >
              Fill in your requirements and our team will get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {/* SUCCESS CONFIRMATION STATE */}
      {isSuccess ? (
        <div className="py-8 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#ecfdf5] text-[#10b981] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" aria-hidden="true" />
          </div>
          <h4 className="text-[20px] font-bold text-[#0d0f19]">
            Thank you, {formData.fullName}!
          </h4>
          <p className="mt-2 text-[14px] text-[#64748b] max-w-md leading-relaxed">
            Your demo request for{" "}
            <span className="font-semibold text-[#0d0f19]">{formData.companyName}</span> has been
            received. Our CRM workflow specialist will reach out to you at{" "}
            <span className="font-semibold text-[#0d0f19]">{formData.workEmail}</span> shortly.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#5b13ff] bg-[#f4effe] hover:bg-[#ede4ff] transition-colors cursor-pointer"
            >
              Submit another request
            </button>
            {isModal && typeof onClose === "function" && (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#64748b] bg-[#f1f5f9] hover:bg-[#e2e8f0] transition-colors cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        /* THE FORM */
        <form
          onSubmit={handleSubmit}
          noValidate
          className={isModal ? "space-y-2 sm:space-y-2.5" : "space-y-4"}
        >
          {/* Plan Indicator Badge if lead originated from Pricing or specific CTA */}
          {planSource && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f4effe] border border-[#e8ddfc] text-[12px] text-[#5b13ff]">
              <span className="text-[#64748b]">Selected Plan:</span>
              <span className="font-bold text-[#5b13ff]">{planSource}</span>
            </div>
          )}

          {/* Server error alert if any */}
          {serverError && (
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[12.5px] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Row 1: Full Name & Work Email */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              isModal ? "gap-2 sm:gap-2.5" : "gap-4"
            }`}
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="lead-fullName"
                className={`block font-semibold text-[#334155] ${
                  isModal ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
                }`}
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none">
                  <User className="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="lead-fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  placeholder="John Doe"
                  aria-invalid={Boolean(touched.fullName && errors.fullName)}
                  aria-describedby={touched.fullName && errors.fullName ? "lead-fullName-error" : undefined}
                  className={`w-full pl-9 pr-3 rounded-xl border bg-white text-[#0d0f19] placeholder:text-[#94a3b8] transition-all outline-none ${
                    isModal ? "py-1.5 text-[12.5px] min-h-[38px]" : "py-2.5 text-[13.5px]"
                  } ${
                    touched.fullName && errors.fullName
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
                  }`}
                />
              </div>
              {touched.fullName && errors.fullName && (
                <p id="lead-fullName-error" className="mt-1 text-[11.5px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Work Email */}
            <div>
              <label
                htmlFor="lead-workEmail"
                className={`block font-semibold text-[#334155] ${
                  isModal ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
                }`}
              >
                Work Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="lead-workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => handleChange("workEmail", e.target.value)}
                  onBlur={() => handleBlur("workEmail")}
                  placeholder="you@company.com"
                  aria-invalid={Boolean(touched.workEmail && errors.workEmail)}
                  aria-describedby={touched.workEmail && errors.workEmail ? "lead-workEmail-error" : undefined}
                  className={`w-full pl-9 pr-3 rounded-xl border bg-white text-[#0d0f19] placeholder:text-[#94a3b8] transition-all outline-none ${
                    isModal ? "py-1.5 text-[12.5px] min-h-[38px]" : "py-2.5 text-[13.5px]"
                  } ${
                    touched.workEmail && errors.workEmail
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
                  }`}
                />
              </div>
              {touched.workEmail && errors.workEmail && (
                <p id="lead-workEmail-error" className="mt-1 text-[11.5px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.workEmail}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number & Company Name */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              isModal ? "gap-2 sm:gap-2.5" : "gap-4"
            }`}
          >
            {/* Phone Number */}
            <div>
              <label
                htmlFor="lead-phoneNumber"
                className={`block font-semibold text-[#334155] ${
                  isModal ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
                }`}
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-[#94a3b8]">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span
                    className={`text-[12px] font-semibold text-[#64748b] border-r border-[#e2e8f0] ${
                      isModal ? "pr-1.5" : "pr-2"
                    }`}
                  >
                    +91
                  </span>
                </div>
                <input
                  id="lead-phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Escape", "Enter"].includes(e.key) ||
                      (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase()))
                    ) {
                      return;
                    }
                    if (!/^\d$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onBlur={() => handleBlur("phoneNumber")}
                  placeholder="98765 43210"
                  aria-invalid={Boolean(touched.phoneNumber && errors.phoneNumber)}
                  aria-describedby={touched.phoneNumber && errors.phoneNumber ? "lead-phone-error" : undefined}
                  className={`w-full ${
                    isModal ? "pl-[66px] py-1.5 text-[12.5px] min-h-[38px]" : "pl-[74px] py-2.5 text-[13.5px]"
                  } pr-3 rounded-xl border bg-white text-[#0d0f19] placeholder:text-[#94a3b8] transition-all outline-none ${
                    touched.phoneNumber && errors.phoneNumber
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
                  }`}
                />
              </div>
              {touched.phoneNumber && errors.phoneNumber && (
                <p id="lead-phone-error" className="mt-1 text-[11.5px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phoneNumber}</span>
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="lead-companyName"
                className={`block font-semibold text-[#334155] ${
                  isModal ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
                }`}
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                </span>
                <input
                  id="lead-companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  onBlur={() => handleBlur("companyName")}
                  placeholder="Your Company Ltd."
                  aria-invalid={Boolean(touched.companyName && errors.companyName)}
                  aria-describedby={touched.companyName && errors.companyName ? "lead-company-error" : undefined}
                  className={`w-full pl-9 pr-3 rounded-xl border bg-white text-[#0d0f19] placeholder:text-[#94a3b8] transition-all outline-none ${
                    isModal ? "py-1.5 text-[12.5px] min-h-[38px]" : "py-2.5 text-[13.5px]"
                  } ${
                    touched.companyName && errors.companyName
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
                  }`}
                />
              </div>
              {touched.companyName && errors.companyName && (
                <p id="lead-company-error" className="mt-1 text-[11.5px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.companyName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Team Size & Primary Lead Source (Custom Themed Dropdowns) */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              isModal ? "gap-2 sm:gap-2.5" : "gap-4"
            }`}
          >
            {/* Team Size */}
            <CustomSelect
              id="lead-teamSize"
              label="Team Size"
              required={true}
              value={formData.teamSize}
              options={TEAM_SIZE_OPTIONS}
              placeholder="Select team size"
              icon={Users}
              onChange={(val) => handleChange("teamSize", val)}
              onBlur={() => handleBlur("teamSize")}
              error={errors.teamSize}
              touched={touched.teamSize}
              compact={isModal}
            />

            {/* Primary Lead Source */}
            <CustomSelect
              id="lead-leadSource"
              label="Primary Lead Source"
              required={true}
              value={formData.leadSource}
              options={LEAD_SOURCE_OPTIONS}
              placeholder="Select lead source"
              icon={Target}
              onChange={(val) => handleChange("leadSource", val)}
              onBlur={() => handleBlur("leadSource")}
              error={errors.leadSource}
              touched={touched.leadSource}
              compact={isModal}
            />
          </div>

          {/* Row 4: Requirement / Message (Textarea with Character Counter) */}
          <div>
            <label
              htmlFor="lead-message"
              className={`block font-semibold text-[#334155] ${
                isModal ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
              }`}
            >
              Requirement / Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-[#94a3b8] pointer-events-none">
                <FileText className="w-4 h-4" aria-hidden="true" />
              </span>
              <textarea
                id="lead-message"
                rows={isModal ? 2 : 3}
                maxLength={500}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                placeholder="Tell us about your requirements, goals, or any specific use case..."
                aria-invalid={Boolean(touched.message && errors.message)}
                aria-describedby={touched.message && errors.message ? "lead-message-error" : undefined}
                className={`w-full pl-9 pr-3 rounded-xl border bg-white text-[#0d0f19] placeholder:text-[#94a3b8] transition-all outline-none resize-none ${
                  isModal ? "py-1.5 text-[12.5px]" : "py-2.5 text-[13.5px]"
                } ${
                  touched.message && errors.message
                    ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
                }`}
              />
              <span className="absolute right-3 bottom-1.5 text-[10.5px] text-[#94a3b8] pointer-events-none">
                {formData.message.length}/500
              </span>
            </div>
            {touched.message && errors.message && (
              <p id="lead-message-error" className="mt-1 text-[11.5px] text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Row 5: Checkbox Option */}
          <div className={isModal ? "pt-0" : "pt-1"}>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.walkthrough}
                onChange={(e) => handleChange("walkthrough", e.target.checked)}
                className="w-3.5 h-3.5 rounded text-[#5b13ff] border-[#cbd5e1] focus:ring-[#5b13ff] cursor-pointer"
              />
              <span className={`${isModal ? "text-[12px]" : "text-[13px]"} text-[#475569]`}>
                I want a personalized CRM walkthrough <span className="text-[#94a3b8]">(Optional)</span>
              </span>
            </label>
          </div>

          {/* Row 6: Submit Button */}
          <div className={isModal ? "pt-1" : "pt-2"}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-xl font-semibold text-white bg-gradient-to-r from-[#5b13ff] to-[#8a2dfa] hover:brightness-110 shadow-[0_8px_24px_rgba(91,19,255,0.32)] hover:shadow-[0_12px_28px_rgba(91,19,255,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed ${
                isModal ? "py-2.5 px-5 text-[13.5px]" : "py-3.5 px-6 text-[14.5px]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Get My Demo</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {/* Microcopy disclaimer */}
          <p
            className={`text-[11px] text-[#94a3b8] text-center ${
              isModal ? "mt-1" : "mt-2.5"
            }`}
          >
            By submitting, you agree to be contacted by our team.
          </p>
        </form>
      )}
    </div>
  );
}
