"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, MousePointer2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
    {
        id: "01",
        title: "CASH CURIOUS",
        category: "EDTECH VENTURE",
        strategy: "Addressed the gap in early-stage financial education. Designed a tiered content architecture (ages 6-10 vs 15+) to maximize retention. Focused on 'Play-to-Learn' mechanics.",
        stack: ["Next.js 14", "Gamification", "Vercel Edge"],
        link: "https://cash-curious.vercel.app/"
    },
    {
        id: "02",
        title: "COMEX DIGITAL",
        category: "SME TRANSFORMATION",
        strategy: "Digitizing a brick-and-mortar operation. The goal was 'operational efficiency'—streamlining booking flows and reducing customer friction points via a custom scheduling engine.",
        stack: ["React", "Booking Logic", "Local SEO"],
        link: "#"
    },
    {
        id: "03",
        title: "RADIOLOGY 3D",
        category: "INTERACTIVE MED-TECH",
        strategy: "Bridging the gap between medical engineering and patient understanding. Used spatial web technologies to visualize high-cost machinery, reducing anxiety through education.",
        stack: ["Three.js", "WebGL", "Low-Poly Opt."],
        link: "#"
    },
    {
        id: "04",
        title: "THE CUBE",
        category: "SPATIAL LOGIC",
        strategy: "A demonstration of complex state management. Proves the ability to handle heavy computational logic on the client-side without performance degradation.",
        stack: ["R3F", "Inverse Kinematics", "Algorithm"],
        link: "#"
    }
];

export default function PortfolioPage() {
    const [activeProject, setActiveProject] = useState(PROJECTS[0]);

    return (
        <div className="bg-[#F4F3EE] min-h-screen text-[#121212] font-sans selection:bg-[#F35815] selection:text-white">
            <Navbar onOpenBooking={() => { }} />

            {/* --- PAGE HEADER --- */}
            <div className="pt-32 px-4 md:px-12 border-b-2 border-black pb-12">
                <div className="max-w-[1800px] mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-[#F35815] mb-8 transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
                    </Link>

                    <h1 className="text-7xl md:text-9xl font-oswald font-bold uppercase tracking-tighter leading-[0.8] mb-6">
                        SELECTED <br />
                        <span className="text-transparent stroke-text-black">WORKS</span>
                    </h1>

                    {/* System Status Ticker */}
                    <div className="flex overflow-hidden border-t-2 border-black/10 py-2">
                        <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#F35815] whitespace-nowrap animate-marquee">
                            /// DEPLOYED IN PRODUCTION /// REVENUE FOCUSED /// HIGH VELOCITY /// STRATEGIC ENGINEERING /// DEPLOYED IN PRODUCTION /// REVENUE FOCUSED ///
                        </div>
                    </div>
                </div>
            </div>

            {/* --- THE STICKY SPLIT LAYOUT --- */}
            <div className="max-w-[1800px] mx-auto px-4 md:px-12">
                <div className="flex flex-col-reverse lg:flex-row">

                    {/* LEFT COLUMN: The Index (Scrollable List) */}
                    <div className="w-full lg:w-1/2 py-12 lg:pr-24 flex flex-col gap-4">
                        <div className="lg:hidden mb-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
                            [ SCROLL TO EXPLORE ]
                        </div>

                        {PROJECTS.map((project) => (
                            <div
                                key={project.id}
                                onMouseEnter={() => setActiveProject(project)}
                                className={`group relative p-6 md:p-8 border-b border-black/10 transition-all duration-300 cursor-default
                                    ${activeProject.id === project.id
                                        ? "bg-[#121212] text-white border-[#F35815]"
                                        : "hover:bg-white hover:border-black"
                                    }`}
                            >
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <span className={`font-mono text-sm font-bold ${activeProject.id === project.id ? "text-[#F35815]" : "text-zinc-400 group-hover:text-black"}`}>
                                            /{project.id}
                                        </span>
                                        <span className={`font-mono text-xs uppercase tracking-widest px-2 py-1 border ${activeProject.id === project.id ? "border-[#F35815] text-[#F35815]" : "border-black/20 text-zinc-500 group-hover:border-black group-hover:text-black"}`}>
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight leading-none">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Mobile Detail View (Expandable) - Visible only on mobile */}
                                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeProject.id === project.id ? "max-h-[800px] mt-8 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                                        <div className="aspect-video bg-zinc-200 border border-black mb-6 flex items-center justify-center">
                                            <ArrowUpRight className="w-12 h-12 text-zinc-400" />
                                        </div>
                                        <div className="inline-block bg-[#F35815] text-white font-oswald font-bold uppercase tracking-widest text-xs px-2 py-1 mb-4">
                                            Strategic Intent
                                        </div>
                                        <p className="text-lg leading-relaxed mb-6 font-medium text-zinc-800">
                                            {project.strategy}
                                        </p>
                                        <div className="flex gap-4">
                                            <a href={project.link} className="flex-1 bg-black text-white font-bold uppercase tracking-widest text-xs py-4 text-center hover:bg-[#F35815] transition-colors">
                                                View Live
                                            </a>
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
                                    <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_#000]">

                                        {/* Visual */}
                                        <div className="aspect-video bg-zinc-100 border-2 border-black mb-8 relative group overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <ArrowUpRight className="w-24 h-24 text-zinc-300 group-hover:text-[#F35815] group-hover:scale-110 transition-all duration-500" />
                                            </div>
                                            {/* Scanline Effect */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                                        </div>

                                        {/* Strategy Block */}
                                        <div className="mb-8">
                                            <span className="inline-block bg-[#F35815] text-white font-oswald font-bold uppercase tracking-widest text-sm px-3 py-1 mb-4 shadow-[4px_4px_0px_0px_#000]">
                                                Strategic Intent
                                            </span>
                                            <p className="text-xl leading-relaxed font-sans font-medium text-[#121212]">
                                                {activeProject.strategy}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mb-8 flex flex-wrap gap-2">
                                            {activeProject.stack.map(tech => (
                                                <span key={tech} className="font-mono text-xs font-bold uppercase tracking-widest border border-black px-2 py-1 bg-zinc-50">
                                                    [{tech}]
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <a
                                                href={activeProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black text-white font-oswald font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-[#F35815] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-all"
                                            >
                                                View Live <ArrowRight className="w-4 h-4" />
                                            </a>
                                            <button className="bg-transparent text-black border-2 border-black font-oswald font-bold uppercase tracking-widest py-4 hover:bg-zinc-100 hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-all">
                                                Case Study
                                            </button>
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
