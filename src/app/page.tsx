"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal, { useDemoModal } from "@/components/DemoModal";
import Link from "next/link";
import PricingSection from "@/components/PricingSection";
import { ArrowRight, Check, Zap, Globe, Package, Cpu, ArrowUpRight, Bot, Terminal, LineChart } from "lucide-react";

// --- Components ---

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const SystemStatusTicker = () => {
  // Rotating status items
  const [active, setActive] = useState(0);
  const statuses = [
    { label: "Cash Curious", status: "LIVE", color: "text-emerald-500" },
    { label: "Comex Digital", status: "REFACTORING", color: "text-yellow-500" },
    { label: "System Core", status: "ONLINE", color: "text-brand-orange" },
    { label: "New Client", status: "ONBOARDING", color: "text-blue-500" },
  ];

  // Auto-rotate effect could be implemented with useEffect/interval, 
  // simply using a static list for visual punch now or CSS animation
  return (
    <div className="flex flex-col gap-2 font-mono text-xs md:text-sm text-zinc-500">
      {statuses.map((item, i) => (
        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
          <span>{item.label}</span>
          <span className={`font-bold ${item.color} tracking-wider`}>[ {item.status} ]</span>
        </div>
      ))}
    </div>
  );
};

const TrustMarquee = () => {
  return (
    <div className="border-y border-white/10 bg-brand-black py-6 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[1, 2, 3, 4].map((key) => (
          <div key={key} className="flex items-center gap-16">
            <span className="text-xl md:text-3xl font-bold text-transparent stroke-text uppercase tracking-tighter opacity-30">
              Strategy × Execution
            </span>
            <span className="text-xl md:text-3xl font-bold text-white uppercase tracking-tighter">
              Build Fast. Scale Hard.
            </span>
            <span className="text-xl md:text-3xl font-bold text-transparent stroke-text uppercase tracking-tighter opacity-30">
              MBA-Backed Engineering
            </span>
            <span className="text-xl md:text-3xl font-bold text-brand-orange uppercase tracking-tighter">
              WE SHIP.
            </span>
          </div>
        ))}
      </motion.div>
      <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

