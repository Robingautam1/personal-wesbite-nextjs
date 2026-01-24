export default function BioLinkDemo() {
    return (
        <div className="p-8 min-h-[500px]">
            <div className="max-w-sm mx-auto bg-midnight-800 rounded-3xl p-8 text-center">
                {/* Profile */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-purple-500 mb-4" />
                <h2 className="text-2xl font-bold mb-1">Robin Gautam</h2>
                <p className="text-zinc-400 text-sm mb-6">Digital Product Studio</p>

                {/* Links */}
                <div className="space-y-3">
                    <a href="#" className="block w-full py-4 px-6 rounded-xl bg-accent text-white font-medium hover:scale-105 transition-transform">
                        🌐 Visit Website
                    </a>
                    <a href="#" className="block w-full py-4 px-6 rounded-xl border border-white/20 hover:bg-white/5 transition-colors">
                        📧 Contact Me
                    </a>
                    <a href="#" className="block w-full py-4 px-6 rounded-xl border border-white/20 hover:bg-white/5 transition-colors">
                        💼 LinkedIn
                    </a>
                    <a href="#" className="block w-full py-4 px-6 rounded-xl border border-white/20 hover:bg-white/5 transition-colors">
                        🐙 GitHub
                    </a>
                </div>

                <p className="text-xs text-zinc-500 mt-6">Built with ₹249 Bio-Link Package</p>
            </div>
        </div>
    );
}
