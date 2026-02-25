import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { WelcomeCard } from '@/components/dashboard/WelcomeCard';
import { ServerMetrics } from '@/components/dashboard/ServerMetrics';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';
import { Guestbook } from '@/components/dashboard/Guestbook';
import { LogOut, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-400 font-medium">All Systems Operational</span>
                    </div>

                    <form action="/auth/signout" method="post">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10">
                    <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Command Center
                    </h1>
                    <p className="text-zinc-500">Your digital operations hub</p>
                </div>
            </div>

            {/* Welcome Card */}
            <WelcomeCard user={user} />

            {/* Server Metrics */}
            <div>
                <h2 className="text-lg font-semibold mb-4 text-zinc-300">System Metrics</h2>
                <ServerMetrics />
            </div>

            {/* Two Column Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Theme Toggle */}
                <ThemeToggle user={user} />

                {/* Guestbook */}
                <Guestbook user={user} />
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
                <p>This dashboard demonstrates Supabase Auth, Database Persistence, and Real-time Subscriptions.</p>
                <p className="mt-1">Built with Next.js 16, React 19, and Tailwind CSS.</p>
            </div>
        </div>
    );
}
