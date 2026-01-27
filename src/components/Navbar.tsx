'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from './auth/AuthProvider';
import { createClient } from '@/lib/supabase/client';
import dynamic from 'next/dynamic';
import { User, LogOut, LayoutDashboard } from 'lucide-react';

const AuthModal = dynamic(() => import('./auth/AuthModal').then(mod => mod.AuthModal), { ssr: false });

interface NavbarProps {
    onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
    const { user } = useAuth();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const supabase = createClient();

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        setIsProfileOpen(false);
    };

    const openCalendly = () => {
        // @ts-ignore
        if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/gautam-robin333/30min'
            });
            return false;
        }
        window.open('https://calendly.com/gautam-robin333/30min', '_blank');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <span className="font-semibold text-lg hidden sm:block">Robin Gautam</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/#process" className="text-sm text-zinc-400 hover:text-white transition-colors">Process</Link>
                        <Link href="/#work" className="text-sm text-zinc-400 hover:text-white transition-colors">Work</Link>
                        <Link href="/portfolio" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent ring-2 ring-transparent hover:ring-accent/50 transition-all">
                                        {user.user_metadata?.avatar_url ? (
                                            <img src={user.user_metadata.avatar_url} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                        ) : (
                                            <span className="font-bold">{user.email?.[0].toUpperCase()}</span>
                                        )}
                                    </div>
                                </button>

                                {isProfileOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)} />
                                        <div className="absolute right-0 mt-2 w-48 bg-midnight-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-20">
                                            <div className="px-4 py-3 border-b border-white/5">
                                                <p className="text-sm text-white font-medium truncate">{user.user_metadata?.full_name || 'User'}</p>
                                                <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                                            </div>
                                            <Link
                                                href="/dashboard"
                                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white transition-colors"
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                <LayoutDashboard className="w-4 h-4" />
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-white/5 hover:text-red-300 transition-colors text-left"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsAuthOpen(true)}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                Login
                            </button>
                        )}

                        <button
                            onClick={openCalendly}
                            className="cta-premium px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                            </svg>
                            <span className="hidden sm:inline">Book Session</span>
                            <span className="sm:hidden">Book</span>
                        </button>
                    </div>
                </div>
            </div>

            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </nav>
    );
}
