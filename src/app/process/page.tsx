"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, Terminal, FileText, Layout, Key } from "lucide-react";
import Link from "next/link";

// --- Card Data ---
const cards = [
    {
        id: 1,
        title: "THE EXTRACTION",
        subtitle: "DISCOVERY PHASE",
        headline: "DATA BEFORE DESIGN.",
        copy: "Most agencies start with colors. I start with the P&L. I extract your business goals, user friction points, and revenue targets. This isn't a chat; it's a strategic interrogation of your market position.",
        metric: "OUTPUT: STRATEGIC BRIEF",
        metricDetail: "Shared Google Doc covering goals, user personas, competitor gaps, and revenue architecture.",
        duration: "DURATION: 48 HRS",
        icon: FileText,
        color: "bg-[#111] text-white",
        dark: true,
    },
    {
        id: 2,
        title: "THE ARCHITECTURE",
        subtitle: "STRATEGY PHASE",
        headline: "BLUEPRINTING THE WIN.",
        copy: "Before a single line of code is written, the conversion funnel is mapped. Database schema, user journey, content hierarchy — all war-gamed before the build begins. You see exactly what you're getting before I build it.",
        metric: "OUTPUT: HIGH-FIDELITY WIREFRAMES",
        metricDetail: "Figma file with full user journey, page architecture, and conversion flow mapped.",
        duration: "DURATION: 2-3 DAYS",
        icon: Layout,
        color: "bg-[#0d0d0d] text-white",
        dark: true,
    },
    {
        id: 3,
        title: "THE FORGE",
        subtitle: "DEVELOPMENT PHASE",
        headline: "HEAVY INDUSTRY CODE.",
        copy: "The engine room. I deploy a Next.js stack with Supabase. No drag-and-drop toys. Just pure, scalable, type-safe code that Google loves and hackers hate. Speed is a feature, not a bonus.",
        metric: "OUTPUT: PRODUCTION DEPLOYMENT",
        metricDetail: "Live Next.js site on Vercel. PageSpeed 90+. Mobile-first. SEO-ready on day one.",
        duration: "DURATION: 5-10 DAYS",
        icon: Terminal,
        color: "bg-[#111] text-white",
        dark: true,
    },
    {
        id: 4,
        title: "THE HANDOFF",
        subtitle: "LAUNCH PHASE",
        headline: "OWNERSHIP TRANSFER.",
        copy: "I don't hold your site hostage. I set up your analytics, configure your SEO, and hand over the repo keys. You walk away with a digital weapon, not just a website.",
        metric: "OUTPUT: FULL ADMIN ACCESS",
        metricDetail: "GitHub repo transfer, Vercel dashboard, analytics setup, and a 1-hour handoff walkthrough.",
        duration: "DURATION: 24 HRS",
        icon: Key,
        color: "bg-[#E85D26] text-white",
        dark: true,
    },
];

