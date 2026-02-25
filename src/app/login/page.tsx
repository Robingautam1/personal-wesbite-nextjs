'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowLeft, Github, Chrome } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const supabase = createClient();
    const router = useRouter();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            if (isSignIn) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                if (error) throw error;
                router.push('/dashboard');
            } else {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${location.origin}/auth/callback`,
                    },
                });
                if (error) throw error;
                setMessage('Check your email for the confirmation link!');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialLogin = async (provider: 'github' | 'google') => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: `${location.origin}/auth/callback`,
                },
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4">
            {/* Background effects */}
            <div className="fixed top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="fixed top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Login Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white font-bold text-2xl">R</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">
                            {isSignIn ? 'Welcome back' : 'Create account'}
                        </h1>
                        <p className="text-zinc-400">
                            {isSignIn ? 'Sign in to access the Command Center' : 'Sign up to get started'}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setIsSignIn(true)}
                            className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all ${isSignIn
                                    ? 'bg-blue-500/10 border border-blue-500/50 text-white'
                                    : 'border border-white/10 text-zinc-400 hover:text-white'
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsSignIn(false)}
                            className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-xl transition-all ${!isSignIn
                                    ? 'bg-blue-500/10 border border-blue-500/50 text-white'
                                    : 'border border-white/10 text-zinc-400 hover:text-white'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button
                            onClick={() => handleSocialLogin('github')}
                            className="flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </button>
                        <button
                            onClick={() => handleSocialLogin('google')}
                            className="flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors"
                        >
                            <Chrome className="w-5 h-5" />
                            Google
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[#0a0a0a] text-zinc-500">or</span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-400">
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-400">
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Processing...' : isSignIn ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center text-zinc-500 text-sm mt-6">
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                </p>
            </motion.div>
        </div>
    );
}