const ServiceCard = ({ title, desc, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/5 transition-colors relative h-full flex flex-col justify-between"
  >
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="text-brand-orange w-6 h-6" />
    </div>
    <div>
      <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 rounded-none border border-white/5">
        <Icon className="w-6 h-6 text-brand-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-zinc-400 leading-relaxed font-mono text-sm">{desc}</p>
    </div>
  </motion.div>
);



// --- Main Page Component ---

// --- AI Tools Section ---
const AIToolsSection = () => (
  <section className="py-20 border-b border-white/10">
    <div className="max-w-[1400px] mx-auto px-6">
      <h2 className="text-2xl font-bold uppercase tracking-widest mb-12 flex items-center gap-4">
        <div className="w-8 h-[2px] bg-brand-orange"></div>
        Command Center / AI Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Cursor", icon: Terminal, desc: "AI-First Code Editor" },
          { name: "V0.dev", icon: Bot, desc: "Generative UI Systems" },
          { name: "Supabase", icon: Zap, desc: "Postgres Database" },
          { name: "Resend", icon: LineChart, desc: "Email Infrastructure" }
        ].map((tool, i) => (
          <div key={i} className="border border-white/10 bg-white/[0.02] p-6 hover:bg-white/5 transition-colors group">
            <tool.icon className="w-8 h-8 text-zinc-500 group-hover:text-brand-orange mb-4 transition-colors" />
            <h3 className="font-bold text-white uppercase tracking-wider">{tool.name}</h3>
            <p className="text-xs text-zinc-500 font-mono mt-2">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Profile Teaser ---
const ProfileTeaser = () => (
  <section className="py-24 px-6 bg-white text-brand-black">
    <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
          MEET THE <br /> <span className="text-brand-orange">BUILDER.</span>
        </h2>
        <p className="text-xl text-zinc-600 max-w-lg mb-8 font-medium">
          I'm Robin Gautam. An MBA-backed Full Stack Developer who understands that code is pointless without a business model.
        </p>
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-lg font-bold uppercase tracking-widest border-b-2 border-brand-black pb-1 hover:gap-4 transition-all">
          View Full Profile <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="relative aspect-square md:aspect-[4/3] bg-zinc-100 border-2 border-brand-black overflow-hidden group">
        <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-bold text-9xl opacity-5">RG</span>
        </div>
        <div className="absolute bottom-6 left-6 z-20">
          <div className="bg-brand-black text-white px-4 py-2 font-mono text-xs uppercase mb-2 w-fit">Status: Available</div>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  const [billingMode, setBillingMode] = useState<'essentials' | 'expansion'>('essentials');
  const demoModal = useDemoModal();

  const openBooking = () => {
    // Kept for Hero "Start Project" button
    window.location.href = "mailto:hello@robingautam.in";
  }

  return (
    <div className="bg-brand-black min-h-screen text-brand-white selection:bg-brand-orange selection:text-brand-black font-sans overflow-x-hidden">
      <NoiseOverlay />
      <Navbar onOpenBooking={openBooking} />

      {/* HERO SECTION */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16 items-end">

          {/* Left: Punchline */}
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mb-8"
            >
              WE BUILD <br />
              <span className="text-brand-orange">SH*T</span> THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600 font-black tracking-tighter animate-pulse">SLAPS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 max-w-xl font-mono"
            >
              High-impact digital product studio. We turn napkin sketches into revenue engines. No fluff. Just code & strategy.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-12">
              <Link
                href="/work"
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors"
              >
                View Latest Work
              </Link>
              <button
                onClick={openBooking}
                className="px-8 py-4 border border-white/20 text-zinc-300 font-bold uppercase tracking-widest hover:bg-white/5 hover:text-white transition-colors"
              >
                Start Project
              </button>
            </div>
          </div>

          {/* Right: System Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full bg-white/[0.03] border border-white/10 p-6 md:p-8"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-brand-orange uppercase tracking-widest">System Status</span>
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            </div>
            <SystemStatusTicker />

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-zinc-500 font-mono mb-2">// LATEST DEPLOY</p>
              <p className="font-mono text-sm text-white truncate">983e2cf - Revert "Pivot to High-Impact Portfolio"</p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* TRUST MARQUEE */}
      <TrustMarquee />

      {/* AI TOOLS SEGMENT */}
      <AIToolsSection />

      {/* SERVICES (Bento Grid) */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Our Arsenal.</h2>
            <p className="text-zinc-400 font-mono text-lg max-w-xl">Everything you need to go from Zero to One.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            <div className="md:col-span-2 row-span-1">
              <ServiceCard
                title="Rapid MVP Development"
                desc="We launch functional, scalable MVPs in weeks. React, Next.js, and Supabase architecture that scales with your user base."
                icon={Zap}
                delay={0.1}
              />
            </div>
            <div className="md:col-span-1 row-span-1">
              <ServiceCard
                title="Digital Strategy"
                desc="IIM Rohtak backed business logic. We don't just clear tickets; we optimize for revenue."
                icon={Globe}
                delay={0.2}
              />
            </div>
            <div className="md:col-span-1 row-span-1">
              <ServiceCard
                title="UI/UX Systems"
                desc="High-impact design systems that scream premium. Dark mode aesthetics and fluid animations."
                icon={Package}
                delay={0.3}
              />
            </div>
            <div className="md:col-span-2 row-span-1">
              <ServiceCard
                title="Technical Scaling"
                desc="Refactoring legacy code, optimizing database queries, and setting up CI/CD pipelines for growth."
                icon={Cpu}
                delay={0.4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION (Split-Screen Industrial) */}
      <PricingSection />

      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={demoModal.closeDemo}
        demoId={demoModal.demoId}
        title={demoModal.title}
        price={demoModal.price}
      />

      {/* PROFILE TEASER */}
      <ProfileTeaser />

      <Footer />
    </div>
  );
}

// Styles for text-stroke
const styles = `
  .text-stroke-white {
    -webkit-text-stroke: 2px white;
    color: transparent;
  }
`;
