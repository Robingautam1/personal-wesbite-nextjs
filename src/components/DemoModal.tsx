"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    demoId: string | null;
    title: string;
    price?: string;
}

export default function DemoModal({
    isOpen,
    onClose,
    demoId,
    title,
    price,
}: DemoModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Esc key listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    // Reset loading state when modal opens/closes
    useEffect(() => {
        if (isOpen) setIsLoading(true);
    }, [isOpen]);

    // Construct demo URL (using a placeholder or specific logic if needed)
    // For now, assuming demoId maps to a route or external URL
    const demoUrl = demoId ? `/demos/${demoId}` : null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-brand-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none"
                    >
                        <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-brand-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col">

                            {/* Header Bar */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-black/50 backdrop-blur-md z-10">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="h-6 w-px bg-white/10 mx-2" />
                                    <div>
                                        <h3 className="text-white font-medium text-sm tracking-wide">{title}</h3>
                                        {price && <span className="text-brand-orange text-xs font-mono">{price}</span>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {demoId && (
                                        <a
                                            href={demoUrl || "#"}
                                            target="_blank"
                                            className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                                        >
                                            OPEN_NEW_TAB <ExternalLink className="w-3 h-3" />
                                        </a>
                                    )}
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                                    >
                                        <X className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                                    </button>
                                </div>
                            </div>

                            {/* Iframe / Content Area */}
                            <div className="relative flex-1 bg-[#050505] w-full h-full overflow-hidden">
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Loader2 className="w-8 h-8 text-brand-orange animate-spin" />
                                    </div>
                                )}

                                {demoUrl ? (
                                    <iframe
                                        src={demoUrl}
                                        className="w-full h-full border-0"
                                        onLoad={() => setIsLoading(false)}
                                        title={`${title} Demo`}
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
                                        <p>Preview not available for this ID.</p>
                                        <button onClick={onClose} className="text-brand-orange underline">Close Preview</button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Custom Hook for easier usage in page.tsx
export function useDemoModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [demoId, setDemoId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const openDemo = (id: string, demoTitle: string, demoPrice?: string) => {
        setDemoId(id);
        setTitle(demoTitle);
        setPrice(demoPrice || "");
        setIsOpen(true);
    };

    const closeDemo = () => {
        setIsOpen(false);
        // Optional: Reset state after animation
        setTimeout(() => {
            setDemoId(null);
            setTitle("");
            setPrice("");
        }, 300);
    };

    return { isOpen, demoId, title, price, openDemo, closeDemo };
}
