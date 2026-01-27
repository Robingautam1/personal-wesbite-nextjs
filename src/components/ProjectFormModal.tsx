"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { submitLead } from "@/app/actions";

interface ProjectFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTier?: string;
}

export default function ProjectFormModal({ isOpen, onClose, defaultTier = "Starter" }: ProjectFormModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        const result = await submitLead(formData);
        setIsSubmitting(false);

        if (result.success) {
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 3000);
        } else {
            alert("Something went wrong. Please try again.");
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white text-brand-black border-2 border-brand-black shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-brand-black text-white p-6 flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold font-oswald uppercase tracking-wide">
                                    Let's Get To Work.
                                </h2>
                                <p className="text-zinc-400 text-sm mt-1">
                                    Tell me about the vision. No fluff.
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Check className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold font-oswald uppercase">Received.</h3>
                                    <p className="text-zinc-600">
                                        I'll review your brief and hit your WhatsApp shortly.
                                    </p>
                                </div>
                            ) : (
                                <form action={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Name</label>
                                            <input
                                                name="name"
                                                required
                                                className="w-full bg-zinc-50 text-black border-b-2 border-zinc-200 p-2 focus:border-brand-black focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Contact (WhatsApp)</label>
                                            <input
                                                name="contact"
                                                required
                                                className="w-full bg-zinc-50 text-black border-b-2 border-zinc-200 p-2 focus:border-brand-black focus:outline-none transition-colors"
                                                placeholder="+91 98765..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full bg-zinc-50 text-black border-b-2 border-zinc-200 p-2 focus:border-brand-black focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Selected Plan</label>
                                        <input
                                            name="type"
                                            defaultValue={defaultTier}
                                            readOnly
                                            className="w-full bg-zinc-100 text-zinc-900 border-b-2 border-zinc-200 p-2 cursor-not-allowed font-mono text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">The Brief</label>
                                        <textarea
                                            name="brief"
                                            rows={3}
                                            className="w-full bg-zinc-50 text-black border-b-2 border-zinc-200 p-2 focus:border-brand-black focus:outline-none transition-colors resize-none"
                                            placeholder="What are we building? (e.g. Portfolio for architecture firm...)"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-agency-orange text-white font-oswald font-bold uppercase tracking-wider py-4 hover:bg-black transition-colors flex items-center justify-center gap-2 group"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <>
                                                Secure This Slot
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-center text-zinc-400">
                                        Trusted by 20+ Founders. 100% Code Ownership.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
