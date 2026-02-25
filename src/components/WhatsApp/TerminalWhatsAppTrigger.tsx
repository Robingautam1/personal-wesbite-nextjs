import React from 'react';

export default function TerminalWhatsAppTrigger() {
    const phoneNumber = "918292511007";
    const message = "Hey Robin, I'm ready to initiate. Let's talk.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Initiate WhatsApp connection"
            className="block text-left w-full max-w-lg mx-auto bg-[#0a0a0a] border border-[#1a1a1a] p-6 font-mono text-sm leading-relaxed group transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.15)] mt-8"
        >
            <div className="text-zinc-500 mb-4 select-none">
                $ ./connect --channel=whatsapp --status=AVAILABLE
            </div>

            <div className="flex items-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black p-2 -mx-2 transition-colors duration-300">
                <span className="font-bold tracking-widest uppercase mr-3">
                    [ OPEN CHANNEL ]
                </span>

                {/* Blinking Cursor block */}
                <span className="w-3 h-5 bg-current animate-[pulse_1s_step-end_infinite]" />
            </div>
        </a>
    );
}
