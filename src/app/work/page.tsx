"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, MousePointer2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

type Project = {
    id: string;
    title: string;
    category: string;
    strategy: string;
    stack: string[];
    link: string;
    status: "LIVE" | "IN DEVELOPMENT" | "COMING SOON";
    outcome?: { label: string; value: string }[];
};

const PROJECTS: Project[] = [
    {
        id: "01",
        title: "CASH CURIOUS",
        category: "EDTECH VENTURE",
        strategy: "Addressed the gap in early-stage financial education. Designed a tiered content architecture (ages 6-10 vs 15+) to maximize retention. Focused on 'Play-to-Learn' mechanics.",
        stack: ["Next.js 14", "Gamification", "Vercel Edge"],
        link: "https://cash-curious.vercel.app/",
        status: "LIVE"
    },
    {
        id: "02",
        title: "APEX DENTAL CARE",
        category: "HEALTHCARE · LOCAL BUSINESS",
        strategy: "Rohtak's most trusted dental clinic needed a digital presence that matched the quality of care Dr. Aashish Malik was already delivering. Built a full-stack Next.js site with multi-location SEO, 8 individual service pages, WhatsApp appointment booking, blog CMS, and a lead capture system — all optimized to rank for high-intent local searches like \"best dental clinic in Rohtak.\"",
        outcome: [
            { label: "Google Reviews", value: "38 · 5.0 Star Rating" },
            { label: "SEO Status", value: "8 Service Pages Indexed" },
            { label: "Integration", value: "WhatsApp Booking Live" },
            { label: "Reach", value: "2 Clinic Locations Covered" }
        ],
        stack: ["Next.js 14", "Local SEO", "Healthcare", "WhatsApp CRM", "Vercel"],
        link: "https://apexdentalcare.co.in",
        status: "LIVE"
    },
    {
        id: "03",
        title: "COMEX DRYCLEANERS",
        category: "LOCAL SERVICES · DELHI",
        strategy: "A 30-year-old premium dry cleaning brand in Dwarka needed more than a website — they needed a digital identity that justified charging premium prices in a commoditized market. Built a full Next.js site with online booking, transparent pricing tables, WhatsApp integration, a callback lead system, and brand positioning that communicates quality over convenience.",
        outcome: [
            { label: "Scale", value: "5,000+ Happy Customers" },
            { label: "Legacy", value: "30+ Years Heritage Digitized" },
            { label: "Integration", value: "Online Booking Live" },
            { label: "Rating", value: "4.9/5.0 Rating" }
        ],
        stack: ["Next.js 14", "Booking System", "Local Business", "Brand Identity", "Vercel"],
        link: "https://comexdrycleaner.com",
        status: "LIVE"
    },
    {
        id: "04",
        title: "RADIOLOGY 3D",
        category: "INTERACTIVE MED-TECH",
        strategy: "Bridging the gap between medical engineering and patient understanding. Used spatial web technologies to visualize high-cost machinery, reducing anxiety through education.",
        stack: ["Three.js", "WebGL", "Low-Poly Opt."],
        link: "#",
        status: "COMING SOON"
    },
    {
        id: "05",
        title: "THE CUBE",
        category: "SPATIAL LOGIC",
        strategy: "A demonstration of complex state management. Proves the ability to handle heavy computational logic on the client-side without performance degradation.",
        stack: ["R3F", "Inverse Kinematics", "Algorithm"],
        link: "#",
        status: "COMING SOON"
    }
];

