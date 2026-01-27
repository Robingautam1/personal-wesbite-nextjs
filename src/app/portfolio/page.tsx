"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, Rocket, Code, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Data Layer ---

interface Project {
    id: string;
    title: string;
    role: string;
    hookRecruiter: string;
    hookClient: string;
    techStack: string[];
    codeTitle: string;
    codeSnippet: string;
}

const PROJECTS: Project[] = [
    {
        id: "cash-curious",
        title: "Cash Curious",
        role: "Founder & Lead Engineer",
        hookRecruiter: "Identified a gap in Gen Alpha financial literacy and built a gamified solution.",
        hookClient: "Isometric 'City Builder' UI that increased user session time by 200%.",
        techStack: ["Next.js 14", "Supabase", "Framer Motion"],
        codeTitle: "isometric-grid.tsx",
        codeSnippet: `// Isometric Physics Logic
const calculateIsoPosition = (x: number, y: number) => {
  // Convert 2D grid logic to 3D isometric projection
  const isoX = (x - y) * TILE_WIDTH;
  const isoY = (x + y) * (TILE_HEIGHT / 2);
  
  return { x: isoX, y: isoY, z: elevation[x][y] };
};`
    },
    {
        id: "nexus-corp",
        title: "Nexus Corp",
        role: "Frontend Architect",
        hookRecruiter: "Designed an enterprise-grade dashboard handling real-time data visualization.",
        hookClient: "Scalable SaaS architecture ready for 10k+ users. Zero lag.",
        techStack: ["React", "Recharts", "WebSockets"],
        codeTitle: "real-time-subscription.ts",
        codeSnippet: `// Real-Time Data Hook
export const useLiveMetrics = (channelId: string) => {
  const [data, setData] = useState<Metric[]>([]);
  
  useEffect(() => {
    const channel = supabase.channel(channelId)
      .on('postgres_changes', { event: 'INSERT' }, (payload) => {
        // Optimistic update for zero-latency feel
        setData(prev => [...prev, payload.new]);
      })
      .subscribe();
      
    return () => { supabase.removeChannel(channel) };
  }, [channelId]);
};`
    },
    {
        id: "comex-digital",
        title: "Comex Digital",
        role: "Product Strategist",
        hookRecruiter: "End-to-end digitalization of a legacy logistics business.",
        hookClient: "Automated route optimization, reducing manual admin work by 15 hours/week.",
        techStack: ["Next.js", "Google Maps API", "PostgreSQL"],
        codeTitle: "route-optimizer.ts",
        codeSnippet: `// Dijkstra Algorithm Implementation
const findOptimalRoute = (stops: Location[]) => {
  const graph = buildGraph(stops);
  const path = dijkstra(graph, 'WAREHOUSE_A');
  
  // Recalculate if traffic density > 0.8
  return applyTrafficHeuristics(path);
}`
    },
    {
        id: "stockgro",
        title: "StockGro",
        role: "Frontend Intern",
        hookRecruiter: "Optimized landing page Core Web Vitals to achieve a 99/100 Lighthouse score.",
        hookClient: "High-performance marketing pages for India's largest social trading platform.",
        techStack: ["Next.js", "ISR", "Image Optimization"],
        codeTitle: "next.config.js",
        codeSnippet: `// Aggressive Caching Strategy
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000' }]
      }
    ]
  }
}`
    },
    {
        id: "finlatics",
        title: "Finlatics",
        role: "Developer",
        hookRecruiter: "Built complex financial simulation dashboards with heavy data-grid optimizations.",
        hookClient: "Data-heavy interfaces that remain silky smooth on low-end devices.",
        techStack: ["React", "Virtualized Lists", "Memoization"],
        codeTitle: "virtual-grid.tsx",
        codeSnippet: `// Virtualization Logic
<VirtualScroller
  items={largeDataset}
  itemHeight={48}
  overscan={5}
  renderItem={(row) => (
    <FinancialRow 
      data={row} 
      onUpdate={(val) => batchUpdate(row.id, val)} 
    />
  )}
/>`
    }
];

// --- Components ---

const NoiseOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay">
        <svg className="w-full h-full">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);

