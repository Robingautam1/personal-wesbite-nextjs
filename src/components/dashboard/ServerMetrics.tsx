'use client';

import { motion } from 'framer-motion';
import { Activity, Server, Cpu, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ServerMetrics() {
    // Mock data simulation
    const [metrics, setMetrics] = useState({
        cpu: 42,
        memory: 64,
        latency: 24,
        uptime: 99.99
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                ...prev,
                cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
                memory: Math.min(100, Math.max(0, prev.memory + (Math.random() - 0.5) * 5)),
                latency: Math.max(10, prev.latency + (Math.random() - 0.5) * 4)
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
                icon={Cpu}
                label="CPU Usage"
                value={`${Math.round(metrics.cpu)}%`}
                color="text-blue-400"
                bg="bg-blue-500/10"
            />
            <MetricCard
                icon={Server}
                label="Memory"
                value={`${Math.round(metrics.memory)}%`}
                color="text-purple-400"
                bg="bg-purple-500/10"
            />
            <MetricCard
                icon={Activity}
                label="Latency"
                value={`${Math.round(metrics.latency)}ms`}
                color="text-green-400"
                bg="bg-green-500/10"
            />
            <MetricCard
                icon={Globe}
                label="Uptime"
                value={`${metrics.uptime}%`}
                color="text-orange-400"
                bg="bg-orange-500/10"
            />
        </div>
    );
}

function MetricCard({ icon: Icon, label, value, color, bg }: any) {
    return (
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bg}`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <span className="text-sm text-zinc-400">{label}</span>
            </div>
            <div className="text-2xl font-mono font-bold">{value}</div>
        </div>
    );
}
