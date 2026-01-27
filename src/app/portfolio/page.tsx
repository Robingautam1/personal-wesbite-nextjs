"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/components/BookingModal"), {
    ssr: false,
    loading: () => null,
});

export default function PortfolioPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
            <main className="bg-[#050505] text-[#FAFAFA] font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
                <style jsx global>{`
          :root {
            --accent: #10b981;
            --accent-glow: rgba(16, 185, 129, 0.4);
            --bg-card: #0A0A0A;
            --glass-bg: rgba(10, 10, 10, 0.7);
          }
          
          .font-serif {
             font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          }

          .text-accent {
            color: var(--accent);
          }

          .bg-accent {
            background-color: var(--accent);
          }
           
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
          .delay-1 { transition-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; }
        `}</style>

                {/* Navigation spacer */}
                <div className="h-20" />

                {/* Hero Section */}
                <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
                    {/* Dot Grid Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none opacity-20" />

                    {/* Glow Effect */}
                    <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 max-w-4xl px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-sm font-medium mb-8 animate-fade-in-up">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            Available for new projects
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl mb-8 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent reveal active">
                            Ecosystem<br />Builder
                        </h1>

                        <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-1 active">
                            I don't just build websites. I engineer digital ecosystems that turn silent visitors into raving fans and revenue.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2 active">
                            <a href="mailto:hello@robingautam.in" className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all duration-300">
                                Work With Me
                            </a>
                            <a href="#work" className="px-8 py-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                                View Selected Work
                            </a>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="reveal active">
                                <div className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-4">The Story</div>
                                <h2 className="font-serif text-4xl md:text-5xl mb-8">From Code to Core Business Logic</h2>
                                <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                    <p>
                                        <strong className="text-white">It started with a simple observation.</strong> Most founders were paying for websites but needed systems. They got pretty pixels but broken funnels.
                                    </p>
                                    <p>
                                        I spent years at the intersection of product strategy and engineering. I realized that a website isn't a digital brochure—it's the <span className="text-emerald-500">operating system</span> of your brand.
                                    </p>
                                    <p>
                                        Today, I run a specialized digital product studio. We strip away the fluff and build lean, high-performance engines that drive growth. No corporate jargon. No bloated timelines. Just shipping.
                                    </p>
                                </div>
                            </div>
                            <div className="relative reveal delay-1 active group">
                                <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                                <div className="relative border border-white/10 rounded-3xl overflow-hidden aspect-[4/5] bg-[#111]">
                                    {/* Placeholder for About Image - could use an actual image here if available */}
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-9xl font-serif italic opacity-20 select-none">RG</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Impact Section (Bento Grid) */}
                <section id="work" className="py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-20">
                            <div className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-4">Selected Work</div>
                            <h2 className="font-serif text-4xl md:text-5xl">Real Impact. Real Revenue.</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
                            {/* CorStone - Large */}
                            <div className="md:col-span-7 md:row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group reveal active">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="font-serif text-3xl mb-2">CorStone</h3>
                                <div className="text-emerald-500 font-medium mb-6">Process Digitalization</div>
                                <p className="text-zinc-400 leading-relaxed mb-8">
                                    Transformed manual onboarding for a nonprofit into a fully automated digital pipeline. Reduced administrative load by 40% and improved volunteer retention.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                        <div className="text-2xl font-bold text-emerald-500">40%</div>
                                        <div className="text-xs text-zinc-500 uppercase">Efficiency Boost</div>
                                    </div>
                                </div>
                            </div>

                            {/* StockGro - Medium */}
                            <div className="md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 reveal delay-1 active">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <h3 className="font-serif text-3xl mb-2">StockGro</h3>
                                <div className="text-purple-400 font-medium mb-4">Investment Infrastructure</div>
                                <p className="text-zinc-400 leading-relaxed">
                                    Built high-performance landing pages for India's largest social trading platform using Next.js.
                                </p>
                            </div>

                            {/* Finlatics - Small */}
                            <div className="md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 reveal delay-2 active">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h3 className="font-serif text-3xl mb-2">Finlatics</h3>
                                <div className="text-blue-400 font-medium mb-4">EdTech Platform</div>
                                <p className="text-zinc-400 leading-relaxed">
                                    Optimized user dashboard performance for data-heavy financial simulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-32 bg-[#080808]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="font-serif text-4xl mb-6">More Than Just Code</h2>
                            <p className="text-zinc-400 max-w-2xl mx-auto">
                                My background isn't just engineering. It's leadership, strategy, and business execution.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors reveal active">
                                <div className="text-emerald-500 mb-6 text-xl bg-emerald-500/10 w-14 h-14 flex items-center justify-center rounded-xl">🎓</div>
                                <h3 className="font-serif text-2xl mb-1">IIM Rohtak</h3>
                                <div className="text-emerald-500 text-sm mb-4">MBA Graduate</div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Specialized in Strategic Management. I don't just speak code; I speak business logic, P&L, and growth strategy.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors reveal delay-1 active">
                                <div className="text-blue-500 mb-6 text-xl bg-blue-500/10 w-14 h-14 flex items-center justify-center rounded-xl">⚡</div>
                                <h3 className="font-serif text-2xl mb-1">Placement Comm.</h3>
                                <div className="text-blue-500 text-sm mb-4">Senior Member</div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Managed corporate relations and placement strategy for a batch of 240+ students. High stakes stakeholder management.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors reveal delay-2 active">
                                <div className="text-purple-500 mb-6 text-xl bg-purple-500/10 w-14 h-14 flex items-center justify-center rounded-xl">🚀</div>
                                <h3 className="font-serif text-2xl mb-1">Entrepreneurship</h3>
                                <div className="text-purple-500 text-sm mb-4">Cell Coordinator</div>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Led initiatives to foster startup culture. Organized summits, pitch competitions, and mentorship programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            </main>
        </>
    );
}
