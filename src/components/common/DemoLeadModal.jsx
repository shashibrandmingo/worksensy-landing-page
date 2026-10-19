"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import DemoLeadForm from "./DemoLeadForm";

/* ==========================================================================
   GLOBAL DEMO LEAD POPUP MODAL
   Usage:
   <DemoLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultTeamSize="For 2 users" />
   ========================================================================== */
export default function DemoLeadModal({
  isOpen,
  onClose,
  defaultTeamSize = "Select team size",
  planSource = "",
}) {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-demo-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      {/* Dark backdrop blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0d0f19]/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card (Compact, with max-h and scroll protection) */}
      <div className="relative w-full max-w-[530px] max-h-[95vh] flex flex-col bg-white rounded-[20px] sm:rounded-[24px] border border-[#eeecf9] shadow-[0_25px_60px_rgba(91,19,255,0.18)] z-10 overflow-y-auto no-scrollbar my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close demo modal"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0d0f19] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
        </button>

        {/* Reusable Form */}
        <div className="p-0.5 sm:p-1.5">
          <DemoLeadForm
            key={`${defaultTeamSize}-${planSource}`}
            isModal={true}
            onClose={onClose}
            defaultTeamSize={defaultTeamSize}
            planSource={planSource}
            onSuccess={() => {
              // Can optionally auto-close after 3 seconds or keep success message
            }}
          />
        </div>
      </div>
    </div>
  );
}
