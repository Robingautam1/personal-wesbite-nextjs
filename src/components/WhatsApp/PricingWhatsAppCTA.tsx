import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PricingWhatsAppCTAProps {
    tierName: string;
    price: string;
    ctaText: string;
}

export default function PricingWhatsAppCTA({ tierName, price, ctaText }: PricingWhatsAppCTAProps) {
    // Generate the pre-filled message based on the tier
    const getMessage = () => {
        if (tierName === "THE IDENTITY") {
            return `Hey Robin, I want to start THE IDENTITY package (₹${price}). When can we connect?`;
        } else if (tierName === "THE GROWTH ENGINE") {
            return `Hey Robin, I want to start THE GROWTH ENGINE package (₹${price}). When can we connect?`;
        } else if (tierName === "THE ECOSYSTEM") {
            return `Hey Robin, I want to discuss THE ECOSYSTEM package (₹${price}). Can we schedule a strategy call?`;
        }
        return `Hey Robin, I want to discuss the ${tierName} package (₹${price}). When can we connect?`;
    };

    const phoneNumber = "918292511007";
    const message = getMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                w-full py-4 
                font-oswald text-lg font-bold uppercase tracking-widest
                border-2 border-black
                bg-transparent hover:bg-black hover:text-white
                transition-all flex items-center justify-center gap-2
                group
            `}
            aria-label={`Contact on WhatsApp for ${tierName} package`}
        >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
    );
}
