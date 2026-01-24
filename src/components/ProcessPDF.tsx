"use client";

import React from "react";
import { Compass, Hammer, Rocket, CheckCircle2 } from "lucide-react";

export default function ProcessPDF() {
    return (
        <div className="w-[210mm] h-[297mm] bg-white text-black p-12 flex flex-col justify-between font-sans relative overflow-hidden mx-auto shadow-2xl">
            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neutral-200 via-blue-600 to-neutral-200" />

            {/* Header Section */}
            <header className="flex justify-between items-start pt-8 border-b border-neutral-200 pb-8">
                <div className="space-y-4 max-w-lg">
                    <h1 className="text-5xl font-serif font-bold tracking-tight text-neutral-900 leading-tight">
                        The Development
                        <br />
                        <span className="text-blue-600">Roadmap</span>
                    </h1>
                    <p className="text-lg text-neutral-500 font-light tracking-wide">
                        From Strategy to Scale. How I treat your project like a business case.
                    </p>
                </div>

                <div className="flex items-center space-x-2 bg-neutral-100 px-4 py-2 rounded-full border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
                        Verified Developer
                    </span>
                </div>
            </header>

            {/* Core Section: The Timeline */}
            <main className="flex-grow flex flex-col justify-center py-12">
                <div className="relative space-y-16 pl-8">
                    {/* Vertical Line */}
                    <div className="absolute top-4 bottom-4 left-[27px] w-px bg-neutral-200" />

                    {/* Phase 1 */}
                    <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 p-3 bg-white border border-neutral-200 rounded-full z-10 shadow-sm group-hover:border-blue-600 transition-colors">
                            <Compass className="w-6 h-6 text-neutral-800" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                    Day 1
                                </span>
                                <h2 className="text-2xl font-bold text-neutral-900">The Audit</h2>
                            </div>
                            <p className="text-neutral-600 text-lg font-light leading-relaxed max-w-xl">
                                We don&apos;t guess. I analyze your 3 top competitors and design a UI that creates a distinct market advantage.
                            </p>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 p-3 bg-blue-600 border border-blue-600 rounded-full z-10 shadow-md">
                            <Hammer className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                    Days 2-4
                                </span>
                                <h2 className="text-2xl font-bold text-neutral-900">The Build</h2>
                            </div>
                            <p className="text-neutral-600 text-lg font-light leading-relaxed max-w-xl">
                                Sprint-based development. You get a &lsquo;Live Preview Link&rsquo; halfway through to approve the direction before I finalize the code.
                            </p>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative pl-12 group">
                        <div className="absolute left-0 top-1 p-3 bg-white border border-neutral-200 rounded-full z-10 shadow-sm group-hover:border-blue-600 transition-colors">
                            <Rocket className="w-6 h-6 text-neutral-800" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="px-2 py-0.5 bg-neutral-100 text-neutral-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                    Final Day
                                </span>
                                <h2 className="text-2xl font-bold text-neutral-900">The Launch</h2>
                            </div>
                            <p className="text-neutral-600 text-lg font-light leading-relaxed max-w-xl">
                                Zero-stress deployment. I configure Vercel, connect your domain, and transfer full ownership of the Source Code to you.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="pt-8 border-t border-neutral-200 flex justify-between items-end">
                <div className="space-y-2">
                    <p className="text-sm font-semibold text-neutral-900 uppercase tracking-widest">
                        Ready to build?
                    </p>
                    <p className="text-neutral-500 text-sm max-w-xs">
                        Book the gig to secure your development slot for this week.
                    </p>
                </div>

                <div className="text-right">
                    <p className="font-serif italic text-neutral-900 text-lg">Robin Gautam</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">
                        Product Strategist & Developer
                    </p>
                </div>
            </footer>
        </div>
    );
}
