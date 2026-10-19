"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

/* ==========================================================================
   CUSTOM THEMED SELECT DROPDOWN COMPONENT
   - Matches WorkSensy Purple brand theme
   - Smooth animation, hover effects, and selected indicator
   - Full keyboard and outside-click accessibility
   - 100% Pure Lucide icons (Zero Raw SVG)
   ========================================================================== */
export default function CustomSelect({
  id,
  label,
  required = false,
  value,
  options = [],
  placeholder = "Select an option",
  icon: Icon,
  onChange,
  onBlur,
  error,
  touched,
  compact = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (isOpen) {
          setIsOpen(false);
          if (typeof onBlur === "function") {
            onBlur();
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onBlur]);

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  const handleSelect = (option) => {
    if (option === placeholder) return;
    onChange(option);
    setIsOpen(false);
  };

  const isPlaceholderSelected = !value || value === placeholder;

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className={`block font-semibold text-[#334155] select-none ${
            compact ? "text-[12px] mb-1" : "text-[13px] mb-1.5"
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Main Trigger Button */}
      <div
        id={id}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-haspopup="listbox"
        aria-invalid={Boolean(touched && error)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full rounded-xl border bg-white transition-all outline-none cursor-pointer flex items-center justify-between select-none ${
          compact ? "min-h-[38px] px-3 py-2 text-[13px]" : "min-h-[42px] px-3.5 py-2.5 text-[13.5px]"
        } ${
          isPlaceholderSelected ? "text-[#94a3b8]" : "text-[#0d0f19] font-medium"
        } ${
          touched && error
            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : isOpen
            ? "border-[#5b13ff] ring-2 ring-[#5b13ff]/15 shadow-sm"
            : "border-[#e2e8f0] hover:border-[#cbd5e1] focus:border-[#5b13ff] focus:ring-2 focus:ring-[#5b13ff]/15"
        }`}
      >
        {/* Left Icon and Selected Text */}
        <div className="flex items-center gap-2.5 overflow-hidden pr-2">
          {Icon && (
            <span className="text-[#94a3b8] shrink-0 flex items-center justify-center">
              <Icon className="w-4 h-4" aria-hidden="true" />
            </span>
          )}
          <span className="truncate">
            {isPlaceholderSelected ? placeholder : value}
          </span>
        </div>

        {/* Right Rotating Chevron */}
        <span className="text-[#94a3b8] shrink-0 flex items-center justify-center">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[#5b13ff]" : ""
            }`}
            aria-hidden="true"
          />
        </span>
      </div>

      {/* Custom Dropdown Menu with Website Color Theme (No Scrollbar) */}
      {isOpen && (
        <ul
          id={`${id}-listbox`}
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 left-0 right-0 mt-1.5 rounded-2xl border border-[#eeecf9] bg-white py-1.5 shadow-[0_16px_40px_rgba(91,19,255,0.14)] animate-in fade-in zoom-in-95 duration-150 focus:outline-none overflow-y-auto max-h-[260px] no-scrollbar"
        >
          {options.map((option) => {
            const isPlaceholder = option === placeholder;
            if (isPlaceholder) return null; // Don't show placeholder in option list

            const isSelected = value === option;

            return (
              <li
                key={option}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={`cursor-pointer flex items-center justify-between transition-colors ${
                  compact
                    ? "px-3 py-2 text-[12.5px]"
                    : "px-3.5 py-2.5 text-[13px] sm:text-[13.5px]"
                } ${
                  isSelected
                    ? "bg-[#f4effe] text-[#5b13ff] font-semibold"
                    : "text-[#334155] hover:bg-[#faf8ff] hover:text-[#5b13ff]"
                }`}
              >
                <span>{option}</span>
                {isSelected && (
                  <Check
                    className="w-4 h-4 text-[#5b13ff] stroke-[2.5]"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* Error Message */}
      {touched && error && (
        <p className="mt-1 text-[12px] text-red-600 flex items-center gap-1">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
