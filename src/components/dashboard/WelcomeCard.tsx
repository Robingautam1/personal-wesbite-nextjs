'use client';

import { motion } from 'framer-motion';
import { User } from '@supabase/supabase-js';

export function WelcomeCard({ user }: { user: User }) {
    const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
    const avatarUrl = user.user_metadata?.avatar_url;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center gap-6">
                <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-[1px]">
                        <div className="w-full h-full rounded-2xl bg-black overflow-hidden relative">
                            {avatarUrl ? (
                                <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-3xl font-bold bg-zinc-900">
                                    {name[0].toUpperCase()}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-black" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-1">Welcome back, {name}</h1>
                    <p className="text-zinc-400">System operational. Ready for deployment.</p>
                </div>
            </div>
        </motion.div>
    );
}
