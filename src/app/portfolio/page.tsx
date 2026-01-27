"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import Badge from "@/components/ui/Badge";
import { ChevronRight, Brain, Terminal, Database, Sparkles, Building2, Users, GraduationCap } from "lucide-react";

// Placeholder icons for AI Stack until we have real SVGs/Images
const AiIcon = ({ name }: { name: string }) => (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default whitespace-nowrap">
        <Sparkles className="w-4 h-4 text-emerald-500" />
        <span className="text-sm font-medium text-zinc-300">{name}</span>
    </div>
);

export default function PortfolioPage() {
    return (
        <>
            <Navbar onOpenBooking={() => { }} />

            <main className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
                <style jsx global>{`
                    .font-serif { font-family: var(--font-playfair), 'Playfair Display', Georgia, serif; }
                    /* Custom Scrollbar for Horizontal Rail */
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>

                {/* --- SECTION 1: THE HERO (The "Bridge") --- */}
                <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-500/20 text-emerald-500 text-xs font-bold tracking-widest uppercase mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Dual Profile
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6">
                                Strategy in the <br />
                                <span className="text-zinc-500">Boardroom.</span><br />
                                Code in the <br />
                                <span className="text-emerald-500">Terminal.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed">
                                MBA Candidate at IIM Rohtak and Full-Stack Engineer. I don't just build software; I engineer business operations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#work"
                                    className="px-8 py-4 bg-emerald-500 text-[#050505] font-bold rounded-lg hover:bg-emerald-400 transition-colors text-center"
                                >
                                    View Projects
                                </a>
                                <a
                                    href="/resume.pdf"
                                    className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-center text-zinc-300 hover:text-white"
                                >
                                    Download CV
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/5] max-w-md mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-2xl -rotate-1 transform" />
                            {/* USER: Replace 'robin-profile.jpg' in public folder. */}
                            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-700 bg-zinc-900">
                                    [Profile Photo Placeholder]
                                </div>
                                <Image
                                    src="/robin-profile.jpg"
                                    fill
                                    alt="Robin Gautam"
                                    className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- SECTION 2: THE "AI WORKFLOW" STACK --- */}
                <section className="border-y border-white/5 bg-white/[0.02] overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                            <div className="text-center md:text-left min-w-max">
                                <h3 className="font-serif text-2xl text-white mb-2">Powered by <br /> Intelligent Infrastructure</h3>
                                <p className="text-xs text-zinc-500 uppercase tracking-widest">10x Development Velocity</p>
                            </div>

                            {/* Horizontal Scroll Rail */}
                            <div className="flex flex-1 overflow-x-auto no-scrollbar gap-4 mask-fade-sides py-2">
                                <AiIcon name="Cursor" />
                                <AiIcon name="V0.dev" />
                                <AiIcon name="Perplexity" />
                                <AiIcon name="Midjourney" />
                                <AiIcon name="Supabase AI" />
                                <AiIcon name="Claude 3.5" />
                                <AiIcon name="GPT-4o" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: SELECTED WORK (The "Proof of Skills") --- */}
                <section id="work" className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 md:flex justify-between items-end">
                            <div>
                                <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">Proof of Skills</span>
                                <h2 className="font-serif text-4xl md:text-5xl">Selected Work</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <ProjectCard
                                title="Cash Curious"
                                role="Founder & Lead Engineer"
                                pitch="Gamifying financial literacy for Gen Alpha. Built with Next.js & Supabase."
                                metric="Driven by the E-Cell initiative to foster early-age financial habits."
                                links={{ demo: "https://robingautam.in", repo: "https://github.com" }}
                                tags={["Next.js", "Supabase", "Gamification"]}
                            />

                            <ProjectCard
                                title="QuantMaster"
                                role="Architect"
                                pitch="High-frequency quantitative analysis tool for academic research."
                                metric="Optimized data processing for high-volume financial datasets."
                                links={{ demo: "#", repo: "#" }}
                                tags={["Python", "React", "Quantitative Analysis"]}
                            />

                            <ProjectCard
                                title="StockGro"
                                role="Campus Intern & Partner"
                                pitch="Led financial literacy drives reaching 2,200+ students for India's largest social trading platform."
                                metric="Secured formal partnership with DSEU."
                                tags={["Partnerships", "Growth Strategy", "FinTech"]}
                            />

                            <ProjectCard
                                title="Corstone"
                                role="Content & Outreach Intern"
                                pitch="Formulated digital strategies enhancing website traffic and stakeholder NPS."
                                metric="Improved stakeholder engagement via strategic content."
                                tags={["Content Strategy", "Digital Marketing", "NPS"]}
                            />
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: LEADERSHIP & ACADEMIC IMPACT (The "MBA" Section) --- */}
                <section className="py-24 px-6 bg-white/[0.02] border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center max-w-2xl mx-auto">
                            <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 block">Managerial & Strategic</span>
                            <h2 className="font-serif text-3xl md:text-5xl mb-6">Leadership Impact</h2>
                            <p className="text-zinc-400">Where data meets decision-making.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1: IIM Rohtak */}
                            <div className="group p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-emerald-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2 text-white">IIM Rohtak</h3>
                                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-4">Junior Coordinator, IT</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Orchestrating IT workshops (Python, PowerBI) and bridging the gap between management and tech.
                                </p>
                            </div>

                            {/* Card 2: E-Cell President */}
                            <div className="group p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-emerald-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2 text-white">E-Cell President</h3>
                                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-4">DSEU (Undergrad)</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Led a 30-member team. Executed 10+ entrepreneurship initiatives. Secured sponsorships for flagship events like 'Riwaaz'.
                                </p>
                            </div>

                            {/* Card 3: Placement Coordinator */}
                            <div className="group p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-emerald-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2 text-white">Placement Coord.</h3>
                                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 mb-4">Corporate Relations</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Managed hiring processes for 2,000+ students. Built recruiter relations to expand placement opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
