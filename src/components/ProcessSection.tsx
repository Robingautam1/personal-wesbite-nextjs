export default function ProcessSection() {
    return (
        <section id="process" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Process</span>
                    <h2 className="text-fluid-display font-bold mt-4 mb-6">From Vision to Launch in 3 Steps</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">A battle-tested framework that transforms ideas into scalable digital products.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1: Audit */}
                    <div className="group">
                        <div className="glass-card rounded-3xl p-8 hover:border-accent/20 transition-all duration-300 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-midnight-800 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                                <svg className="w-8 h-8 text-zinc-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="M21 21l-4.35-4.35" />
                                </svg>
                            </div>
                            <div className="text-xs text-accent font-semibold mb-3">STEP 01</div>
                            <h3 className="text-2xl font-bold mb-4">Audit</h3>
                            <p className="text-zinc-400 leading-relaxed">Deep-dive into your business, users, and market. We identify gaps and the fastest path to results.</p>
                        </div>
                    </div>

                    {/* Step 2: Build */}
                    <div className="group">
                        <div className="glass-card rounded-3xl p-8 hover:border-accent/20 transition-all duration-300 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-midnight-800 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                                <svg className="w-8 h-8 text-zinc-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path d="M8 9l3 3-3 3" />
                                    <path d="M13 15h3" />
                                    <rect x="3" y="4" width="18" height="16" rx="2" />
                                </svg>
                            </div>
                            <div className="text-xs text-accent font-semibold mb-3">STEP 02</div>
                            <h3 className="text-2xl font-bold mb-4">Build</h3>
                            <p className="text-zinc-400 leading-relaxed">Agile design and development sprints. We ship fast, iterate faster, and keep you in the loop.</p>
                        </div>
                    </div>

                    {/* Step 3: Scale */}
                    <div className="group">
                        <div className="glass-card rounded-3xl p-8 hover:border-accent/20 transition-all duration-300 h-full">
                            <div className="w-16 h-16 rounded-2xl bg-midnight-800 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent/30 transition-colors">
                                <svg className="w-8 h-8 text-zinc-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                </svg>
                            </div>
                            <div className="text-xs text-accent font-semibold mb-3">STEP 03</div>
                            <h3 className="text-2xl font-bold mb-4">Scale</h3>
                            <p className="text-zinc-400 leading-relaxed">Launch, measure, and optimize. We ensure your product keeps winning with ongoing support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
