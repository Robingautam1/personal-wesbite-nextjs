"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import DemosSection from "@/components/DemosSection";
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
        { label: "Cash Curious", status: "LIVE", color: "text-emerald-500" },
        { label: "Comex Digital", status: "REFACTORING", color: "text-yellow-500" },
        { label: "System Core", status: "ONLINE", color: "text-brand-orange" },
        { label: "New Client", status: "ONBOARDING", color: "text-blue-500" },
    ];

    return (
        <div className="flex flex-col gap-2 font-mono text-xs md:text-sm text-zinc-500">
            {statuses.map((item, i) => (
                <div key={i} className="flex flex-col xs:flex-row xs:justify-between xs:items-center border-b border-white/5 pb-2 gap-1">
                    <span>{item.label}</span>
                    <span className={`font-bold ${item.color} tracking-wider self-end xs:self-auto`}>[ {item.status} ]</span>
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

    return (
        <div className="border-y border-white/10 bg-brand-black py-12 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
                {[...items, ...items, ...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className={`mx-8 text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter ${item.style === "outline"
                                ? "text-transparent stroke-text"
                                : item.style === "separator"
                                    ? "text-[#F35815] text-4xl md:text-6xl"
                                    : "text-[#F4F3EE]"
                            }`}
                    >
                        {item.text}
                    </span>
                ))}
            </motion.div>
            <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 2px white;
        }
      `}</style>
        </div>
    );
};

const ServiceCard = ({ title, desc, icon: Icon, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/5 transition-colors relative h-full flex flex-col justify-between"
    >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="text-brand-orange w-6 h-6" />
        </div>
        <div>
            <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 rounded-none border border-white/5">
                <Icon className="w-6 h-6 text-brand-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{title}</h3>
            <p className="text-zinc-400 leading-relaxed font-mono text-sm">{desc}</p>
        </div>
    </motion.div>
);

// --- AI Tools Section ---
// --- Arsenal / Services Section ---
const ArsenalSection = () => (
    <section className="py-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-brand-orange"></div>
                OUR ARSENAL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { name: "RAPID MVP DEVELOPMENT", icon: Zap, desc: "We launch functional, scalable MVPs in weeks. React, Next.js, and Supabase architecture that scales with your user base." },
                    { name: "DIGITAL STRATEGY", icon: Globe, desc: "IIM Rohtak backed business logic. We don't just clear tickets; we optimize for revenue." },
                    { name: "UI/UX SYSTEMS", icon: Bot, desc: "High-impact design systems that scream premium. Dark mode aesthetics and fluid animations." }, // Mapping V0 -> UI/UX
                    { name: "TECHNICAL SCALING", icon: LineChart, desc: "Refactoring legacy code, optimizing database queries, and setting up CI/CD pipelines for growth." }
                ].map((tool, i) => (
                    <div key={i} className="border border-white/10 bg-white/[0.02] p-6 hover:bg-white/5 transition-colors group flex flex-col h-full">
                        <tool.icon className="w-8 h-8 text-zinc-500 group-hover:text-brand-orange mb-4 transition-colors" />
                        <h3 className="font-bold text-white uppercase tracking-wider mb-2">{tool.name}</h3>
                        <p className="text-sm text-zinc-400 font-mono leading-relaxed">{tool.desc}</p>
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
        <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-orange selection:text-brand-black font-sans overflow-x-hidden">
            <NoiseOverlay />
            <Navbar onOpenBooking={openBooking} />

            {/* HERO SECTION */}
            <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 border-b border-white/10 overflow-hidden">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">

                    {/* Left: Punchline */}
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mb-8 break-words"
                        >
                            WE BUILD <br />
                            <span className="text-brand-orange">SH*T</span> THAT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600 font-black tracking-tighter animate-pulse">SLAPS.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-zinc-400 max-w-xl font-mono"
                        >
                            High-impact digital product studio. We turn napkin sketches into revenue engines. No fluff. Just code & strategy.
                        </motion.p>

                        <div className="flex flex-wrap gap-4 mt-12">
                            <Link
                                href="/work"
                                className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors text-sm md:text-base"
                            >
                                View Latest Work
                            </Link>
                            <button
                                onClick={openProjectModal}
                                className="px-6 py-3 md:px-8 md:py-4 border border-white/20 text-zinc-300 font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-colors text-sm md:text-base flex items-center gap-3"
                            >
                                <FolderOpen className="w-5 h-5" />
                                <span>Start Project</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: System Status */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="w-full bg-white/[0.03] border border-white/10 p-5 md:p-8 opacity-80 scale-95 origin-right"
                    >
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                            <span className="font-mono text-xs text-brand-orange uppercase tracking-widest">System Status</span>
                            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        </div>
                        <SystemStatusTicker />

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-xs text-zinc-500 font-mono mb-2">// LATEST DEPLOY</p>
                            <p className="font-mono text-xs md:text-sm text-white truncate">983e2cf - Revert "Pivot to High-Impact Portfolio"</p>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* TRUST MARQUEE */}
            <TrustMarquee />

            {/* AI TOOLS SEGMENT (Renamed to Arsenal) */}
            <ArsenalSection />

            {/* SERVICES (Bento Grid) - Removed as per refactor strategy */}


            {/* DEMOS SECTION */}
            <DemosSection />

            {/* PRICING SECTION (Split-Screen Industrial) */}
            <PricingSection />

            {/* PROFILE TEASER */}


            <Footer />
        </div>
    );
}
