'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

type Message = {
    id: string;
    message: string;
    created_at: string;
    user_id: string;
    user?: {
        username: string;
        avatar_url: string;
    };
};

export function Guestbook({ user }: { user: User }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const supabase = createClient();

    useEffect(() => {
        fetchMessages();

        // Subscribe to new messages
        const channel = supabase
            .channel('guestbook')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'guestbook' },
                (payload) => {
                    fetchMessages(); // Re-fetch to get joined user data
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    async function fetchMessages() {
        // Note: In a real app we'd join with profiles, but for now we'll fetch raw
        const { data } = await supabase
            .from('guestbook')
            .select(`
        *,
        profiles:user_id (
          username,
          avatar_url
        )
      `)
            .order('created_at', { ascending: false })
            .limit(10);

        if (data) {
            setMessages(data.map(msg => ({
                ...msg,
                user: msg.profiles // Map joined data
            })));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || isSubmitting) return;

        setIsSubmitting(true);
        const messageContent = newMessage;
        setNewMessage(''); // Optimistic clear

        try {
            const { error } = await supabase
                .from('guestbook')
                .insert({
                    user_id: user.id,
                    message: messageContent
                });

            if (error) throw error;
        } catch (err) {
            console.error('Failed to post message:', err);
            setNewMessage(messageContent); // Restore on error
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-[600px] flex flex-col p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                    <h2 className="text-xl font-bold">Monitor Feed</h2>
                    <p className="text-sm text-zinc-400">Real-time updates from across the network</p>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="group flex gap-3 items-start"
                        >
                            <div className="w-8 h-8 rounded-lg bg-zinc-800 flex-shrink-0 overflow-hidden">
                                {msg.user?.avatar_url && (
                                    <img src={msg.user.avatar_url} alt="" className="w-full h-full object-cover" />
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-semibold text-sm text-zinc-200">
                                        {msg.user?.username || 'Anonymous'}
                                    </span>
                                    <span className="text-xs text-zinc-600">
                                        {new Date(msg.created_at).toLocaleTimeString()}
                                    </span>
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{msg.message}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div ref={scrollRef} />
            </div>

            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Inject message into stream..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                    type="submit"
                    disabled={!newMessage.trim() || isSubmitting}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
                >
                    <Send className="w-4 h-4 text-blue-400" />
                </button>
            </form>
        </div>
    );
}