export default function PortfolioPage() {
    const [activeProject, setActiveProject] = useState(PROJECTS[0]);

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-zinc-300 font-sans selection:bg-[#F35815] selection:text-white">
            <Navbar onOpenBooking={() => { }} />

            {/* --- PAGE HEADER --- */}
            <div className="pt-32 px-4 md:px-12 border-b-2 border-[#1a1a1a] pb-12">
                <div className="max-w-[1800px] mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-[#F35815] mb-8 transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
                    </Link>

                    <h1 className="text-7xl md:text-9xl font-oswald font-bold uppercase tracking-tighter leading-[0.8] mb-6 text-white">
                        SELECTED <br />
                        <span className="stroke-text-white">WORKS</span>
                    </h1>

                    {/* System Status Ticker */}
                    <div className="flex overflow-hidden border-t-2 border-white/10 py-2 mb-4">
                        <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#F35815] whitespace-nowrap animate-marquee">
                            /// DEPLOYED IN PRODUCTION /// REVENUE FOCUSED /// HIGH VELOCITY /// STRATEGIC ENGINEERING /// DEPLOYED IN PRODUCTION /// REVENUE FOCUSED ///
                        </div>
                    </div>

                    {/* Status Legend */}
                    <div className="flex flex-wrap gap-4 md:gap-6 font-mono text-[0.7rem] text-[#666] uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#25D366]"></span> LIVE
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full border border-[#666]"></span> IN DEVELOPMENT
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full border border-[#666] border-dashed"></span> COMING SOON
                        </div>
                    </div>

                </div>
            </div>

            {/* --- THE STICKY SPLIT LAYOUT --- */}
            <div className="max-w-[1800px] mx-auto px-4 md:px-12">
                <div className="flex flex-col-reverse lg:flex-row">

                    {/* LEFT COLUMN: The Index (Scrollable List) */}
                    <div className="w-full lg:w-1/2 py-12 lg:pr-24 flex flex-col gap-4">
                        <div className="lg:hidden mb-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
                            [ SCROLL TO EXPLORE ]
                        </div>

                        {PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => setActiveProject(project)}
                                className={`group relative p-6 md:p-8 border-b border-white/10 transition-all duration-300 cursor-default
                                    ${activeProject.id === project.id
                                        ? "bg-[#121212] border-[#F35815]"
                                        : "hover:bg-[#121212] hover:border-white/20"
                                    }`}
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <span className={`font-mono text-sm font-bold ${activeProject.id === project.id ? "text-[#F35815]" : "text-zinc-500 group-hover:text-white"}`}>
                                            /{project.id}
                                        </span>

                                        <div className="flex flex-col items-end gap-2">
                                            {/* Status Badge */}
                                            {project.status === "LIVE" && (
                                                <div className="flex items-center justify-end gap-2 font-mono text-xs font-bold text-[#25D366] tracking-widest">
                                                    <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                                                    // LIVE
                                                </div>
                                            )}
                                            {project.status === "COMING SOON" && (
                                                <div className="flex items-center justify-end gap-2 font-mono text-xs font-bold text-[#444] tracking-widest">
                                                    [ COMING SOON ]
                                                </div>
                                            )}

                                            {/* Category Tag */}
                                            <span className={`font-mono text-xs uppercase tracking-widest px-2 py-1 border mt-1 ${activeProject.id === project.id ? "border-[#F35815] text-[#F35815]" : "border-white/10 text-zinc-500 group-hover:border-white/30 group-hover:text-zinc-300"}`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl sm:text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight leading-none mt-4 text-white">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Mobile Detail View (Expandable) - Visible only on mobile */}
                                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeProject.id === project.id ? "max-h-[1400px] mt-8 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="bg-[#0d0d0d] text-zinc-300 border-2 border-[#1a1a1a] p-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)]">

                                        <div className="inline-block bg-[#F35815] text-white font-oswald font-bold uppercase tracking-widest text-xs px-2 py-1 mb-4">
                                            Strategic Intent
                                        </div>
                                        <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium text-zinc-400">
                                            {project.strategy}
                                        </p>

                                        {/* Outcome Grid for Mobile */}
                                        {project.outcome && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-[#1a1a1a] border border-white/5 p-4 font-mono text-xs">
                                                {project.outcome.map((metric, i) => (
                                                    <div key={i} className="space-y-1">
                                                        <div className="text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                                                        <div className="text-white font-bold">{metric.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            {project.status === "LIVE" ? (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-black font-bold uppercase tracking-widest text-xs py-4 text-center hover:bg-[#F35815] hover:text-white transition-colors">
                                                    View Live
                                                </a>
                                            ) : (
                                                <div className="flex-1 flex items-center justify-center py-4 bg-[#121212] border border-white/5 cursor-not-allowed">
                                                    <span style={{ color: '#444', cursor: 'not-allowed', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                                                        [ COMING SOON ]
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: The Viewer (Sticky on Desktop) */}
                    <div className="hidden lg:block w-1/2 relative">
                        <div className="sticky top-32 py-12 h-[calc(100vh-8rem)] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, ease: "circOut" }}
                                    className="w-full"
                                >
                                    {/* THE DETAIL CARD */}
                                    <div className="bg-[#0d0d0d] border-4 border-[#1a1a1a] p-12 shadow-[16px_16px_0px_0px_rgba(255,255,255,0.05)]">

                                        {/* Status Badge (Desktop) */}
                                        <div className="flex justify-end mb-4">
                                            {activeProject.status === "LIVE" && (
                                                <div className="flex items-center gap-2 font-mono text-sm font-bold text-[#25D366] tracking-widest px-3 py-1 bg-[#1a1a1a] border border-white/5">
                                                    <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
                                                    // LIVE
                                                </div>
                                            )}
                                        </div>

                                        {/* Strategy Block */}
                                        <div className="mb-8">
                                            <span className="inline-block bg-[#F35815] text-white font-oswald font-bold uppercase tracking-widest text-sm px-3 py-1 mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)]">
                                                Strategic Intent
                                            </span>
                                            <p className="text-lg xl:text-xl leading-relaxed font-sans font-medium text-zinc-300">
                                                {activeProject.strategy}
                                            </p>
                                        </div>

                                        {/* Outcome Grid for Desktop */}
                                        {activeProject.outcome && (
                                            <div className="grid grid-cols-2 gap-6 mb-8 bg-[#121212] border border-white/10 p-6 font-mono text-sm">
                                                {activeProject.outcome.map((metric, i) => (
                                                    <div key={i} className="space-y-1">
                                                        <div className="text-zinc-500 uppercase tracking-wider text-xs">{metric.label}</div>
                                                        <div className="text-white font-bold">{metric.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Stack */}
                                        <div className="mb-8 flex flex-wrap gap-2">
                                            {activeProject.stack.map(tech => (
                                                <span key={tech} className="font-mono text-xs font-bold uppercase tracking-widest border border-white/20 px-2 py-1 bg-[#121212] text-zinc-400">
                                                    [{tech}]
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="grid grid-cols-2 gap-4 mt-8">
                                            {activeProject.status === "LIVE" ? (
                                                <a
                                                    href={activeProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-black font-oswald font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#F35815] hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all"
                                                >
                                                    View Live <ArrowUpRight className="w-5 h-5" />
                                                </a>
                                            ) : (
                                                <div className="col-span-2 flex items-center justify-center py-4 bg-[#121212] border-2 border-white/5 cursor-not-allowed">
                                                    <span style={{ color: '#444', cursor: 'not-allowed', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                                                        [ COMING SOON ]
                                                    </span>
                                                </div>
                                            )}

                                            {activeProject.status === "LIVE" && (
                                                <div className="flex flex-col">
                                                    <div className="h-full flex items-center justify-center bg-transparent border-2 border-white/20 py-4 cursor-not-allowed">
                                                        <span style={{ color: '#444', cursor: 'not-allowed', fontFamily: 'monospace', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                                                            [ COMING SOON ]
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
