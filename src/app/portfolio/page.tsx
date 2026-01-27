"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { GraduationCap, Users, Rocket, Code, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Types & Data ---

type ProjectCategory = "All" | "SaaS Engines" | "EdTech" | "Strategy & Digitalization";

interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    role: string;
    description: string;
    codeSnippet: string;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        id: "cash-curious",
        title: "Cash Curious",
        category: "EdTech",
        role: "Full Stack Developer & Founder",
        description: "A financial education platform for Gen Alpha. Features an isometric 'City Builder' UI where users unlock buildings by completing financial quizzes. Built to solve the engagement crisis in e-learning.",
        tags: ["Next.js", "Isometric UI", "Gamification"],
        codeSnippet: `// The "City Builder" Logic
const unlockBuilding = async (userXp: number) => {
  if (userXp > LEVEL_THRESHOLD) {
    await supabase.from('city_assets').insert({
      type: 'SKYSCRAPER_V1',
      position: [12, 40, 0] // Isometric coords
    });
    triggerConfetti();
  }
};`
    },
    {
        id: "nexus-corp",
        title: "Nexus Corp",
        category: "SaaS Engines",
        role: "Frontend Architect",
        description: "A high-performance admin dashboard handling 10k+ concurrent data points. Implemented optimistic UI updates and real-time websockets for live revenue tracking.",
        tags: ["SaaS", "Real-time", "Optimistic UI"],
        codeSnippet: `// Real-time Revenue Subscription
const useLiveRevenue = () => {
  useSubscription('revenue_updates', (payload) => {
    queryClient.setQueryData(['revenue'], (old) => ({
      ...old,
      total: old.total + payload.new.amount
    }));
  });
};`
    },
    {
        id: "comex-digital",
        title: "Comex Digital",
        category: "Strategy & Digitalization",
        role: "Product Strategist",
        description: "End-to-end digitization for a legacy dry-cleaning business. Integrated route optimization algorithms for delivery drivers and a seamless booking frontend for customers.",
        tags: ["Digital Transformation", "Algorithms", "UX Strategy"],
        codeSnippet: `// Route Optimization Algorithm
export function optimizeRoute(orders: Order[]) {
  const graph = buildGraph(orders);
  return dijkstra(graph, 'WAREHOUSE_A');
  // Reduced delivery time by 40%
}`
    },
    {
        id: "stockgro",
        title: "StockGro",
        category: "SaaS Engines",
        role: "Frontend Engineer (Intern)",
        description: "Built high-performance landing pages for India's largest social trading platform. Focused on Core Web Vitals, achieving a 99/100 Lighthouse score through aggressive image optimization and ISR.",
        tags: ["Performance", "Core Web Vitals", "Next.js"],
        codeSnippet: `// Image Optimization Config
<Image
  src="/hero-trade.png"
  alt="Trading UI"
  width={1200}
  height={800}
  priority
  placeholder="blur"
  blurDataURL={rgbDataURL(2, 12, 24)}
/>`
    },
    {
        id: "finlatics",
        title: "Finlatics",
        category: "EdTech",
        role: "Frontend Developer",
        description: "Optimized user dashboard performance for data-heavy financial simulations. Reduced re-renders by 60% using React.memo and virtualized lists for large datasets.",
        tags: ["Optimization", "Virtualization", "FinTech"],
        codeSnippet: `// Virtualized List for Performance
<VirtualScroller
  items={marketData}
  itemHeight={50}
  renderItem={(stock) => (
    <StockTicker data={stock} mode="live" />
  )}
/>`
    }
];

// --- Components ---

