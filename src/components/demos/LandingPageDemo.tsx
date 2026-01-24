export default function LandingPageDemo() {
    return (
        <div className="min-h-[600px] bg-midnight-950">
            {/* Hero */}
            <div className="px-8 py-16 text-center">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm mb-6">
                    ✨ Now Available
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Your Amazing Product
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
                    A compelling description that converts visitors into customers.
                    Built for modern founders.
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:scale-105 transition-transform">
                        Get Started
                    </button>
                    <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features */}
            <div className="px-8 py-16 bg-midnight-900">
                <h2 className="text-2xl font-bold text-center mb-12">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {["Fast", "Reliable", "Scalable"].map((feature) => (
                        <div key={feature} className="p-6 bg-midnight-800 rounded-2xl text-center">
                            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                                <span className="text-accent text-xl">⚡</span>
                            </div>
                            <h3 className="font-semibold mb-2">{feature}</h3>
                            <p className="text-sm text-zinc-400">Description of this amazing feature.</p>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-xs text-zinc-500 py-4">Built with ₹999 Landing Page Package</p>
        </div>
    );
}
