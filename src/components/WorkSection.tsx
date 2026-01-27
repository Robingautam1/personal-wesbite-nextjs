export default function WorkSection() {
    return (
        <section id="work" className="py-32 bg-midnight-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                    <div>
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest">Recent Work</span>
                        <h2 className="text-fluid-display font-bold mt-4">Live Project Demos</h2>
                        <p className="text-zinc-400 mt-3">Hover to see them in action</p>
                    </div>
                    <a href="portfolio/" className="mt-6 md:mt-0 text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        View All Projects
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-12 gap-8">
                    {/* CashCurious - Large Card */}
                    <div className="col-span-12 lg:col-span-7 group cursor-pointer">
                        <div className="relative h-full">
                            {/* Browser Window Mockup */}
                            <div className="bg-midnight-800/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-accent/20 transition-all duration-500">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-3 px-4 py-3 bg-midnight-950/50 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-midnight-900/80 rounded-lg border border-white/5">
                                        <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-xs text-zinc-500 truncate">cash-curious.vercel.app</span>
                                    </div>
                                </div>

                                {/* Preview Area */}
                                <div className="relative aspect-[16/10] bg-gradient-to-br from-emerald-900/30 to-midnight-950 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 flex items-center justify-center p-12">
                                        <div className="w-full space-y-8">
                                            <div className="text-center space-y-3">
                                                <div className="text-3xl font-bold text-emerald-400">CashCurious</div>
                                                <div className="text-zinc-400">Gamified Financial Literacy</div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="bg-midnight-800/60 rounded-xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-white">5</div>
                                                    <div className="text-xs text-zinc-500">Games</div>
                                                </div>
                                                <div className="bg-midnight-800/60 rounded-xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-emerald-400">∞</div>
                                                    <div className="text-xs text-zinc-500">Plays</div>
                                                </div>
                                                <div className="bg-midnight-800/60 rounded-xl p-4 text-center">
                                                    <div className="text-2xl font-bold text-white">100%</div>
                                                    <div className="text-xs text-zinc-500">Free</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Glassmorphism Info Panel */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-950/95 via-midnight-950/90 to-transparent backdrop-blur-md p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold">CashCurious</h3>
                                            <div className="px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                                                <span className="text-emerald-400 font-bold text-sm">+40% Engagement</span>
                                            </div>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed">Gamified financial literacy platform making personal finance fun for the next generation.</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">Next.js</span>
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">React</span>
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">TypeScript</span>
                                        </div>
                                        <div className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <a href="https://cash-curious.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl font-semibold text-sm transition-colors">
                                                View Live Site
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* QuantMaster Card */}
                    <div className="col-span-12 lg:col-span-5 group cursor-pointer">
                        <div className="relative h-full">
                            {/* Browser Window Mockup */}
                            <div className="bg-midnight-800/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-purple-500/20 transition-all duration-500">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-3 px-4 py-3 bg-midnight-950/50 border-b border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-midnight-900/80 rounded-lg border border-white/5">
                                        <svg className="w-3 h-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span className="text-xs text-zinc-500 truncate">robingautam1.github.io</span>
                                    </div>
                                </div>

                                {/* Preview Area */}
                                <div className="relative aspect-[16/10] bg-gradient-to-br from-purple-900/30 to-midnight-950 overflow-hidden">
                                    {/* Code Preview */}
                                    <div className="absolute inset-0 p-8 font-mono text-sm">
                                        <div className="space-y-2">
                                            <div className="text-zinc-600">// QuantMaster Financial Calculators</div>
                                            <div className="text-purple-400">class <span className="text-accent">FinancialCalculator</span> {"{"}</div>
                                            <div className="pl-4 text-zinc-400 transform group-hover:translate-x-2 transition-transform duration-500">calculateNPV(cashFlows, rate) {"{"}</div>
                                            <div className="pl-8 text-emerald-400 transform group-hover:translate-x-4 transition-transform duration-700">return npv;</div>
                                            <div className="pl-4 text-zinc-400">{"}"}</div>
                                            <div className="text-purple-400">{"}"}</div>
                                            <div className="mt-4 text-zinc-600 animate-pulse">› 25+ Interactive Tools</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Glassmorphism Info Panel */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-950/95 via-midnight-950/90 to-transparent backdrop-blur-md p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold">QuantMaster</h3>
                                            <span className="text-accent font-bold text-lg">25+ Tools</span>
                                        </div>
                                        <p className="text-zinc-400 text-sm leading-relaxed">Suite of interactive financial calculators for professionals and students.</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">JavaScript</span>
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs text-accent">GitHub Pages</span>
                                        </div>
                                        <div className="opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <a href="https://robingautam1.github.io/quant-master/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light rounded-xl font-semibold text-sm transition-colors">
                                                View Live Site
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
