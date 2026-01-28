"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
    title: string;
    role: string;
    pitch: string;
    metric?: string;
    links?: {
        demo?: string;
        repo?: string;
    };
    tags?: string[];
    className?: string;
}

export default function ProjectCard({
    title,
    role,
    pitch,
    metric,
    links,
    tags,
    className,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10 ${className}`}
        >
            <div>
                <div className="flex items-start justify-between">
                    <div>
                        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-emerald-500">
                            {role}
                        </span>
                        <h3 className="mb-3 font-serif text-2xl text-white md:text-3xl">
                            {title}
                        </h3>
                    </div>
                    {/* Mobile Tap Target / Visual Indicator */}
                    <div className="rounded-full bg-white/5 p-2 text-zinc-400 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-500">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-zinc-300 md:text-base">
                    {pitch}
                </p>

                {metric && (
                    <div className="mb-6 border-l-2 border-emerald-500/50 pl-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                            Business Impact
                        </p>
                        <p className="font-medium text-white">{metric}</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-4">
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-4">
                    {links?.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
                        >
                            <span>Visit Site</span>
                            <ExternalLink className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                    )}
                    {links?.repo && (
                        <a
                            href={links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            <span>GitHub</span>
                            <Github className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
