"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        label: "HEALTHCARE · LOCAL BUSINESS",
        title: "Apex Dental Care",
        subtitle: "Rohtak's Top-Rated Dental Clinic",
        description: "Built a full-stack clinic website for Dr. Aashish Malik — complete with WhatsApp booking, multi-location SEO, blog CMS, service pages for 8 dental treatments, and a lead capture system. Positioned the clinic as Rohtak's most trusted dental destination.",
        metrics: [
            { label: "Google Reviews", value: "38 · 5.0 Rating" },
            { label: "SEO Status", value: "8 Service Pages Indexed" },
            { label: "Integration", value: "WhatsApp Booking Live" },
            { label: "Reach", value: "2 Locations Covered" }
        ],
        tags: ["#Next.js", "#LocalSEO", "#Healthcare"],
        stack: "Next.js, Tailwind CSS, SEO Architecture",
        liveUrl: "https://apexdentalcare.co.in"
    },
    {
        label: "LOCAL SERVICES · DELHI",
        title: "Comex Drycleaners",
        subtitle: "Premium Dry Cleaning Since 1993",
        description: "Redesigned and rebuilt the full digital presence for a 30-year-old premium dry cleaning brand serving Dwarka & Palam. Built online booking, transparent pricing tables, WhatsApp integration, callback lead system, and a brand identity that justifies premium pricing in a commoditized market.",
        metrics: [
            { label: "Scale", value: "5,000+ Happy Customers" },
            { label: "Legacy", value: "30+ Years Heritage Digitized" },
            { label: "Integration", value: "Online Booking System Live" },
            { label: "Rating", value: "4.9/5.0 Rating" }
        ],
        tags: ["#Next.js", "#BookingSystem", "#LocalBusiness"],
        stack: "Next.js, Tailwind CSS, Booking System",
        liveUrl: "https://comexdrycleaner.com"
    }
];

export default function DeployedWorkSection() {
    return (
        <section id="work" className="py-24 bg-[#050505] text-[#F4F3EE] border-t border-white/10" style={{ backgroundColor: '#050505' }}>
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16">
                    <p className="font-mono text-sm text-zinc-500 mb-2 uppercase tracking-wide">// DEPLOYED IN PRODUCTION</p>
                    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest flex items-center gap-4 text-[#F4F3EE]">
                        <div className="w-8 h-[4px] bg-[#F35815]"></div>
                        Real Clients. Real Results.
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[#0d0d0d] border border-[#1a1a1a] p-8 transition-all duration-300 hover:border-[#E85D26] hover:shadow-[0_0_20px_rgba(232,93,38,0.15)] flex flex-col h-full"
                        >
                            {/* Live Badge */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 font-mono text-xs font-bold text-[#25D366] tracking-widest bg-white/5 px-2 py-1 rounded-sm border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                                </span>
                                // LIVE
                            </div>

                            {/* Industry Label & Title */}
                            <p className="font-mono text-xs text-[#E85D26] uppercase tracking-widest mb-4">
                                {project.label}
                            </p>
                            <h3 className="font-oswald text-4xl font-bold tracking-tight mb-2">
                                {project.title}
                            </h3>
                            <p className="font-mono text-sm text-zinc-400 mb-6">
                                {project.subtitle}
                            </p>

                            {/* Description */}
                            <p className="font-sans text-sm text-zinc-300 leading-relaxed max-w-xl mb-8">
                                {project.description}
                            </p>

                            {/* Terminal Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8 bg-black/50 border border-white/5 p-4 font-mono text-xs">
                                {project.metrics.map((metric, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="text-zinc-600 uppercase tracking-wider">{metric.label}</div>
                                        <div className="text-[#F4F3EE] font-medium">{metric.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Tags & Stack */}
                            <div className="mt-auto space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="font-mono text-xs text-zinc-400 bg-white/5 border border-white/10 px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="font-mono text-xs text-zinc-500">
                                    STACK: <span className="text-zinc-400">{project.stack}</span>
                                </p>

                                {/* CTA Button */}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F4F3EE] text-black font-bold uppercase tracking-widest transition-colors hover:bg-[#E85D26] hover:text-white border-2 border-transparent"
                                >
                                    VIEW LIVE <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
