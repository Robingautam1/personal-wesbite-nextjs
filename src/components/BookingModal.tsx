"use client";

import { useEffect } from "react";
import Script from "next/script";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
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

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            >
                <div className="bg-midnight-800 border border-white/10 rounded-3xl p-8 max-w-lg w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Book Your Strategy Session</h2>
                        <button onClick={onClose} className="text-zinc-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    <p className="text-zinc-400 mb-6">You don&apos;t need a perfect idea. Just bring what you have.</p>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/gautam-robin333/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                        style={{ minHeight: "700px", height: "700px" }}
                    ></div>
                </div>
            </div>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </>
    );
}
