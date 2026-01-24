"use client";

import { useEffect } from "react";

interface HeroProps {
    onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
    useEffect(() => {
        // Trigger animations on load
        const animatedElements = document.querySelectorAll('.animate-on-load');
        animatedElements.forEach(el => {
            el.classList.remove('opacity-0');
        });
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[70vh]">
                    {/* Left Side */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="animate-on-load animate-slide-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-800 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm text-zinc-400">Available for new projects</span>
                        </div>

                        {/* Headline */}
                        <h1 className="animate-on-load animate-slide-up stagger-2 font-serif text-fluid-hero font-bold leading-[1.1] tracking-tight">
                            We build <span className="gradient-text">digital systems</span> for the next generation of founders.
                        </h1>

                        {/* Subheadline */}
                        <p className="animate-on-load animate-slide-up stagger-3 text-lg sm:text-xl text-zinc-400 max-w-lg leading-relaxed">
                            From idea to launch in weeks, not months. We architect the digital infrastructure your business needs to scale with confidence.
                        </p>

                        {/* CTAs */}
                        <div className="animate-on-load animate-slide-up stagger-4 flex flex-wrap gap-4">
                            <button
                                onClick={onOpenBooking}
                                className="group px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all hover:scale-105 flex items-center gap-2"
                            >
                                Get Started
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <a href="#work" className="px-8 py-4 border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 transition-all">
                                View Work
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="animate-on-load animate-slide-up stagger-5 flex gap-12 pt-8 border-t border-white/5">
                            <div>
                                <div className="text-3xl font-bold text-white">15+</div>
                                <div className="text-sm text-zinc-500">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-zinc-500">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Mac Window Card */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="float-3d animate-float" style={{ willChange: 'transform' }}>
                            {/* Mac Window */}
                            <div className="glass-card rounded-2xl overflow-hidden w-full max-w-[420px] shadow-2xl shadow-accent/20">
                                {/* Window Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-midnight-800/80 border-b border-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 text-sm text-zinc-500">Control Center</span>
                                </div>

                                {/* Window Content */}
                                <div className="p-6">
                                    {/* Status Banner */}
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-green-400">System Online</div>
                                            <div className="text-sm text-zinc-400">All services operational</div>
                                        </div>
                                        <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    </div>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-midnight-800/50 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Performance</div>
                                            <div className="text-2xl font-bold text-accent">98%</div>
                                        </div>
                                        <div className="bg-midnight-800/50 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">SEO Score</div>
                                            <div className="text-2xl font-bold text-white">100</div>
                                        </div>
                                        <div className="bg-midnight-800/50 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Load Time</div>
                                            <div className="text-2xl font-bold text-white">1.2s</div>
                                        </div>
                                        <div className="bg-midnight-800/50 rounded-xl p-4">
                                            <div className="text-xs text-zinc-500 mb-1">Uptime</div>
                                            <div className="text-2xl font-bold text-green-400">99.9%</div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-6 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-zinc-500">Launch Progress</span>
                                            <span className="text-white font-medium">Complete</span>
                                        </div>
                                        <div className="h-2 bg-midnight-800 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
