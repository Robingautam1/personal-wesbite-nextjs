"use client";

import React from "react";
import { Courier_Prime } from "next/font/google"; // Import monospace font
import { Logo } from "@/components/Logo";
import { Barcode } from "@/components/Barcode"; // We'll create this or inline it

// Configure Courier Prime
const courier = Courier_Prime({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-courier",
});

export default function ProcessPage() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    return (
        <div
            className={`min-h-screen bg-[#F4F3EE] text-[#121212] p-8 md:p-12 print:p-0 print:m-0 flex justify-center items-start ${courier.variable} font-mono`}
        >
            {/* 
        A4 Container 
        Standard A4 is 210mm x 297mm. 
        In pixels at 96 DPI: 794px x 1123px.
        We use styling to enforce this aspect ratio and size for print.
      */}
            <div className="w-full max-w-[210mm] min-h-[297mm] bg-[#F4F3EE] relative print:w-full print:max-w-none print:h-screen">

                {/* Main Content Border Container */}
                <div className="border-2 border-black h-full flex flex-col relative">

                    {/* --- HEADER SECTION --- */}
                    <header className="flex flex-row border-b-2 border-black">
                        {/* Logo Box */}
                        <div className="p-6 border-r-2 border-black w-32 flex items-center justify-center shrink-0">
                            <Logo className="w-16 h-16 text-black" />
                        </div>

                        {/* Title and Info */}
                        <div className="flex-grow flex flex-col">
                            {/* Top Row: Title */}
                            <div className="flex-grow flex items-center px-6 py-4 border-b-2 border-black">
                                <h1 className="font-oswald font-bold text-3xl tracking-tighter uppercase">
                                    Operational Protocol <span className="text-[#F35815]">//</span> V1.0
                                </h1>
                            </div>
                            {/* Bottom Row: Metadata Grid */}
                            <div className="grid grid-cols-3 h-12 text-xs font-bold tracking-widest uppercase divide-x-2 divide-black">
                                <div className="flex items-center px-4">
                                    <span className="opacity-50 mr-2">DOC_ID:</span> RG-PROCESS-001
                                </div>
                                <div className="flex items-center px-4">
                                    <span className="opacity-50 mr-2">DATE:</span> {currentDate}
                                </div>
                                <div className="flex items-center px-4 bg-[#F35815] text-white">
                                    <span className="opacity-80 mr-2">STATUS:</span> CLASSIFIED
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* --- BODY SECTION --- */}
                    <main className="flex-grow p-8 space-y-8">

                        {/* Intro / Mission Statement */}
                        <div className="mb-8 border-l-4 border-[#F35815] pl-4">
                            <p className="text-sm uppercase tracking-wide font-bold mb-1 opacity-60">Objective</p>
                            <p className="text-lg leading-relaxed max-w-2xl">
                                Systematic execution of digital product infrastructure. From architectural blueprint to production deployment.
                            </p>
                        </div>

                        {/* Phases Grid */}
                        <div className="space-y-6">

                            {/* PHASE 01 */}
                            <Section
                                number="01"
                                title="THE BLUEPRINT"
                                subtitle="(Discovery)"
                                content="Market analysis, competitive reconnaissance, and design system architectural planning. Output: Strategic Brief."
                            />

                            {/* PHASE 02 */}
                            <Section
                                number="02"
                                title="THE INFRASTRUCTURE"
                                subtitle="(Digital Setup)"
                                content="Provisioning the tech stack. Establishing CI/CD pipelines via Vercel, initializing Supabase PostgreSQL clusters, and securing domain DNS."
                            />

                            {/* PHASE 03 */}
                            <Section
                                number="03"
                                title="THE BUILD"
                                subtitle="(Implementation)"
                                content="Execution of Next.js 14 architecture. Frontend development, secure Auth implementation, and real-time database integration."
                            />

                            {/* PHASE 04 */}
                            <Section
                                number="04"
                                title="THE STRESS TEST"
                                subtitle="(QA & SEO)"
                                content="Rigorous responsive testing across viewports. Technical SEO injection (Meta/OG Tags) and Google Search Console verification."
                            />

                            {/* PHASE 05 */}
                            <Section
                                number="05"
                                title="THE HANDOFF"
                                subtitle="(Final Polish)"
                                content="Production deployment. Ownership transfer of all repo keys, env variables, and admin credentials."
                            />

                        </div>
                    </main>

                    {/* --- FOOTER SECTION --- */}
                    <footer className="border-t-2 border-black flex flex-row h-32">

                        {/* Signatures */}
                        <div className="grid grid-rows-2 w-2/3 border-r-2 border-black divide-y-2 divide-black">
                            <div className="flex items-center justify-between px-6">
                                <span className="text-xs font-bold uppercase opacity-50">Authorized By (Dev):</span>
                                <div className="font-oswald text-xl uppercase tracking-widest">ROBIN GAUTAM</div>
                            </div>
                            <div className="flex items-center justify-between px-6 relative">
                                <span className="text-xs font-bold uppercase opacity-50 absolute top-2 left-6">Client Acceptance:</span>
                                <div className="w-full h-full flex items-end pb-2 justify-end">
                                    <div className="w-48 border-b border-black border-dashed opacity-30"></div>
                                </div>
                            </div>
                        </div>

                        {/* Barcode / Stamp Area */}
                        <div className="w-1/3 p-4 flex flex-col justify-between items-end relative overflow-hidden">
                            <div className="text-[0.6rem] uppercase tracking-widest opacity-60 w-full text-right">
                                Secure Transmission
                            </div>
                            {/* Decorative Stamp */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#F35815] opacity-20 rotate-[-15deg] p-2 text-[#F35815] font-black text-4xl font-oswald uppercase pointer-events-none select-none">
                                APPROVED
                            </div>

                            <Barcode className="w-full h-auto text-black opacity-80" />
                        </div>
                    </footer>
                </div>

                {/* --- PRINT DECORATIONS / HOLE PUNCHES (Visual Only) --- */}
                <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 space-y-32 hidden xl:block print:hidden">
                    <div className="w-4 h-4 rounded-full bg-[#121212] opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-[#121212] opacity-20"></div>
                    <div className="w-4 h-4 rounded-full bg-[#121212] opacity-20"></div>
                </div>

            </div>

            {/* Styles for Printing */}
            <style jsx global>{`
        @media print {
            body {
                background-color: #F4F3EE !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            @page {
                size: A4;
                margin: 0;
            }
        }
      `}</style>
        </div>
    );
}

// Sub-component for a Process Section
const Section = ({ number, title, subtitle, content }: { number: string, title: string, subtitle: string, content: string }) => {
    return (
        <div className="flex flex-row items-stretch group">
            {/* Checkbox Column */}
            <div className="w-12 shrink-0 flex items-start justify-center pt-1">
                <div className="w-6 h-6 border-2 border-black bg-transparent flex items-center justify-center cursor-pointer transition-colors group-hover:bg-[#F35815] group-hover:border-[#F35815]">
                    {/* Checkmark placeholder (hidden by default, could be interactive) */}
                </div>
            </div>

            {/* Content Column */}
            <div className="flex-grow border-b border-black border-dashed pb-6">
                <div className="flex items-baseline mb-2">
                    <span className="font-oswald text-[#F35815] text-xl font-bold mr-4">{number}</span>
                    <h3 className="font-oswald text-lg uppercase font-bold tracking-tight">
                        {title} <span className="opacity-50 text-sm ml-1 font-mono font-normal tracking-tighter">{subtitle}</span>
                    </h3>
                </div>
                <p className="text-sm leading-relaxed opacity-90 font-medium max-w-xl">
                    {content}
                </p>
            </div>
        </div>
    );
};
