"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
    {
        id: "01",
        phase: "THE STRATEGIC AUDIT",
        status: "REQUIRED",
        headline: "We don't guess. We calculate.",
        body: "Before a single pixel is painted, we strip the business down to its core. I look at your target market, your revenue goals, and your competition. We aren't just building a website; we are building a sales channel. If the math doesn't work, the code won't save it.",
        deliverables: ["Competitor Analysis", "User Persona", "ROI Projection"],
    },
    {
        id: "02",
        phase: "THE VISUAL BLUEPRINT",
        status: "IN PROGRESS",
        headline: "Form follows function. But form still matters.",
        body: "We map the user journey. Where do they click? Why do they stay? We create high-fidelity wireframes that establish your digital posture. This is where we decide if you need to be 'Loud and Industrial' or 'Quiet and Premium'.",
        deliverables: ["Figma Prototypes", "UX Wireframes", "Style Guide"],
    },
    {
        id: "03",
        phase: "THE HEAVY LIFTING",
        status: "PENDING",
        headline: "Clean code. Zero bloat.",
        body: "The engine room. I deploy a Next.js stack optimized for speed and SEO. No drag-and-drop builders. No spaghetti code. Just a custom-engineered application that Google ranks high and hackers can't touch. Scalable from Day 1.",
        deliverables: ["Next.js 14", "Tailwind CSS", "SEO Optimization"],
    },
    {
        id: "04",
        phase: "HANDOFF & ORBIT",
        status: "LOCKED",
        headline: "You own the asset. Forever.",
        body: "We don't hold your site hostage. I migrate the final build to your domain, set up your analytics dashboard, and record a personalized video manual on how to edit content. The keys are yours. The system is live.",
        deliverables: ["Analytics Setup", "Admin Training", "Source Code"],
    },
];

export default function ProcessSection() {
    const [openStep, setOpenStep] = useState<string | null>("01");

    return (
        <section id="process" className="py-24 bg-[#050505] text-zinc-100 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">
                        The Manifest // 4-Step Protocol
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-white">
                        How We Work
                    </h2>
                </div>

                <div className="w-full">
                    <LayoutGroup>
                        <div className="flex flex-col border-t-2 border-zinc-800">
                            {PROCESS_STEPS.map((step) => {
                                const isOpen = openStep === step.id;

                                return (
                                    <motion.div
                                        layout
                                        key={step.id}
                                        onClick={() => setOpenStep(isOpen ? null : step.id)}
                                        className={cn(
                                            "relative border-b-2 border-zinc-800 cursor-pointer overflow-hidden transition-colors duration-500 ease-out group",
                                            isOpen ? "bg-[#F35815] text-white border-[#F35815]" : "hover:bg-zinc-900"
                                        )}
                                    >
                                        <motion.div
                                            layout
                                            className="flex flex-col md:flex-row md:items-baseline py-8 md:py-10 px-4 md:px-8 relative z-10"
                                        >
                                            {/* Index Number */}
                                            <span
                                                className={cn(
                                                    "font-oswald text-5xl md:text-7xl font-bold tracking-tighter mr-8 transition-colors duration-300 w-24 shrink-0",
                                                    isOpen ? "text-white" : "text-zinc-700 group-hover:text-zinc-500"
                                                )}
                                            >
                                                {step.id}
                                            </span>

                                            <div className="flex-1 mt-2 md:mt-0">
                                                {/* Always Visible Header */}
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3
                                                        className={cn(
                                                            "font-oswald text-3xl md:text-5xl font-bold uppercase tracking-wide transition-colors duration-300",
                                                            isOpen ? "text-white" : "text-white"
                                                        )}
                                                    >
                                                        {step.phase}
                                                    </h3>

                                                    {/* Status Badge */}
                                                    <div className={cn(
                                                        "hidden md:flex items-center justify-center px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase",
                                                        isOpen ? "border-white text-white" : "border-zinc-700 text-zinc-500"
                                                    )}>
                                                        {step.status}
                                                    </div>
                                                </div>

                                                {/* Barcode SVG Decoration (Visible on Desktop) */}
                                                {!isOpen && (
                                                    <div className="hidden md:block absolute right-8 top-12 opacity-20">
                                                        <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor" className="text-zinc-500">
                                                            <rect x="0" width="2" height="40" />
                                                            <rect x="6" width="4" height="40" />
                                                            <rect x="14" width="2" height="40" />
                                                            <rect x="20" width="6" height="40" />
                                                            <rect x="30" width="2" height="40" />
                                                            <rect x="36" width="2" height="40" />
                                                            <rect x="42" width="6" height="40" />
                                                            <rect x="52" width="2" height="40" />
                                                            <rect x="58" width="4" height="40" />
                                                            <rect x="68" width="2" height="40" />
                                                            <rect x="76" width="2" height="40" />
                                                        </svg>
                                                    </div>
                                                )}

                                                {/* Expandable Content */}
                                                <AnimatePresence mode="wait">
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                                        >
                                                            <div className="pt-6 md:pt-10 max-w-4xl grid md:grid-cols-[2fr,1fr] gap-12">
                                                                <div>
                                                                    <h4 className="font-serif text-3xl mb-6 leading-tight">
                                                                        {step.headline}
                                                                    </h4>
                                                                    <p className="font-medium text-lg md:text-xl opacity-90 leading-relaxed font-sans">
                                                                        {step.body}
                                                                    </p>
                                                                </div>

                                                                <div className="border-t border-white/30 md:border-t-0 md:border-l md:pl-8 pt-6 md:pt-0">
                                                                    <span className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
                                                                        Deliverables
                                                                    </span>
                                                                    <ul className="space-y-3">
                                                                        {step.deliverables.map((item, i) => (
                                                                            <li key={i} className="flex items-center text-sm font-medium">
                                                                                <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>

                                                                    {/* The Stamp Effect */}
                                                                    <div className="mt-12 opacity-30 rotate-[-12deg] border-[3px] border-white px-4 py-2 inline-block text-2xl font-black uppercase tracking-widest select-none">
                                                                        EXECUTION
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </LayoutGroup>
                </div>
            </div>
        </section>
    );
}
