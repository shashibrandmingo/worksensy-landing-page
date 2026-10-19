"use client";

import { createContext, useContext, useState, useCallback } from "react";
import DemoLeadModal from "@/components/common/DemoLeadModal";

const DemoModalContext = createContext({
  isOpen: false,
  openDemoModal: () => {},
  closeDemoModal: () => {},
});

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultTeamSize, setDefaultTeamSize] = useState("Select team size");
  const [planSource, setPlanSource] = useState("");

  const openDemoModal = useCallback(
    (teamSizeOrOptions = "Select team size", maybePlanSource = "") => {
      if (typeof teamSizeOrOptions === "object" && teamSizeOrOptions !== null) {
        setDefaultTeamSize(teamSizeOrOptions.teamSize || "Select team size");
        setPlanSource(teamSizeOrOptions.planSource || "");
      } else {
        setDefaultTeamSize(teamSizeOrOptions || "Select team size");
        setPlanSource(maybePlanSource || "");
      }
      setIsOpen(true);
    },
    []
  );

  const closeDemoModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        openDemoModal,
        closeDemoModal,
      }}
    >
      {children}
      <DemoLeadModal
        isOpen={isOpen}
        onClose={closeDemoModal}
        defaultTeamSize={defaultTeamSize}
        planSource={planSource}
      />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
