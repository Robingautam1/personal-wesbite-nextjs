export default function EcosystemDemo() {
    const stats = [
        { label: "Active Users", value: "12,450", change: "+24%" },
        { label: "Revenue (MTD)", value: "₹4.2L", change: "+18%" },
        { label: "Conversion Rate", value: "3.8%", change: "+0.5%" },
        { label: "Avg. Session", value: "4m 32s", change: "+12%" },
    ];

    return (
        <div className="min-h-[600px] bg-midnight-950 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold">Ecosystem Dashboard</h1>
                    <p className="text-zinc-400">Your complete digital infrastructure</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-midnight-800 rounded-lg text-sm">Export</button>
                    <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm">Settings</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="p-6 bg-midnight-800 rounded-2xl">
                        <p className="text-sm text-zinc-400 mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold mb-1">{stat.value}</p>
                        <p className="text-sm text-green-400">{stat.change}</p>
                    </div>
                ))}
            </div>

            {/* Module Grid */}
            <div className="grid md:grid-cols-3 gap-4">
                {["Website", "CRM", "Analytics", "Email", "Payments", "Support"].map((module) => (
                    <div key={module} className="p-6 bg-midnight-800 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">{module}</h3>
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                        </div>
                        <p className="text-sm text-zinc-400">Module active and operational</p>
                    </div>
                ))}
            </div>

            <p className="text-center text-xs text-zinc-500 mt-8">Built with ₹9,999 Ecosystem Package</p>
        </div>
    );
}
