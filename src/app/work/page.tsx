"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Cash Curious",
        desc: "A fintech literacy platform designed to simplify complex financial concepts for the new generation.",
        tags: ["Next.js", "Finance", "Education"],
        link: "https://github.com/Robingautam1/cash-curious",
        color: "bg-emerald-500",
    },
    {
        title: "Quant Master",
        desc: "Advanced algorithmic trading dashboard for analyzing market trends and executing strategies.",
        tags: ["Python", "Algo Trading", "Data Science"],
        link: "https://github.com/Robingautam1/quant-master",
        color: "bg-blue-600",
    },
];

export default function WorkPage() {
    const openBooking = () => {
        window.open('https://calendly.com/robingautam', '_blank');
    }

    return (
        <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-orange selection:text-black">
            <Navbar onOpenBooking={openBooking} />

            <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="mb-16 border-b border-white/10 pb-8">
                    <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-6">
                        Latest <span className="text-brand-orange">Work</span>.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl font-mono">
                        Selected case studies and open source contributions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative border border-white/10 bg-white/[0.02] p-8 md:p-12 hover:bg-white/[0.05] transition-colors flex flex-col justify-between h-[400px]"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-8 h-8 text-white" />
                            </div>

                            <div>
                                <div className="flex gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-4xl font-bold uppercase tracking-tight mb-4 group-hover:underline decoration-brand-orange decoration-2 underline-offset-4">
                                    {project.title}
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="mt-8">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    View Source
                                </a>
                            </div>

                            {/* Decorative Square Accent */}
                            <div className={`absolute bottom-0 right-0 w-2 h-16 ${project.color}`} />
                            <div className={`absolute bottom-0 right-0 w-16 h-2 ${project.color}`} />
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
