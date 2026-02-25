"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, Terminal, FileText, Layout, Key, Play } from "lucide-react";
import Link from "next/link";
import { useProjectModal } from "@/context/ProjectModalContext";

// --- Card Data ---
const cards = [
    {
        id: 1,
        title: "THE EXTRACTION",
        subtitle: "DISCOVERY PHASE",
        headline: "DATA BEFORE DESIGN.",
        copy: "Most agencies start with colors. We start with the P&L. I extract your business goals, user friction points, and revenue targets. This isn't a chat; it's a strategic interrogation of your market position.",
        metric: "OUTPUT: STRATEGIC BRIEF",
        icon: FileText,
        color: "bg-white",
    },
    {
        id: 2,
        title: "THE ARCHITECTURE",
        subtitle: "STRATEGY PHASE",
        headline: "BLUEPRINTING THE WIN.",
        copy: "Before a single pixel is painted, we engineer the user journey. I design the database schema, the conversion funnels, and the content hierarchy. We simulate the victory before we fight the battle.",
        metric: "OUTPUT: HIGH-FIDELITY WIREFRAMES",
        icon: Layout,
        color: "bg-zinc-50",
    },
    {
        id: 3,
        title: "THE FORGE",
        subtitle: "DEVELOPMENT PHASE",
        headline: "HEAVY INDUSTRY CODE.",
        copy: "The engine room. I deploy a Next.js stack with Supabase. No drag-and-drop toys. Just pure, scalable, type-safe code that Google loves and hackers hate. Speed is a feature, not a bonus.",
        metric: "OUTPUT: PRODUCTION DEPLOYMENT",
        icon: Terminal,
        color: "bg-zinc-100",
    },
    {
        id: 4,
        title: "THE HANDOFF",
        subtitle: "LAUNCH PHASE",
        headline: "OWNERSHIP TRANSFER.",
        copy: "We don't hold your site hostage. I set up your analytics, configure your SEO, and hand over the repo keys. You walk away with a digital weapon, not just a website.",
        metric: "OUTPUT: FULL ADMIN ACCESS",
        icon: Key,
        color: "bg-[#F35815] text-white",
        dark: true
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
                className={`flex flex-col relative w-[90vw] md:w-[60vw] h-[70vh] rounded-none origin-top border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 ${card.color} ${card.dark ? 'border-white md:border-black' : ''}`}
            >
                {/* Header Tab */}
                <div className="absolute -top-12 left-0 bg-black text-white px-6 py-2 font-mono font-bold tracking-widest text-sm uppercase flex items-center gap-2 border-t-2 border-x-2 border-black">
                    <card.icon className="w-4 h-4" />
                    {card.title} // {String(i + 1).padStart(2, '0')}
                </div>

                <div className={`h-full flex flex-col justify-between ${card.dark ? 'text-white' : 'text-black'}`}>
                    {/* Top Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 opacity-50 font-mono text-sm tracking-widest uppercase pb-4 border-b-2 border-current">
                            <span>{card.subtitle}</span>
                            <span>///</span>
                            <span>SECURE_FILE_{500 + i}</span>
                        </div>

                        <h2 className="font-oswald text-4xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mix-blend-hard-light">
                            {card.headline}
                        </h2>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 max-w-2xl">
                        <p className={`font-mono text-lg md:text-xl leading-relaxed ${card.dark ? 'text-white/90' : 'text-zinc-700'}`}>
                            {card.copy}
                        </p>

                        <div className={`inline-block px-4 py-2 border-2 text-sm font-bold font-mono uppercase tracking-widest ${card.dark ? 'border-white text-white' : 'border-black text-black'}`}>
                            {card.metric}
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

    const { openProjectModal } = useProjectModal();

    return (
        <main ref={container} className="bg-[#F4F3EE] relative min-h-[200vh]">
            {/* Navigation & Branding */}
            <nav className="fixed top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50 pointer-events-none mix-blend-difference text-white">
                <Link href="/" className="pointer-events-auto group flex items-center gap-2 font-oswald text-2xl font-bold uppercase tracking-tighter">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm group-hover:bg-[#F35815] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    <span>Back to Base</span>
                </Link>
                <div className="font-mono text-sm tracking-widest hidden md:block">
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
                    <h1 className="font-oswald text-[15vw] md:text-[12vw] leading-[0.8] font-bold uppercase tracking-tighter text-black mb-12">
                        The<br /><span className="text-transparent stroke-text-black opacity-50">Protocol.</span>
                    </h1>
                    <div className="max-w-2xl border-l-4 border-[#F35815] pl-8 space-y-4">
                        <p className="font-mono text-xl md:text-2xl text-black font-medium leading-relaxed">
                            We don't guess. We engineer outcome.
                        </p>
                        <p className="font-mono text-base md:text-lg text-zinc-600">
                            This isn't just "web design." This is how a raw idea becomes a revenue engine.
                            Four steps. Zero fluff. Complete dominance.
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-6 md:left-20 flex items-center gap-4 animate-bounce">
                    <div className="w-px h-16 bg-black" />
                    <span className="writing-vertical font-mono text-xs tracking-widest uppercase">Scroll to Decrypt</span>
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
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F35815] mb-4">Protocol Complete</span>
                <div className="animate-bounce">
                    <ArrowLeft className="w-6 h-6 text-[#F35815] -rotate-90" />
                </div>
            </div>

            {/* Footer / CTA Section */}
            <section className="bg-black text-white min-h-[50vh] flex flex-col items-center justify-center text-center p-8 space-y-12 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <div className="relative z-10 space-y-8">
                    <h2 className="font-oswald text-6xl md:text-8xl font-bold uppercase tracking-tighter">
                        Seen Enough?
                    </h2>
                    <p className="font-mono text-xl md:text-2xl text-zinc-400">
                        The strategy is sound. The code is ready. Logic dictates we proceed.
                    </p>

                    <button
                        onClick={openProjectModal}
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#F35815] text-white font-oswald text-2xl font-bold uppercase tracking-widest border-4 border-white hover:bg-white hover:text-black transition-all"
                    >
                        <span>Initiate Protocol</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
        </main>
    );
}
