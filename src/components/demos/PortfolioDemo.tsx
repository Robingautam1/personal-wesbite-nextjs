export default function PortfolioDemo() {
    const projects = [
        { name: "Project Alpha", category: "Web Design", color: "from-blue-500 to-cyan-500" },
        { name: "Project Beta", category: "Branding", color: "from-purple-500 to-pink-500" },
        { name: "Project Gamma", category: "Development", color: "from-orange-500 to-red-500" },
    ];

    return (
        <div className="min-h-[600px] bg-midnight-950 p-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-2">Creative Portfolio</h1>
                <p className="text-zinc-400">Showcasing my best work</p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {projects.map((project, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <div className={`aspect-[4/3] bg-gradient-to-br ${project.color}`} />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-zinc-300">{project.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* About */}
            <div className="mt-12 p-6 bg-midnight-800 rounded-2xl max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-accent to-purple-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p className="text-zinc-400 text-sm">
                    A passionate designer and developer creating beautiful digital experiences.
                </p>
            </div>

            <p className="text-center text-xs text-zinc-500 mt-8">Built with ₹1,499 Portfolio Package</p>
        </div>
    );
}
