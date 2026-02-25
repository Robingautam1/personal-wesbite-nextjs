"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppScrollBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if user dismissed it this session
        const dismissed = sessionStorage.getItem('whatsapp-bar-dismissed');
        if (dismissed === 'true') {
            setIsDismissed(true);
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            // Calculate scroll percentage
            const maxScroll = documentHeight - windowHeight;
            const scrollPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

            // Show after 70% scroll
            if (scrollPercentage >= 70) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const dismiss = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDismissed(true);
        setIsVisible(false);
        sessionStorage.setItem('whatsapp-bar-dismissed', 'true');
    };

    if (isDismissed) return null;

    const phoneNumber = "918292511007";
    const message = "Hey Robin, saw your site. Let's connect.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on WhatsApp"
            className={`
                fixed bottom-0 left-0 right-0 z-50 
                bg-[#0d0d0d] border-t border-[#25D366]
                py-2 px-4 transition-transform duration-300 ease-in-out
                flex items-center justify-between
                ${isVisible ? 'translate-y-0' : 'translate-y-full'}
            `}
        >
            <div className="flex-1 flex justify-center items-center gap-2 font-mono text-[0.8rem] text-[#25D366] uppercase tracking-wider">
                <span className="font-bold">[ WA ]</span>
                <span className="text-zinc-500 hidden sm:inline">$ ./robin --available</span>
                <span className="animate-pulse hidden sm:inline">·</span>
                <span>PING ON WHATSAPP &rarr;</span>
            </div>

            <button
                onClick={dismiss}
                className="text-zinc-500 hover:text-white p-1 ml-4"
                aria-label="Dismiss notification"
            >
                <X size={16} />
            </button>
        </a>
    );
}
