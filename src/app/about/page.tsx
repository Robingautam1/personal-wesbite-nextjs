"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, BarChart3, Code2, GraduationCap, TrendingUp, Users } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="bg-[#F4F3EE] min-h-screen text-[#121212] font-sans selection:bg-[#F35815] selection:text-white">
            <Navbar onOpenBooking={() => { }} />

            <main className="pt-32 pb-24 px-4 md:px-12 max-w-[1400px] mx-auto">

                {/* --- HEADER --- */}
                <div className="mb-24 border-b-2 border-black pb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-zinc-500 hover:text-[#F35815] mb-8 transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
                    </Link>

                    <h1 className="text-7xl md:text-9xl font-oswald font-bold uppercase tracking-tighter leading-[0.85] mb-8">
                        FULL STACK <br />
                        <span className="text-transparent stroke-text-black">IS NOT ENOUGH.</span>
                    </h1>

                    <p className="text-xl md:text-2xl font-mono text-zinc-600 max-w-4xl leading-relaxed">
                        Great code fails without a business model. I combine <span className="text-[#121212] font-bold border-b-2 border-[#F35815]">IIM Rohtak strategic rigor</span> with <span className="text-[#121212] font-bold border-b-2 border-[#F35815]">Next.js engineering</span> to build assets that actually perform.
                    </p>
                </div>

                {/* --- THE DATA GRID (REPORT CARD) --- */}
                <div className="mb-32">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="h-4 w-4 bg-[#F35815]" />
                        <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide">Operational Impact</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-black">
                        {/* Card 1: StockGro */}
                        <div className="border-b-2 border-black md:border-r-2 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-white transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">StockGro</span>
                                    <Users className="w-5 h-5 text-[#F35815]" />
                                </div>
                                <h3 className="font-oswald text-4xl font-bold uppercase mb-2">Campus Leadership</h3>
                                <div className="text-6xl font-oswald font-bold text-transparent stroke-text-black mb-6 group-hover:text-[#121212] group-hover:stroke-width-0 transition-all">
                                    2,200+
                                </div>
                                <div className="inline-block bg-[#121212] text-white text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    Student Engagement
                                </div>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                Led financial literacy drives at DSEU. It wasn't just an event; it was a conversion funnel. drove 1,100+ active participants and optimized adoption rates through targeted segmentation.
                            </p>
                        </div>

                        {/* Card 2: Finlatics */}
                        <div className="border-b-2 border-black lg:border-r-2 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-white transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Finlatics</span>
                                    <TrendingUp className="w-5 h-5 text-[#F35815]" />
                                </div>
                                <h3 className="font-oswald text-4xl font-bold uppercase mb-2">Data Strategy</h3>
                                <div className="text-6xl font-oswald font-bold text-transparent stroke-text-black mb-6 group-hover:text-[#121212] group-hover:stroke-width-0 transition-all">
                                    +12%
                                </div>
                                <div className="inline-block bg-[#121212] text-white text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    CTR Improvement
                                </div>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                I don't guess; I test. Conducted hypothesis testing across 20+ firms, validating market positioning (STP) with real user data rather than assumptions.
                            </p>
                        </div>

                        {/* Card 3: Udyogini */}
                        <div className="border-b-2 border-black md:border-r-2 p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-white transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Udyogini</span>
                                    <BarChart3 className="w-5 h-5 text-[#F35815]" />
                                </div>
                                <h3 className="font-oswald text-4xl font-bold uppercase mb-2">Operational Scale</h3>
                                <div className="text-6xl font-oswald font-bold text-transparent stroke-text-black mb-6 group-hover:text-[#121212] group-hover:stroke-width-0 transition-all">
                                    30+
                                </div>
                                <div className="inline-block bg-[#121212] text-white text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    Vendor Network
                                </div>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                Streamlined a chaotic supply chain. Consolidated 50+ operational documents into a single source of truth, reducing reporting time and error rates.
                            </p>
                        </div>

                        {/* Card 4: IIM Rohtak */}
                        <div className="border-b-2 border-black p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-white transition-colors group">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">IIM Rohtak</span>
                                    <GraduationCap className="w-5 h-5 text-[#F35815]" />
                                </div>
                                <h3 className="font-oswald text-4xl font-bold uppercase mb-2">Academic Anchor</h3>
                                <div className="text-6xl font-oswald font-bold text-transparent stroke-text-black mb-6 group-hover:text-[#121212] group-hover:stroke-width-0 transition-all">
                                    MBA
                                </div>
                                <div className="inline-block bg-[#121212] text-white text-xs font-mono uppercase tracking-widest px-2 py-1 mb-4">
                                    IT Committee (2025-27)
                                </div>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                Currently bridging the gap between management and tech. Orchestrating workshops on Python, R, and Power BI to equip future leaders with technical literacy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- THE DUAL STACK --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">

                    {/* LEFT BRAIN: ENGINEERING */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-black">
                            <Code2 className="w-6 h-6 text-[#F35815]" />
                            <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide">Engineering (The Build)</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: "Next.js 14", sub: "App Router" },
                                { name: "Supabase", sub: "PostgreSQL" },
                                { name: "TypeScript", sub: "Strict Mode" },
                                { name: "Tailwind CSS", sub: "Design Systems" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-end border-b border-black/10 pb-2 hover:pl-4 transition-all duration-300 group cursor-default">
                                    <span className="font-bold text-xl uppercase font-oswald group-hover:text-[#F35815] transition-colors">{item.name}</span>
                                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{item.sub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT BRAIN: ANALYTICS */}
                    <div>
                        <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-black">
                            <BarChart3 className="w-6 h-6 text-[#F35815]" />
                            <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide">Analytics (The Business)</h2>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: "Python", sub: "Data Analysis" },
                                { name: "Power BI", sub: "Visualization" },
                                { name: "R", sub: "Statistical Computing" },
                                { name: "Financial Modeling", sub: "BFSI Core" }
                            ].map((item, i) => (
                                <li key={i} className="flex justify-between items-end border-b border-black/10 pb-2 hover:pl-4 transition-all duration-300 group cursor-default">
                                    <span className="font-bold text-xl uppercase font-oswald group-hover:text-[#F35815] transition-colors">{item.name}</span>
                                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{item.sub}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