const SimpleHighlighter = ({ code }: { code: string }) => {
    // Very basic highlighting logic for the requested aesthetic
    const lines = code.split('\n');
    return (
        <code className="font-mono text-xs md:text-sm leading-relaxed">
            {lines.map((line, i) => {
                const isComment = line.trim().startsWith("//");
                const isFunction = line.includes("const") || line.includes("function") || line.includes("=>");

                return (
                    <div key={i} className="table-row">
                        <span className="table-cell select-none text-zinc-700 text-right pr-4 w-8">{i + 1}</span>
                        <span className="table-cell">
                            {isComment ? (
                                <span className="text-zinc-500 italic">{line}</span>
                            ) : (
                                <span dangerouslySetInnerHTML={{
                                    __html: line
                                        .replace(/(const|let|var|async|await|return|export|default|if|else|import|from)/g, '<span class="text-purple-400">$1</span>')
                                        .replace(/(function|=>)/g, '<span class="text-blue-400">$1</span>')
                                        .replace(/('.*?')/g, '<span class="text-green-400">$1</span>')
                                        .replace(/(\{.*\})/g, '<span class="text-yellow-100">$1</span>')
                                }} />
                            )}
                        </span>
                    </div>
                )
            })}
        </code>
    )
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false); // For mobile tap interaction

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="group relative h-[500px] w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Placeholder Image Visual - Using CSS Gradients/Patterns to simulate screenshots given no assets */}
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${isHovered || isFlipped ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black p-8 flex flex-col justify-center items-center">
                    <div className="w-full h-64 border border-white/5 rounded-lg bg-white/5 overflow-hidden relative mb-4">
                        <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center gap-2 px-3">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="p-4 grid grid-cols-3 gap-2 mt-6 opacity-30">
                            <div className="col-span-2 h-32 bg-zinc-700/50 rounded"></div>
                            <div className="col-span-1 h-32 bg-zinc-700/50 rounded"></div>
                            <div className="col-span-1 h-20 bg-zinc-700/50 rounded"></div>
                            <div className="col-span-2 h-20 bg-zinc-700/50 rounded"></div>
                        </div>
                    </div>
                    <span className="font-serif text-2xl text-zinc-700 italic">{project.title}</span>
                </div>
            </div>

            {/* X-Ray Code Reveal */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: isHovered || isFlipped ? "0%" : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-0 bg-[#0d1117] p-6 flex flex-col"
            >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-mono text-zinc-400">Architecture.tsx</span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#10B981] animate-pulse">Live Logic</div>
                </div>
                <div className="flex-1 overflow-auto custom-scrollbar">
                    <SimpleHighlighter code={project.codeSnippet} />
                </div>
            </motion.div>

            {/* Static Info Layer (Bottom) */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent transition-opacity duration-300 ${isHovered || isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <p className="text-[#10B981] text-xs font-mono uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="font-serif text-3xl text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 border border-white/10 rounded-full text-zinc-500">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Mobile Tap Hint */}
            <div className="absolute top-4 right-4 md:hidden">
                <div className={`p-2 rounded-full bg-black/50 backdrop-blur border border-white/10 transition-colors ${isFlipped ? 'text-[#10B981] border-[#10B981]/50' : 'text-zinc-400'}`}>
                    <Code className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
};

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
    const categories: ProjectCategory[] = ["All", "SaaS Engines", "EdTech", "Strategy & Digitalization"];

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return PROJECTS;
        return PROJECTS.filter(p => p.category === activeCategory || (activeCategory === "SaaS Engines" && p.category.includes("SaaS"))); // Simple loose match for demo
    }, [activeCategory]);

    return (
        <>
            <Navbar onOpenBooking={() => { }} />
            <main className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans pt-24 pb-20 overflow-x-hidden selection:bg-[#10B981] selection:text-black">
                <style jsx global>{`
           .font-serif { font-family: var(--font-playfair), 'Playfair Display', Georgia, serif; }
           .custom-scrollbar::-webkit-scrollbar { width: 4px; }
           .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
           .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        `}</style>

                {/* SECTION A: MANIFESTO */}
                <section className="container max-w-7xl mx-auto px-6 mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="block text-zinc-500 text-xs md:text-sm tracking-[0.3em] font-medium mb-8">
                            SELECTED WORKS 2024 — 2026
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
                            Digital Infrastructure.
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                            A curated archive of high-performance applications, strategic designs, and SaaS engines. Built with <span className="text-white hover:text-[#10B981] hover:underline decoration-[#10B981] decoration-1 underline-offset-4 transition-colors cursor-default">Business Logic</span> first.
                        </p>
                    </motion.div>
                </section>

                {/* SECTION B: CONTROL DECK */}
                <section className="sticky top-20 z-40 mb-12 px-6">
                    <div className="max-w-fit mx-auto bg-black/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full flex items-center gap-1 overflow-x-auto no-scrollbar shadow-2xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeCategory === cat ? 'text-black' : 'text-zinc-400 hover:text-white'}`}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-[#10B981] rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* SECTION C: X-RAY GRID */}
                <section className="container max-w-7xl mx-auto px-6 mb-32">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

                {/* SECTION E: CREDENTIALS */}
                <section className="container max-w-7xl mx-auto px-6">
                    <div className="border-t border-white/10 pt-16">
                        <h2 className="font-serif text-3xl md:text-4xl mb-12">The Foundation</h2>
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* IIM Rohtak */}
                            <div className="group bg-zinc-900/20 border border-white/5 p-8 rounded-2xl hover:border-[#10B981]/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2">IIM Rohtak</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    MBA Candidate (2024-2026). Specialized in Operations Management & Data Analytics. Dean's List.
                                </p>
                            </div>

                            {/* Placement Comm */}
                            <div className="group bg-zinc-900/20 border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2">Placement Comm.</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Senior Member. Managed corporate relations and recruitment strategy for a batch of 240+ students. Stakeholder management.
                                </p>
                            </div>

                            {/* E-Cell */}
                            <div className="group bg-zinc-900/20 border border-white/5 p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                                    <Rocket className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif text-2xl mb-2">Entrepreneurship</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Unit Coordinator. Led initiatives to foster startup culture. Organized pitch summits and mentorship programs.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
