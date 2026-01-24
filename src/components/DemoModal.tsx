"use client";

import { useEffect, useState, useCallback } from "react";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    demoId: string;
    title: string;
    price: string;
}

// Custom hook for demo modal state
export function useDemoModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [demoId, setDemoId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const openDemo = useCallback((id: string, demoTitle: string, demoPrice: string) => {
        setDemoId(id);
        setTitle(demoTitle);
        setPrice(demoPrice);
        setIsOpen(true);
    }, []);

    const closeDemo = useCallback(() => {
        setIsOpen(false);
        // Clear after animation
        setTimeout(() => {
            setDemoId("");
            setTitle("");
            setPrice("");
        }, 300);
    }, []);

    return { isOpen, demoId, title, price, openDemo, closeDemo };
}

export default function DemoModal({ isOpen, onClose, demoId, title, price }: DemoModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Map demoId to the correct HTML file path
    const demoPath = `/demos/${demoId}.html`;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div className="relative w-full max-w-7xl h-[90vh] bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                {/* Mac-OS Style Window Header Bar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 border-b border-white/5">
                    {/* Traffic Light Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                            aria-label="Close"
                        />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    {/* Title in center */}
                    <div className="flex-1 flex items-center justify-center gap-3">
                        <span className="text-sm font-semibold text-white">{title} Demo</span>
                        <span className="px-2 py-0.5 bg-accent/20 border border-accent/30 rounded-full text-accent text-xs font-semibold">
                            {price}
                        </span>
                    </div>

                    {/* Close button on right */}
                    <button
                        onClick={onClose}
                        className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white text-lg transition-all hover:scale-110"
                    >
                        ×
                    </button>
                </div>

                {/* Iframe Container */}
                <iframe
                    src={demoPath}
                    className="w-full h-[calc(100%-48px)] border-0 bg-white"
                    title="Demo Preview"
                />
            </div>
        </div>
    );
}
