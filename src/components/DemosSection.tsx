"use client";

import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        id: "bio-link.html",
        title: "IDENTITY SYSTEM V1",
        category: "Bio-Link",
        description: "A minimalist personal identity page. Clean typography and structured layout.",
    },
    {
        id: "portfolio.html",
        title: "MINIMALIST FOLIO",
        category: "Portfolio",
        description: "A stripped-down portfolio template. Focus on work, nothing else.",
    },
    {
        id: "storefront.html",
        title: "COMMERCE ENGINE",
        category: "E-Commerce",
        description: "A conversion-optimized product showcase. Built for speed and cart flow.",
    },
    {
        id: "publisher.html",
        title: "CMS BLOG STACK",
        category: "Content",
        description: "A publishing-ready blog layout. SEO structure baked in from day one.",
    },
    {
        id: "ecosystem.html",
        title: "SAAS DASHBOARD KIT",
        category: "SaaS",
        description: "A data-dense dashboard template. Charts, tables, and dark mode ready.",
    },
    {
        id: "landing-page.html",
        title: "CONVERSION LP",
        category: "Landing Page",
        description: "A high-conversion landing page. Hero, social proof, CTA stack.",
    },
];

export default function DemosSection() {
    return (
        <section
            className="py-24 border-b border-white/10 bg-[#050505]"
            style={{ backgroundColor: '#050505' }}
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-4 flex items-center gap-4 text-[#F4F3EE]">
                    <div className="w-8 h-[4px] bg-[#F35815]"></div>
                    THE LAB
                </h2>
                <p className="font-mono text-sm text-zinc-500 mb-12 max-w-xl">
                    Prototypes, experiments, and proof-of-concept builds. These are
                    templates and systems I've built to test ideas fast.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project) => (
                        <a
                            key={project.id}
                            href={`/demos/${project.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border border-white/10 bg-white/[0.02] p-6 hover:border-[#F35815] transition-all flex flex-col justify-between min-h-[200px] hover:shadow-[4px_4px_0px_0px_#F35815]"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-mono text-xs text-[#F35815] uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-[#F35815] transition-colors" />
                                </div>
                                <h3 className="font-oswald text-xl font-bold uppercase tracking-tight text-[#F4F3EE] mb-2">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 group-hover:text-[#F35815] transition-colors flex items-center gap-2">
                                    [ View Prototype ] <ArrowUpRight className="w-3 h-3" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