const Card = ({
    card,
    i,
    progress,
    range,
    targetScale,
}: {
    card: typeof cards[0];
    i: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`flex flex-col relative w-[90vw] md:w-[60vw] h-[70vh] rounded-none origin-top border-2 border-[#1a1a1a] shadow-[16px_16px_0px_0px_rgba(255,255,255,0.05)] p-8 md:p-12 ${card.color}`}
            >
                {/* Header Tab */}
                <div className="absolute -top-12 left-0 bg-[#E85D26] text-white px-6 py-2 font-mono font-bold tracking-widest text-sm uppercase flex items-center gap-2 border-t-2 border-x-2 border-[#E85D26]">
                    <card.icon className="w-4 h-4" />
                    {card.title} // {String(i + 1).padStart(2, '0')}
                </div>

                <div className="h-full flex flex-col justify-between text-white">
                    {/* Top Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 opacity-50 font-mono text-sm tracking-widest uppercase pb-4 border-b-2 border-white/20">
                            <span>{card.subtitle}</span>
                            <span>///</span>
                            <span>SECURE_FILE_{500 + i}</span>
                        </div>

                        <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter">
                            {card.headline}
                        </h2>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6 max-w-2xl">
                        <p className="font-mono text-base md:text-lg leading-relaxed text-white/80">
                            {card.copy}
                        </p>

                        <div className="space-y-2">
                            <div className="inline-block px-4 py-2 border-2 border-white/30 text-sm font-bold font-mono uppercase tracking-widest text-white">
                                {card.metric}
                            </div>
                            <p className="font-mono text-xs md:text-sm text-[#888] leading-relaxed pl-1">
                                {card.metricDetail}
                            </p>
                            <p className="font-mono text-xs text-[#666] uppercase tracking-widest pl-1">
                                {card.duration}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ProcessPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={container} className="bg-[#0a0a0a] relative min-h-[200vh]">
            {/* Navigation & Branding */}
            <nav className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none text-white">
                <Link href="/" className="pointer-events-auto group flex items-center gap-2 font-oswald text-2xl font-bold uppercase tracking-tighter">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm group-hover:bg-[#E85D26] group-hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span>Back to Base</span>
                </Link>
                <div className="font-mono text-sm tracking-widest hidden md:block text-zinc-500">
                    PROTOCOL: EXECUTION
                </div>
            </nav>

            {/* Intro Section */}
            <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="font-oswald text-[15vw] md:text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-white mb-12">
                        The<br /><span className="text-transparent stroke-text-white opacity-50">Protocol.</span>
                    </h1>
                    <div className="max-w-2xl border-l-4 border-[#E85D26] pl-8 space-y-4">
                        <p className="font-mono text-xl md:text-2xl text-white font-medium leading-relaxed">
                            I don't guess. I engineer outcomes.
                        </p>
                        <p className="font-mono text-base md:text-lg text-[#a0a0a0]">
                            This isn't just "web design." This is how a raw idea becomes a revenue engine.
                            Four steps. Zero fluff. Complete dominance.
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-6 md:left-20 flex items-center gap-4 animate-bounce">
                    <div className="w-px h-16 bg-white/30" />
                    <span className="writing-vertical font-mono text-xs tracking-widest uppercase text-zinc-500">[ SCROLL TO EXPLORE ]</span>
                </div>
            </section>

            {/* Stacking Cards Section */}
            <section className="relative px-4 pb-20">
                {cards.map((card, i) => {
                    const targetScale = 1 - (cards.length - i) * 0.05;
                    return (
                        <Card
                            key={i}
                            i={i}
                            card={card}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </section>

            {/* Connector Visual */}
            <div className="flex flex-col items-center justify-center pb-20 opacity-60">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E85D26] mb-4">Protocol Complete</span>
                <div className="animate-bounce">
                    <ArrowLeft className="w-6 h-6 text-[#E85D26] -rotate-90" />
                </div>
            </div>

            {/* === FIX 8: Total Project Timeline Summary === */}
            <section className="px-4 md:px-20 pb-20">
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 md:p-12 max-w-5xl mx-auto">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-8">
                        // TOTAL ESTIMATED TIMELINE
                    </p>

                    {/* Desktop: Horizontal Row */}
                    <div className="hidden md:grid grid-cols-4 gap-6 mb-8">
                        {[
                            { phase: "Extraction", duration: "48 HRS" },
                            { phase: "Architecture", duration: "2-3 DAYS" },
                            { phase: "Forge", duration: "5-10 DAYS" },
                            { phase: "Handoff", duration: "24 HRS" },
                        ].map((item, i) => (
                            <div key={i} className="text-center space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-[#E85D26]">{item.phase}</p>
                                <p className="font-mono text-lg font-bold text-white">{item.duration}</p>
                                {i < 3 && (
                                    <p className="font-mono text-zinc-500 text-lg absolute" style={{ right: '-12px', top: '50%' }}>+</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Plus signs between columns */}
                    <div className="hidden md:flex justify-center gap-2 mb-8">
                        <span className="font-mono text-xs text-zinc-500">48 HRS</span>
                        <span className="font-mono text-xs text-zinc-500">+</span>
                        <span className="font-mono text-xs text-zinc-500">2-3 DAYS</span>
                        <span className="font-mono text-xs text-zinc-500">+</span>
                        <span className="font-mono text-xs text-zinc-500">5-10 DAYS</span>
                        <span className="font-mono text-xs text-zinc-500">+</span>
                        <span className="font-mono text-xs text-zinc-500">24 HRS</span>
                    </div>

                    {/* Mobile: Vertical Stack */}
                    <div className="md:hidden space-y-4 mb-8">
                        {[
                            { phase: "Extraction", duration: "48 HRS" },
                            { phase: "Architecture", duration: "2-3 DAYS" },
                            { phase: "Forge", duration: "5-10 DAYS" },
                            { phase: "Handoff", duration: "24 HRS" },
                        ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                                <span className="font-mono text-xs uppercase tracking-widest text-[#E85D26]">{item.phase}</span>
                                <span className="font-mono text-sm font-bold text-white">{item.duration}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom line */}
                    <div className="border-t border-[#1a1a1a] pt-6 text-center">
                        <p className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
                            = Most projects live in under 3 weeks.
                        </p>
                    </div>
                </div>
            </section>

            {/* === FIX 7: Rewritten CTA Section === */}
            <section className="bg-[#0a0a0a] text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-8 space-y-12 relative overflow-hidden border-t border-[#1a1a1a]">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="relative z-10 space-y-8 max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                        // READY TO EXECUTE?
                    </p>

                    <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
                        You've seen the process.<br />
                        <span className="text-[#E85D26]">Now let's run it on your business.</span>
                    </h2>

                    <p className="font-mono text-sm md:text-base text-[#888] max-w-xl mx-auto leading-relaxed">
                        This exact protocol built apexdentalcare.co.in and comexdrycleaner.com — both live and converting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/918292511007?text=Hey%20Robin%2C%20I've%20read%20The%20Protocol.%20Let's%20start%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#E85D26] text-black font-oswald font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors"
                        >
                            START THE PROTOCOL <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link
                            href="/work"
                            className="border-2 border-[#E85D26] text-[#E85D26] font-oswald font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 hover:bg-[#E85D26] hover:text-black transition-colors"
                        >
                            VIEW LIVE RESULTS <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <p className="font-mono text-xs text-[#666] flex flex-wrap gap-2 items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        Typical response: under 2 hours · New Delhi, IN · Projects delivered globally
                    </p>
                </div>
            </section>
        </main>
    );
}
