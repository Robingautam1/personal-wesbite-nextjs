"use client";

interface NavbarProps {
    onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <span className="font-semibold text-lg hidden sm:block">Robin Gautam</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#process" className="text-sm text-zinc-400 hover:text-white transition-colors">Process</a>
                        <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">Work</a>
                        <a href="portfolio/" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a>
                    </div>

                    <button
                        onClick={onOpenBooking}
                        className="cta-premium px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                        </svg>
                        Book Strategy Session
                    </button>
                </div>
            </div>
        </nav>
    );
}
