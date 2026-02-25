"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import DeployedWorkSection from "@/components/DeployedWorkSection";
import SocialProofTicker from "@/components/SocialProofTicker";
import { ArrowRight, Check, Zap, Globe, Package, Cpu, ArrowUpRight, Bot, Terminal, LineChart, FolderOpen } from "lucide-react";

// --- Components ---

const NoiseOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);

const SystemStatusTicker = () => {
    const statuses = [
        { label: "Cash Curious", status: "LIVE", color: "text-[#25D366]" },
        { label: "Apex Dental", status: "LIVE", color: "text-[#25D366]" },
        { label: "Comex Drycleaners", status: "LIVE", color: "text-[#25D366]" },
        { label: "New Client", status: "ONBOARDING", color: "text-blue-600" },
    ];

    return (
        <div className="flex flex-col gap-2 font-mono text-xs md:text-sm text-zinc-600">
            {statuses.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-black/10 pb-2 gap-1">
                    <span>{item.label}</span>
                    <span className={`font-bold ${item.color} tracking-wider self-start sm:self-auto`}>[ {item.status} ]</span>
                </div>
            ))}
        </div>
    );
};

const TrustMarquee = () => {
    const items = [
        { text: "REVENUE ARCHITECTURE", style: "solid" },
        { text: "///", style: "separator" },
        { text: "PRODUCTION GRADE", style: "outline" },
        { text: "///", style: "separator" },
        { text: "SYSTEMS INTEGRITY", style: "solid" },
        { text: "///", style: "separator" },
        { text: "CAPITAL EFFICIENT", style: "outline" },
        { text: "///", style: "separator" },
        { text: "ZERO TECHNICAL DEBT", style: "solid" },
        { text: "///", style: "separator" },
    ];

    // High Contrast Band: Black BG with Cream Text (Forced)
    return (
        <div
            className="border-y-4 border-black bg-[#050505] py-10 overflow-hidden relative"
            style={{
                backgroundColor: '#050505'
            }}
        >
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className={`mx-8 text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter ${item.style === "outline"
                            ? "text-transparent stroke-text"
                            : item.style === "separator"
                                ? "text-[#F35815] text-3xl md:text-5xl"
                                : "text-[#F4F3EE]"
                            }`}
                    >
                        {item.text}
                    </span>
                ))}
            </motion.div>
            <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 2px #F4F3EE;
        }
      `}</style>
        </div>
    );
};


// --- AI Tools Section ---
// --- Arsenal / Services Section ---
const ArsenalSection = () => (
    <section
        className="py-24 border-b border-white/10 bg-[#050505]"
        style={{ backgroundColor: '#050505' }}
    >
        <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-4 text-[#F4F3EE]">
                <div className="w-8 h-[4px] bg-[#F35815]"></div>
                OUR ARSENAL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { name: "RAPID MVP DEVELOPMENT", icon: Zap, desc: "We launch functional, scalable MVPs in weeks. React, Next.js, and Supabase architecture that scales with your user base." },
                    { name: "DIGITAL STRATEGY", icon: Globe, desc: "Strategy frameworks built on IIM Rohtak foundations — we don't just ship features, we architect for revenue." },
                    { name: "UI/UX SYSTEMS", icon: Bot, desc: "High-impact design systems that scream premium. Dark mode aesthetics and fluid animations." },
                    { name: "TECHNICAL SCALING", icon: LineChart, desc: "Refactoring legacy code, optimizing database queries, and setting up CI/CD pipelines for growth." }
                ].map((tool, i) => (
                    <div key={i} className="border border-white/10 bg-[#F4F3EE] p-6 hover:border-[#F35815] transition-all group flex flex-col h-full shadow-sm hover:shadow-[4px_4px_0px_0px_#F35815] relative">
                        {/* Card Corner Accent */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] border-t-white/0 border-r-zinc-300 group-hover:border-r-[#F35815] transition-colors" />

                        <tool.icon className="w-8 h-8 text-black/40 group-hover:text-[#F35815] mb-4 transition-colors" />
                        <h3 className="font-bold text-black uppercase tracking-wider mb-2">{tool.name}</h3>
                        <p className="text-sm text-zinc-600 font-mono leading-relaxed">{tool.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);



import { useProjectModal } from "@/context/ProjectModalContext";

export default function DesktopExperience() {
    const { openProjectModal } = useProjectModal();

    // Keep this for any legacy links if needed, but primary is now modal
    const openBooking = () => {
        window.location.href = "mailto:hello@robingautam.in";
    }

    return (
        <div className="bg-[#F4F3EE] min-h-screen text-black selection:bg-[#F35815] selection:text-white font-sans overflow-x-hidden">
            <NoiseOverlay />
            <Navbar onOpenBooking={openBooking} />

            {/* HERO SECTION - HYBRID DARK MODE */}
            <header
                className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 border-b border-white/10 overflow-hidden relative bg-[#050505] text-[#F4F3EE]"
                style={{ backgroundColor: '#050505', color: '#F4F3EE' }}
            >
                {/* Background Grid Pattern (White for Dark Mode) */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end relative z-10">

                    {/* Left: Punchline */}
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mb-8 break-words max-w-full text-[#F4F3EE]"
                        >
                            WE BUILD <br />
                            <span className="text-[#F35815] drop-shadow-[0_0_15px_rgba(243,88,21,0.5)]">SH*T</span> THAT <br />
                            <span className="text-[#F4F3EE] font-black tracking-tighter">SLAPS.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-zinc-400 max-w-xl font-mono break-words border-l-4 border-[#F35815] pl-6"
                        >
                            Next.js websites, MVPs & digital systems for founders and local businesses in India. Strategy-first. Revenue-focused. No lock-in.
                        </motion.p>

                        <div className="flex flex-wrap gap-4 mt-12">
                            <Link
                                href="/work"
                                className="px-6 py-3 md:px-8 md:py-4 bg-[#F4F3EE] text-black font-bold uppercase tracking-widest hover:bg-[#F35815] transition-colors text-sm md:text-base border-2 border-transparent hover:border-[#F4F3EE]"
                            >
                                View Latest Work
                            </Link>
                            <button
                                onClick={openProjectModal}
                                className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-zinc-300 font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all text-sm md:text-base flex items-center gap-3"
                            >
                                <FolderOpen className="w-5 h-5" />
                                <span>Start Project</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: System Status - Dark Contrast Variant */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="w-full bg-white/[0.03] border border-white/10 p-5 md:p-8 opacity-100 md:scale-95 md:origin-right max-w-full backdrop-blur-sm relative"
                    >

                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <span className="font-mono text-xs text-[#F4F3EE] font-bold uppercase tracking-widest flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#F35815] animate-pulse" />
                                System Status
                            </span>
                            <span className="font-mono text-xs text-zinc-500">v2.4.0</span>
                        </div>
                        <SystemStatusTicker />

                        <div className="mt-8 pt-6 border-t border-white/10 bg-white/5 -mx-8 -mb-8 p-8">
                            <p className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wide">// LATEST DEPLOY</p>
                            <p className="font-mono text-xs md:text-sm text-[#F4F3EE] break-words whitespace-normal font-medium">v2.5.0 - Production · 2 Clients Live · Systems Nominal</p>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* SOCIAL PROOF TICKER */}
            <SocialProofTicker />

            {/* TRUST MARQUEE */}
            <TrustMarquee />

            {/* ARSENAL SECTION - LIGHT MODE */}
            <ArsenalSection />

            {/* DEPLOYED WORK SECTION */}
            <DeployedWorkSection />

            {/* PRICING SECTION - LIGHT MODE */}
            <PricingSection />


            <Footer />
        </div>
    );
}
