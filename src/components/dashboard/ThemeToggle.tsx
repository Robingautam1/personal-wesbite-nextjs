'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

const THEMES = [
    { id: 'agency', name: 'Agency Black', colors: 'from-gray-900 to-black' },
    { id: 'cyberpunk', name: 'Cyberpunk Neon', colors: 'from-indigo-900 to-purple-900' },
    { id: 'corporate', name: 'Corporate Blue', colors: 'from-slate-900 to-blue-900' },
] as const;

export function ThemeToggle({ user }: { user: User }) {
    const [currentTheme, setCurrentTheme] = useState('agency');
    const [loading, setLoading] = useState(false);
    const supabase = createClient();

    useEffect(() => {
        async function loadTheme() {
            const { data } = await supabase
                .from('profiles')
                .select('theme_preference')
                .eq('id', user.id)
                .single();

            if (data?.theme_preference) {
                setCurrentTheme(data.theme_preference);
                applyTheme(data.theme_preference);
            }
        }
        loadTheme();
    }, [user.id]);

    const applyTheme = (themeId: string) => {
        // In a real app, this would update a global context or CSS variables
        // For this demo, we'll visualy indicate selection
        console.log(`Theme switched to: ${themeId}`);
    };

    const handleThemeChange = async (themeId: string) => {
        if (loading) return;
        setLoading(true);
        setCurrentTheme(themeId);
        applyTheme(themeId);

        try {
            const { error } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    theme_preference: themeId,
                    updated_at: new Date().toISOString()
                });

            if (error) throw error;
        } catch (err) {
            console.error('Failed to save theme:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-pink-500/10">
                    <Palette className="w-5 h-5 text-pink-400" />
                </div>
                <h2 className="text-xl font-bold">Theme Preference</h2>
            </div>

            <div className="space-y-3">
                {THEMES.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => handleThemeChange(theme.id)}
                        disabled={loading}
                        className={`w-full relative group overflow-hidden rounded-xl p-4 transition-all border ${currentTheme === theme.id
                                ? 'border-white/20 bg-white/10'
                                : 'border-white/5 bg-white/5 hover:bg-white/10'
                            }`}
                    >
                        <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${theme.colors}`} />

                        <div className="relative flex items-center justify-between">
                            <span className="font-medium">{theme.name}</span>
                            {currentTheme === theme.id && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="p-1 rounded-full bg-green-500/20"
                                >
                                    <Check className="w-4 h-4 text-green-400" />
                                </motion.div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
