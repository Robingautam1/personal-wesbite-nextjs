import React from "react";

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* The Outer Industrial Frame */}
        <rect x="2" y="2" width="96" height="96" stroke="currentColor" strokeWidth="4" />

        {/* The "Safety" Orange Accent Corner */}
        <rect x="70" y="70" width="30" height="30" fill="#F35815" />

        {/* The "R" - Constructed from Blocks */}
        <path
            d="M20 20 H50 V35 H35 V45 H50 V60 H65 V80 H80 V20 H20 Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            opacity="0.1" // Subtle background shadow hint
        />

        {/* The Actual "RG" Monogram - Heavy Stencil Style */}
        <path
            d="M25 25 V75 H40 V60 H50 L60 75 H78 L65 55 C72 52 75 45 75 38 C75 28 68 25 55 25 H25 Z M40 38 H55 C58 38 60 40 60 42 C60 45 58 47 55 47 H40 V38 Z"
            fill="currentColor"
        />
    </svg>
);
