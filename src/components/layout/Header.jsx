"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { openDemoModal } = useDemoModal();

  // Offset-aware smooth scroll handler: guarantees section heading is 100% visible below navbar
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      setActiveSection(targetId);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 72;
        const extraGap = 20; // 20px clean breathing space below navbar
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - (headerHeight + extraGap);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });

        window.history.pushState(null, "", href);
      }
    }
    setMobileMenuOpen(false);
  };

  // Scroll spy: automatically activates navbar tab as user scrolls through sections
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl ? headerEl.offsetHeight : 72;
      const scrollPosition = window.pageYOffset + headerHeight + 80;

      // When near top (hero section), clear active tab
      if (window.pageYOffset < 180) {
        setActiveSection("");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#f1f0f8] transition-all"
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                setActiveSection("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 focus:outline-hidden group shrink-0"
            aria-label="WorkSensy Home — All-in-One Sales CRM"
          >
            <Image
              src="/images/logo/Worksensy%20logo.png"
              alt="WorkSensy — All-in-One Sales CRM & Lead Management"
              width={150}
              height={38}
              priority
              className="h-8 sm:h-9 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation: Sequential Pill Links with Active State */}
          <nav
            aria-label="Main Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            <ul className="flex items-center gap-1 xl:gap-1.5 m-0 p-0 list-none">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      itemProp="url"
                      data-active={isActive ? "true" : undefined}
                      className={`navbar-pill ${
                        isActive
                          ? "!text-[#5b13ff] !border-[#5b13ff] !bg-[#f4effe] !font-semibold shadow-[0_2px_10px_rgba(91,19,255,0.14)]"
                          : ""
                      }`}
                    >
                      <span itemProp="name">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://worksensy.in/login"
              className="navbar-btn-login"
              aria-label="Login to your WorkSensy account"
            >
              Login
            </Link>

            <button
              type="button"
              onClick={() =>
                openDemoModal({
                  teamSize: "Select team size",
                  planSource: "Header - Get Started",
                })
              }
              className="navbar-btn-cta cursor-pointer"
              aria-label="Get Started with WorkSensy Free Trial"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-[#faf9ff] border border-transparent hover:border-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile & Tablet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#f0edfa] animate-in fade-in slide-in-from-top-3">
            <nav aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-1.5 list-none p-0 mb-4">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block px-4 py-3 text-base rounded-xl transition-all ${
                          isActive
                            ? "text-[#5b13ff] bg-[#f4effe] font-semibold border border-[#e8ddfc]"
                            : "text-[#0d0f19] hover:text-[#5b13ff] hover:bg-[#faf9ff]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-gray-100">
              <Link
                href="https://worksensy.in/login"
                onClick={() => setMobileMenuOpen(false)}
                className="navbar-btn-login w-full text-center py-2.5"
              >
                Login
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal({
                    teamSize: "Select team size",
                    planSource: "Header - Get Started",
                  });
                }}
                className="navbar-btn-cta w-full justify-center py-3 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
