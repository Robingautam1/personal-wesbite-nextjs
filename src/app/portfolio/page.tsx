"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Briefcase, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const PROJECTS = [
    {
        id: "01",
        title: "CASH CURIOUS",
        category: "EDTECH / FIN-LIT",
        strategy: "Addressed the gap in early-stage financial education. Designed a tiered content architecture to maximize retention for Gen-Alpha users.",
        stack: ["Next.js 14", "Gamification", "Vercel"],
        link: "https://cash-curious.vercel.app/"
    },
    {
        id: "02",
        title: "COMEX DIGITAL",
        category: "SME TRANSFORMATION",
        strategy: "Digitizing brick-and-mortar operations. Focused on 'operational efficiency'—streamlining booking flows and reducing customer friction.",
        stack: ["React", "Booking Logic", "Local SEO"],
        link: "#"
    },
    {
        id: "03",
        title: "RADIOLOGY 3D",
        category: "MED-TECH",
        strategy: "Bridging the gap between medical engineering and patient understanding using spatial web technologies to visualize high-cost machinery.",
        stack: ["Three.js", "WebGL", "Physics Engine"],
        link: "#"
    },
    {
        id: "04",
        title: "RUBIK'S LOGIC",
        category: "INTERACTIVE 3D",
        strategy: "A demonstration of complex state management and algorithm visualization. Handling heavy computational logic on the client-side.",
        stack: ["R3F", "Solver Algo", "State Machines"],
        link: "#"
    }
];

export default function PortfolioPage() {
    const [activeProject, setActiveProject] = useState(PROJECTS[0].id);

    return (
        <div className="bg-[#F4F3EE] min-h-screen text-black font-sans selection:bg-[#F35815] selection:text-white">
            <Navbar onOpenBooking={() => { }} />

            <div className="max-w-[1600px] mx-auto pt-24 pb-24 md:pt-32 px-4 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* LEFT SIDE: Sticky Project List */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-[#F35815] mb-12 transition-colors">
                                ← Back to Home
                            </Link>

                            <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                                Selected <br /><span className="text-transparent stroke-text-black">Works.</span>
                            </h1>

                            <p className="font-mono text-lg text-zinc-600 max-w-sm mb-12">
                                Bridging the gap between Business Strategy and Technical Execution.
                            </p>

                            <div className="flex flex-col gap-2">
                                {PROJECTS.map((project) => (
                                    <button
                                        key={project.id}
                                        onClick={() => {
                                            setActiveProject(project.id);
                                            document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }}
                                        className={`text-left font-oswald text-2xl md:text-3xl uppercase tracking-wide py-2 border-b-2 transition-all duration-300 flex items-center gap-4 group ${activeProject === project.id
                                                ? "border-black text-black pl-4"
                                                : "border-transparent text-zinc-400 hover:text-black hover:pl-2"
                                            }`}
                                    >
                                        <span className={`text-sm font-mono transition-colors ${activeProject === project.id ? "text-[#F35815]" : "text-transparent group-hover:text-[#F35815]"}`}>
                                            {project.id}
                                        </span>
                                        {project.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Large Background Index Number - Visual Flair */}
                        <div className="hidden lg:block absolute -bottom-12 -left-12 opacity-[0.03] pointer-events-none select-none">
                            <span className="font-oswald text-[400px] font-bold leading-none">
                                {activeProject}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Scrollable Case Study Cards */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-24 pb-24">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                id={`project-${project.id}`}
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                onViewportEnter={() => setActiveProject(project.id)}
                                transition={{ duration: 0.6 }}
                                className="group"
                            >
                                {/* Card Container */}
                                <div className="bg-white border-2 border-black p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">

                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-black/5 pb-8">
                                        <div>
                                            <span className="font-mono text-xs font-bold text-[#F35815] uppercase tracking-widest mb-1 block">
                                                {project.category}
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-tight">
                                                {project.title}
                                            </h2>
                                        </div>
                                        <div className="font-oswald text-4xl text-black/10 font-bold">
                                            /{project.id}
                                        </div>
                                    </div>

                                    {/* 16:9 Visual Placeholder */}
                                    <div className="aspect-video bg-zinc-100 border-2 border-black mb-12 relative overflow-hidden group-hover:bg-zinc-200 transition-colors flex items-center justify-center">
                                        <p className="font-mono text-zinc-400 uppercase tracking-widest text-xs">
                                            [ Project Assets Loading... ]
                                        </p>
                                    </div>

                                    {/* The Split: Strategy vs Stack */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                        {/* Strategy Block */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs font-oswald">
                                                <Briefcase className="w-4 h-4" />
                                                Strategic Intent
                                            </div>
                                            <p className="text-zinc-600 leading-relaxed font-sans text-lg">
                                                {project.strategy}
                                            </p>
                                        </div>

                                        {/* Tech Stack Block */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest text-xs font-oswald">
                                                <Code2 className="w-4 h-4" />
                                                Technical Architecture
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.stack.map((tech) => (
                                                    <span key={tech} className="px-3 py-1 bg-black text-white text-xs font-mono uppercase tracking-wide">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col md:flex-row gap-4 pt-8 border-t-2 border-black/5">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-[#F35815] text-white font-oswald font-bold uppercase tracking-widest py-4 px-6 border-2 border-black hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                        >
                                            Launch Prototype <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                        <button className="flex-1 bg-white text-black font-oswald font-bold uppercase tracking-widest py-4 px-6 border-2 border-black hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                                            View Source <Github className="w-4 h-4" />
                                        </button>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
