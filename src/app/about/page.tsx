"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, BarChart3, Code2, GraduationCap, TrendingUp, Users, Terminal, ArrowRight, MessageSquareQuote } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-zinc-300 font-sans selection:bg-[#F35815] selection:text-white">
            <Navbar onOpenBooking={() => { }} />

            <main className="pt-32 pb-24 px-4 md:px-12 max-w-[1400px] mx-auto">

                {/* --- HEADER: HUMAN OPENING SECTION --- */}
                <div className="mb-24">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-[#F35815] mb-8 transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
                    </Link>

                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> // WHO IS ROBIN GAUTAM
                    </p>

                    <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-white">
                        I BUILD DIGITAL WEAPONS FOR <br />
                        <span className="stroke-text-white">AMBITIOUS FOUNDERS.</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                        <div className="space-y-6 text-lg md:text-xl font-mono text-zinc-400 leading-relaxed max-w-2xl border-l-4 border-[#1a1a1a] pl-6">
                            <p>
                                Started coding to solve real problems — not to chase trends.
                                While most developers ship features, I architect for revenue.
                                Every line of code has a business reason behind it.
                            </p>
                            <p>
                                I'm an MBA candidate at IIM Rohtak (IT Committee, 2025-27)
                                who actually builds. Not a consultant who outsources. Not a
                                freelancer who disappears. A one-person studio that thinks
                                like a strategist and executes like an engineer.
                            </p>
                            <p className="text-white font-semibold border-b-2 border-[#F35815] inline-block pb-1">
                                So far: a dental clinic dominating Rohtak's local search,
                                a 30-year-old dry cleaning brand digitized and converting,
                                and an EdTech platform helping kids learn finance through play.
                                All built from scratch. All live in production.
                            </p>
                        </div>

                        {/* IDENTITY BLOCK (Card) */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-[#0d0d0d] text-zinc-300 border border-[#1a1a1a] p-6 lg:p-8 hover:border-[#E85D26]/50 transition-colors shadow-none">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className="w-24 h-24 rounded-none overflow-hidden border-2 border-[#1a1a1a] shrink-0 relative filter grayscale group-hover:grayscale-0 transition-all">
                                        <Image src="/robin-avatar.jpg" alt="Robin Gautam" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 w-full sm:w-auto">
                                        <h2 className="font-oswald text-3xl font-bold uppercase tracking-tight mb-1 text-white">Robin Gautam</h2>
                                        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">Founder, RG Studio</p>

                                        <div className="flex flex-col gap-3 font-mono text-xs">
                                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-zinc-500 uppercase">Status</span>
                                                <div className="flex items-center gap-2 font-bold text-[#25D366]">
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                                                    </span>
                                                    AVAILABLE NOW
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                <span className="text-zinc-500 uppercase">Location</span>
                                                <span className="text-zinc-300">New Delhi, IN</span>
                                            </div>
                                            <div className="flex items-center gap-2 pt-2">
                                                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/5 text-zinc-400">IIM Rohtak</span>
                                                <span className="px-2 py-1 bg-[#1a1a1a] border border-white/5 text-zinc-400">MBA Candidate</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- THE DATA GRID (OPERATIONAL IMPACT) --- */}
                <div className="mb-32">
                    <div className="flex items-center gap-2 mb-8 border-b-2 border-[#1a1a1a] pb-4">
                        <div className="h-4 w-4 bg-[#F35815]" />
                        <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide text-white">Operational Impact</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-transparent lg:-mx-4">
                        {/* Card 1: StockGro */}
                        <div className="border-b-2 border-[#1a1a1a] md:border-r-2 p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#121212] hover:border-white/10 transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#F35815]">StockGro</span>
                                    <Users className="w-5 h-5 text-zinc-600 group-hover:text-[#F35815] transition-colors" />
                                </div>
                                <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2 text-white">Campus Leadership</h3>
                                <div className="text-5xl md:text-6xl font-oswald font-bold stroke-text-white mb-6 group-hover:stroke-width-0 group-hover:text-white transition-all">
                                    2,200+
                                </div>
                                <div className="inline-block bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    Students Engaged
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                Led financial literacy initiatives across DSEU campuses.
                                Built conversion funnels for real user adoption — not vanity
                                metrics. Result: 1,100+ active participants through targeted
                                segmentation and community-first strategy.
                            </p>
                        </div>

                        {/* Card 2: Finlatics */}
                        <div className="border-b-2 border-[#1a1a1a] lg:border-r-2 p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#121212] hover:border-white/10 transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#F35815]">Finlatics</span>
                                    <TrendingUp className="w-5 h-5 text-zinc-600 group-hover:text-[#F35815] transition-colors" />
                                </div>
                                <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2 text-white">Data Strategy</h3>
                                <div className="text-5xl md:text-6xl font-oswald font-bold stroke-text-white mb-6 group-hover:stroke-width-0 group-hover:text-white transition-all">
                                    +12%
                                </div>
                                <div className="inline-block bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    CTR Improvement
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                Don't guess. Test. Ran hypothesis-driven market validation
                                across 20+ firms — applying STP frameworks to real user data.
                                This is why every site I build has analytics baked in from day one.
                            </p>
                        </div>

                        {/* Card 3: Udyogini */}
                        <div className="border-b-2 border-[#1a1a1a] md:border-r-2 p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#121212] hover:border-white/10 transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#F35815]">Udyogini</span>
                                    <BarChart3 className="w-5 h-5 text-zinc-600 group-hover:text-[#F35815] transition-colors" />
                                </div>
                                <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2 text-white">Operational Scale</h3>
                                <div className="text-5xl md:text-6xl font-oswald font-bold stroke-text-white mb-6 group-hover:stroke-width-0 group-hover:text-white transition-all">
                                    30+
                                </div>
                                <div className="inline-block bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    Vendor Network
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                Streamlined a chaotic supply chain for a women-led enterprise.
                                Consolidated 50+ operational documents into a single source of
                                truth — same systems thinking I apply when architecting client backends.
                            </p>
                        </div>

                        {/* Card 4: IIM Rohtak */}
                        <div className="border-b-2 border-[#1a1a1a] p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:bg-[#121212] hover:border-white/10 transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#F35815]">IIM Rohtak</span>
                                    <GraduationCap className="w-5 h-5 text-zinc-600 group-hover:text-[#F35815] transition-colors" />
                                </div>
                                <h3 className="font-oswald text-3xl md:text-4xl font-bold uppercase mb-2 text-white">Academic Anchor</h3>
                                <div className="text-5xl md:text-6xl font-oswald font-bold stroke-text-white mb-6 group-hover:stroke-width-0 group-hover:text-white transition-all">
                                    MBA
                                </div>
                                <div className="inline-block bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    IT Committee (2025-27)
                                </div>
                            </div>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                Currently in the trenches at IIM Rohtak — bridging management
                                and technology. Orchestrating Python, R, and Power BI workshops
                                for future leaders. Graduating 2027. Available for projects now.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- WHAT CLIENTS SAY (SOCIAL PROOF) --- */}
                <div className="mb-32">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                        <MessageSquareQuote className="w-4 h-4" /> // SOCIAL PROOF
                    </p>
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-12">What Clients Say</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-[#0d0d0d] border-y border-r border-[#1a1a1a] border-l-4 border-l-[#F35815] p-8 md:p-10 flex flex-col justify-between relative shadow-none">
                            <QuoteIcon className="w-12 h-12 text-white/5 absolute top-6 right-6" />
                            <p className="text-zinc-300 font-serif text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
                                "Robin didn't just build us a website — he built us a
                                system. Appointments through WhatsApp, patients finding us on
                                Google, everything just works."
                            </p>
                            <div className="mt-auto">
                                <div className="h-px w-12 bg-white/20 mb-4"></div>
                                <p className="font-mono text-xs uppercase tracking-widest text-[#E85D26] font-bold">
                                    — Dr. Aashish Malik
                                </p>
                                <p className="font-mono text-xs text-zinc-500 mt-1">
                                    Apex Dental Care, Rohtak
                                </p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-[#0d0d0d] border-y border-r border-[#1a1a1a] border-l-4 border-l-[#F35815] p-8 md:p-10 flex flex-col justify-between relative shadow-none">
                            <QuoteIcon className="w-12 h-12 text-white/5 absolute top-6 right-6" />
                            <p className="text-zinc-300 font-serif text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
                                "We've been in business for 30 years. Robin made us look
                                like we've been digital for just as long. Professional, fast,
                                and he actually understood our customers."
                            </p>
                            <div className="mt-auto">
                                <div className="h-px w-12 bg-white/20 mb-4"></div>
                                <p className="font-mono text-xs uppercase tracking-widest text-[#E85D26] font-bold">
                                    — Comex Drycleaners
                                </p>
                                <p className="font-mono text-xs text-zinc-500 mt-1">
                                    Dwarka, Delhi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- THE DUAL STACK --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">

                    {/* LEFT BRAIN: ENGINEERING */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-[#1a1a1a]">
                            <Code2 className="w-5 h-5 text-[#F35815]" />
                            <h2 className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-[#F35815]">// WHAT I BUILD WITH</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: "Next.js 14", sub: "App Router" },
                                { name: "Supabase", sub: "PostgreSQL" },
                                { name: "TypeScript", sub: "Strict Mode" },
                                { name: "Tailwind CSS", sub: "Design Systems" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-end border-b border-white/10 pb-2 hover:pl-4 transition-all duration-300 group cursor-default">
                                    <span className="font-bold text-xl uppercase font-oswald text-white group-hover:text-[#F35815] transition-colors">{item.name}</span>
                                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{item.sub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT BRAIN: ANALYTICS */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-[#1a1a1a]">
                            <BarChart3 className="w-5 h-5 text-[#F35815]" />
                            <h2 className="font-mono text-sm md:text-base font-bold uppercase tracking-widest text-[#F35815]">// HOW I THINK WITH DATA</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: "Python", sub: "Data Analysis" },
                                { name: "Power BI", sub: "Visualization" },
                                { name: "R", sub: "Statistical Computing" },
                                { name: "Financial Modeling", sub: "BFSI Core" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-end border-b border-white/10 pb-2 hover:pl-4 transition-all duration-300 group cursor-default">
                                    <span className="font-bold text-xl uppercase font-oswald text-white group-hover:text-[#F35815] transition-colors">{item.name}</span>
                                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{item.sub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* --- STRONG CTA BLOCK --- */}
                <div className="bg-[#121212] text-white p-8 md:p-16 border-l-8 border-[#F35815]">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                        // READY TO BUILD?
                    </p>
                    <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-10 max-w-3xl text-white">
                        You've read the story. <br />
                        <span className="text-[#F35815]">Now let's write yours.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                            href="https://wa.me/918292511007?text=Hey%20Robin%2C%20I%20read%20your%20about%20page.%20Let's%20talk%20about%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black font-oswald font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#E85D26] hover:text-white transition-colors"
                        >
                            START A PROJECT <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link
                            href="/work"
                            className="bg-transparent border-2 border-white/20 text-white font-oswald font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            VIEW OUR WORK <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <p className="font-mono text-xs text-zinc-500 flex flex-wrap gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        Typical response time: under 2 hours · New Delhi, IN · Available for projects globally
                    </p>
                </div>

            </main>

            <Footer />
        </div>
    );
}

function QuoteIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
    )
}