const TechStackMarquee = () => {
    const stack = ["Next.js", "TypeScript", "Supabase", "Tailwind", "Framer Motion", "Python", "React", "Node.js", "PostgreSQL", "Figma", "Docker", "AWS"];

    return (
        <div className="w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-6 mb-24 relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            <motion.div
                className="flex gap-16 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
                {[...stack, ...stack, ...stack].map((tech, i) => (
                    <span key={i} className="text-zinc-500 font-mono text-sm uppercase tracking-widest font-medium">
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-colors duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-[#10B981] font-mono text-xs uppercase tracking-widest mb-2 block">{project.role}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">{project.title}</h3>
                    </div>

                    {/* Desktop Hover Hint */}
                    <div className="hidden md:flex items-center gap-2 text-zinc-500 text-xs font-mono group-hover:text-[#10B981] transition-colors">
                        <Code className="w-4 h-4" />
                        <span>SOURCE_VIEW</span>
                    </div>
                </div>

                <div className="space-y-6 mb-8">
                    <div className="pl-4 border-l border-white/10">
                        <span className="text-zinc-500 text-xs uppercase tracking-wider block mb-1">Recruiter Insight</span>
                        <p className="text-zinc-300 leading-relaxed">{project.hookRecruiter}</p>
                    </div>
                    <div className="pl-4 border-l border-[#10B981]/30">
                        <span className="text-[#10B981]/70 text-xs uppercase tracking-wider block mb-1">Client Value</span>
                        <p className="text-zinc-300 leading-relaxed">{project.hookClient}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Mobile Accordion Toggle */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl text-sm text-zinc-300 border border-white/10"
                >
                    <span className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-[#10B981]" />
                        View Architecture
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Code Snippet Area - Responsive Behavior */}
            <AnimatePresence>
                {(isExpanded || (isHovered && typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-[#050505] border-t border-white/10"
                    >
                        <div className="p-2 border-b border-white/5 bg-white/[0.02] flex justify-between items-center px-4">
                            <span className="text-xs font-mono text-zinc-500">{project.codeTitle}</span>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <pre className="p-6 overflow-x-auto text-xs md:text-sm font-mono text-zinc-400 leading-relaxed custom-scrollbar">
                            <code>{project.codeSnippet}</code>
                        </pre>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const LeadershipCard = ({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) => (
    <div className="min-w-[300px] md:min-w-[350px] p-6 bg-white/[0.02] border border-white/10 rounded-2xl md:border-transparent md:hover:border-[#10B981]/30 md:hover:bg-white/5 transition-all">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#10B981] mb-4">
            <Icon />
        </div>
        <h4 className="font-serif text-xl text-white mb-2">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed">{detail}</p>
    </div>
);

// --- Main Page ---

export default function PortfolioPage() {
    return (
        <>
            <Navbar onOpenBooking={() => { }} />
            <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#10B981] selection:text-[#050505]">
                <NoiseOverlay />

                <style jsx global>{`
           .font-serif { font-family: var(--font-playfair), 'Playfair Display', Georgia, serif; }
           .custom-scrollbar::-webkit-scrollbar { height: 4px; }
           .custom-scrollbar::-webkit-scrollbar-track { background: #111; }
           .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        `}</style>

                {/* SECTION A: HEADER */}
                <header className="pt-32 pb-24 px-6 md:pt-48 md:pb-32 text-center max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-[1.1]">
                            Engineering <br className="md:hidden" />
                            <span className="text-[#10B981]">Business Growth</span>.
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Bridging the gap between <span className="text-white font-medium">Strategic Operations (MBA)</span> and <span className="text-white font-medium">High-Performance Engineering</span>. I build digital assets that function as business engines.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/resume.pdf" // Placeholder, assumes you have this
                                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowRight />
                                Download CV
                            </a>
                            <button
                                className="w-full sm:w-auto px-8 py-4 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-semibold rounded-full hover:bg-[#10B981]/20 transition-colors"
                            >
                                Book Strategy Call
                            </button>
                        </div>
                    </motion.div>
                </header>

                {/* SECTION: TECH MARQUEE */}
                <TechStackMarquee />

                {/* SECTION B: PROJECT SHOWCASE */}
                <section className="container max-w-7xl mx-auto px-6 mb-32 relative z-10">
                    <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
                        <h2 className="font-serif text-3xl md:text-5xl">Selected Works</h2>
                        <span className="text-zinc-500 font-mono text-xs hidden md:inline-block">SCROLL TO EXPLORE</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                {/* SECTION C: LEADERSHIP RAIL */}
                <section className="border-t border-white/10 bg-white/[0.02] py-24 relative z-10 overflow-hidden">
                    <div className="container max-w-7xl mx-auto px-6">
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl mb-4">The Strategic Foundation</h2>
                            <p className="text-zinc-400">Leadership, Operations, and Ecosystem Building.</p>
                        </div>

                        <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 custom-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
                            <LeadershipCard
                                icon={GraduationCap}
                                title="IIM Rohtak (MBA)"
                                detail="Specializing in Operations & Analytics. Dean's List (Top 10%). Bridging tech with business outcomes."
                            />
                            <LeadershipCard
                                icon={Users}
                                title="Placement Committee"
                                detail="Managing corporate strategy for 240+ candidates. High-stakes stakeholder management and negotiation."
                            />
                            <LeadershipCard
                                icon={Rocket}
                                title="E-Cell Coordinator"
                                detail="Fostering the startup ecosystem. Organized national-level pitch summits and founder mentorship programs."
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
