export default function TrustSection() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Why Founders Trust Us</span>
                    <h2 className="text-fluid-display font-bold mt-4 mb-4">The Trust Factors</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Not just promises. Here&apos;s what makes us different.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Business-First Architecture */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight-800 to-midnight-950 p-8 border border-white/5 hover:border-accent/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Business-First Architecture</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">We don&apos;t just code; we align digital systems with your revenue goals. Built by MBA strategists.</p>
                        </div>
                    </div>

                    {/* Speed Without Debt */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight-800 to-midnight-950 p-8 border border-white/5 hover:border-yellow-500/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Speed Without Debt</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">Rapid deployment using modern frameworks (Next.js), not buggy templates. Clean code that scales.</p>
                        </div>
                    </div>

                    {/* Transparent Delivery */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight-800 to-midnight-950 p-8 border border-white/5 hover:border-emerald-500/20 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Transparent Delivery</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">No hidden costs. You get a live Trello/Notion board to track every pixel of your project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
