"use client";

import React from 'react';

export default function SocialProofTicker() {
    const items = [
        "APEX DENTAL CARE — 5.0★ GOOGLE RATING",
        "///",
        "COMEX DRYCLEANERS — 5,000+ CUSTOMERS SERVED",
        "///",
        "2 LIVE PRODUCTIONS IN DEPLOYMENT",
        "///",
        "NEXT.JS · REACT · SUPABASE · TAILWIND",
        "///",
        "NEW DELHI · ROHTAK · DWARKA",
        "///"
    ];

    return (
        <div className="border-b border-white/10 py-3 bg-[#0d0d0d] overflow-hidden relative" style={{ backgroundColor: '#0d0d0d' }}>
            {/* Gradient overlays for smooth enter/exit of text */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="flex gap-8 animate-marquee whitespace-nowrap font-mono text-xs md:text-sm tracking-[0.2em]">
                {/* 
                  Render multiple sets to ensure seamless looping on ultra-wide screens 
                */}
                {[...items, ...items, ...items, ...items].map((text, i) => (
                    <span
                        key={i}
                        className={text === "///" ? "text-[#E85D26]/70" : "text-[#F4F3EE]/90"}
                    >
                        {text}
                    </span>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    /* Adjusted speed for readability */
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
