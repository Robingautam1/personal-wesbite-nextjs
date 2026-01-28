"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layout, Globe, ShoppingCart, FileText, Layers, Zap } from "lucide-react";
import DemoModal, { useDemoModal } from "@/components/DemoModal";

const PROJECTS = [
    {
        id: "bio-link.html",
        title: "IDENTITY SYSTEM V1",
        category: "MICRO-SITE",
        description: "Single-screen aggregation layer. Optimized for high-traffic social bios.",
        tags: ["React", "Animation"],
        icon: Layout
    },
    {
        id: "portfolio.html",
        title: "MINIMALIST FOLIO",
        category: "PERSONAL BRAND",
        description: "Clean, purpose-driven showcase for creatives. Zero clutter, maximum impact.",
        tags: ["Next.js", "Tailwind"],
        icon: Globe
    },
    {
        id: "storefront.html",
        title: "COMMERCE ENGINE",
        category: "E-COMMERCE",
        description: "High-conversion product pages with optimized checkout flows.",
        tags: ["Shopify", "Analytics"],
        icon: ShoppingCart
    },
    {
        id: "publisher.html",
        title: "CMS BLOG STACK",
        category: "CONTENT",
        description: "For serious writers. Markdown support, newsletter integration, and SEO-first architecture.",
        tags: ["CMS", "SEO"],
        icon: FileText
    },
    {
        id: "ecosystem.html",
        title: "SAAS DASHBOARD KIT",
        category: "PLATFORM",
        description: "Unified admin interface. Charts, tables, and data visualization components.",
        tags: ["Dashboard", "Data Viz"],
        icon: Layers
    },
    {
        id: "landing-page.html",
        title: "CONVERSION LP",
        category: "MARKETING",
        description: "A/B test ready landing page structure designed to capture leads.",
        tags: ["Marketing", "CRO"],
        icon: Zap
    }
];

export default function DemosSection() {
    const { isOpen, demoId, title, openDemo, closeDemo } = useDemoModal();

    return (
        <section className="py-24 bg-[#121212] border-t border-white/10 text-[#F4F3EE]">
            <div className="container mx-auto px-4 max-w-[1400px]">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-black pb-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tighter leading-[0.9]">
                            The Lab<span className="text-agency-orange">.</span>
                        </h2>
                        <p className="font-mono text-zinc-600 mt-4 max-w-xl">
                            Experimental prototypes and engineered assets. Not templates, but capabilities.
                        </p>
                    </div>
                    <div className="font-mono text-xs uppercase tracking-widest border border-black px-4 py-2 bg-white">
                        System Status: Operational
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white text-black border-2 border-black p-8 hover:-translate-y-2 hover:bg-[#F35815] hover:text-white transition-all duration-300 flex flex-col h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="font-mono text-xs border border-black px-2 py-1 uppercase bg-dirty-cream text-black group-hover:bg-white group-hover:border-white group-hover:text-agency-orange transition-colors">
                                    {project.category}
                                </span>
                                <project.icon className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="font-oswald text-3xl font-bold uppercase mb-4 leading-none group-hover:text-white">
                                {project.title}
                            </h3>

                            <p className="font-sans text-sm leading-relaxed text-zinc-600 mb-8 group-hover:text-white/90 flex-grow border-l-2 border-zinc-200 pl-4 group-hover:border-white/30">
                                {project.description}
                            </p>

                            <div className="mt-auto">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openDemo(project.id, project.title);
                                    }}
                                    className="w-full bg-black text-white font-bold uppercase py-4 border-2 border-black flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black transition-colors tracking-widest text-sm"
                                >
                                    [ View Prototype ] <ArrowUpRight className="w-4 h-4" />
                                </button>

                                <div className="flex gap-2 mt-4 flex-wrap">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-mono uppercase text-zinc-400 group-hover:text-white/60">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <DemoModal
                isOpen={isOpen}
                onClose={closeDemo}
                demoId={demoId}
                title={title}
            />
        </section>
    );
}
