export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                            <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <span className="font-semibold">Robin Gautam</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-zinc-400">
                        <a href="mailto:hello@robingautam.in" className="hover:text-white transition-colors">hello@robingautam.in</a>
                        <a href="portfolio/" className="hover:text-white transition-colors">Portfolio</a>
                    </div>
                    <div className="text-sm text-zinc-500">
                        © 2026 Robin Gautam. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
