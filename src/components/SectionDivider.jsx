import React from "react";

export default function SectionDivider({ flip = false }) {
  return (
    <svg
      className={`w-full h-16 ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
        fill="currentColor"
        className="text-[#0D0D0D]"
      />
    </svg>
  );
}
