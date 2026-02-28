"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useProjectModal } from "@/context/ProjectModalContext";

export default function Footer() {
    const { openProjectModal } = useProjectModal();

    return (
        <footer className="relative bg-[#121212] text-[#F4F3EE] overflow-hidden">
            {/* --- Section A: The Call to Action --- */}
            <div className="pt-20 pb-10 px-6 md:px-12 lg:px-20 border-b border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Headline & CTA */}
                    <div className="space-y-8">
                        <h2 className="font-oswald text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-white">
                            Enough<br />Scrolling.
                        </h2>
                        <div className="space-y-8 max-w-xl">
                            <p className="font-mono text-xl text-zinc-400 leading-relaxed">
                                You've seen the strategy. You've seen the code. The only variable left is execution.
                            </p>

                            <a
                                href="https://wa.me/918292511007?text=Hey%20Robin%2C%20I'm%20ready%20to%20initiate.%20Let's%20talk."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#F35815] text-white font-oswald text-xl font-bold uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all"
                            >
                                <span>Initiate Protocol</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: The Strategist ID (Desktop Only or Stacked) */}
                    <div className="sticky top-20 hidden lg:block justify-self-end mt-12">
                        <motion.div
                            initial={{ rotate: -5, y: 50, opacity: 0 }}
                            whileInView={{ rotate: 3, y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="bg-[#F4F3EE] text-black w-[350px] p-6 rounded-sm shadow-[20px_20px_0px_0px_rgba(243,88,21,0.2)] border-2 border-black relative transform rotate-3"
                        >
                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm border border-white/40 rotate-1 shadow-sm" />

                            <div className="flex gap-6">
                                {/* Avatar */}
                                <div className="w-24 h-32 bg-zinc-200 border-2 border-black shrink-0 overflow-hidden relative grayscale contrast-125">
                                    <img
                                        src="/robin-avatar.jpg"
                                        alt="Robin Gautam"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Scanlines overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none" />
                                </div>

                                {/* Details */}
                                <div className="space-y-4 font-mono text-xs flex-1">
                                    <div className="space-y-1">
                                        <div className="uppercase tracking-widest text-zinc-500 text-[10px]">Ident</div>
                                        <div className="font-bold text-lg uppercase leading-none">Robin Gautam</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="uppercase tracking-widest text-zinc-500 text-[10px]">Clearance</div>
                                        <div className="font-bold bg-black text-white inline-block px-2 py-1">STRATEGIST LVL</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="uppercase tracking-widest text-zinc-500 text-[10px]">Status</div>
                                        <div className="flex items-center gap-2 font-bold text-[#25D366]">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                                            </span>
                                            AVAILABLE NOW
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Barcode / Footer of Card */}
                            <div className="mt-6 pt-4 border-t-2 border-dashed border-black flex justify-between items-end">
                                <div className="h-8 w-32 bg-black/10 flex items-center justify-center font-mono text-[10px] tracking-[0.2em]">
                                    ||| || ||| |
                                </div>
                                <div className="font-mono text-[10px] text-right">
                                    ID: RG-8821<br />
                                    AUTH: VALID
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- Section C: The Navigation --- */}
            <div className="px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand / Statement */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="w-10 h-10 bg-[#F35815] flex items-center justify-center font-oswald font-bold text-black text-xl">
                            R
                        </div>
                        <p className="font-mono text-sm text-zinc-500">
                            We build digital weapons for ambitious founders.
                        </p>

                        <div className="pt-6 space-y-3">
                            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                                // POWERING LIVE PRODUCTIONS
                            </p>
                            <div className="flex flex-col gap-2 font-mono text-xs text-zinc-400">
                                <a href="https://apexdentalcare.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 group w-fit">
                                    apexdentalcare.co.in <ArrowUpRight className="w-3 h-3 group-hover:text-[#F35815] transition-colors" />
                                </a>
                                <a href="https://comexdrycleaner.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 group w-fit">
                                    comexdrycleaner.com <ArrowUpRight className="w-3 h-3 group-hover:text-[#F35815] transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Protocol */}
                    <div className="space-y-6">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[#F35815]">Protocol</h3>
                        <ul className="space-y-4 font-mono text-sm">
                            <li><Link href="/process" className="hover:text-[#F35815] transition-colors">The Process</Link></li>
                            <li><Link href="/work" className="hover:text-[#F35815] transition-colors">Our Work</Link></li>
                        </ul>
                    </div>

                    {/* Signal */}
                    <div className="space-y-6">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[#F35815]">Signal</h3>
                        <ul className="space-y-4 font-mono text-sm">
                            <li><a href="https://linkedin.com/in/robin-gautam-09b693240" target="_blank" className="flex items-center gap-2 hover:text-[#F35815] transition-colors">LinkedIn <ArrowRight className="w-3 h-3" /></a></li>
                            <li><a href="mailto:hello@robingautam.in" className="flex items-center gap-2 hover:text-[#F35815] transition-colors">Email <ArrowRight className="w-3 h-3" /></a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[#F35815]">Legality</h3>
                        <ul className="space-y-4 font-mono text-sm text-zinc-500">
                            <li>© 2026 RG Studio.</li>
                            <li>Code is Law.</li>
                            <li>New Delhi, IN.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* --- Section D: The Ticker --- */}
            <div className="border-t border-white/10 py-4 bg-black overflow-hidden relative">
                <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" /> {/* Overlay for dimmer effect */}
                <div className="flex gap-8 animate-marquee whitespace-nowrap font-mono text-xs md:text-sm tracking-[0.2em] text-[#F35815]/80">
                    {Array(8).fill("STRATEGY FIRST • CODE SECOND • ROI FOCUSED • ACCEPTING NEW CLIENTS •").map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </footer>
    );
}
