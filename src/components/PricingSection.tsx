"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { useProjectModal } from "@/context/ProjectModalContext";
import PricingWhatsAppCTA from "@/components/WhatsApp/PricingWhatsAppCTA";

const tiers = [
    {
        name: "THE IDENTITY",
        price: "7,999",
        target: "Consultants, Creators & Personal Brands.",
        description: "Your digital business card, on steroids.",
        features: [
            "High-Performance One-Pager",
            "Social Proof Integration",
            "Lead Capture System",
            "Auto-Reply Setup",
            "Delivered in 48 hours"
        ],
        cta: "SECURE SLOT",
        highlight: false,
        color: "bg-white"
    },
    {
        name: "THE GROWTH ENGINE",
        price: "14,999",
        target: "Clinics, Agencies & Local Business.",
        description: "The complete package to dominate your local market.",
        features: [
            "5-Page Content Strategy",
            "CMS Integration (Self-Edit)",
            "WhatsApp Booking & CRM System",
            "Local SEO Setup",
            "Includes 1-hour training video"
        ],
        cta: "START GROWTH",
        highlight: true,
        color: "bg-white"
    },
    {
        name: "THE ECOSYSTEM",
        price: "29,999+",
        target: "SaaS, E-com & Startups.",
        description: "Custom architecture for businesses that need to scale.",
        features: [
            "Custom Web App Architecture",
            "User Authentication Flows",
            "Payment Gateway (Razorpay/Stripe)",
            "Admin Dashboard",
            "Scales to 10k+ users"
        ],
        cta: "BOOK STRATEGY",
        highlight: false,
        color: "bg-zinc-50"
    }
];

export default function PricingSection() {
    const { openProjectModal } = useProjectModal();

    return (
        <section id="work" className="bg-[#F4F3EE] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-black">
                    {/* --- Sidebar: The Raw Truth --- */}
                    <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-fit">
                        <h2 className="font-oswald text-6xl uppercase leading-[0.9] font-bold tracking-tighter">
                            Pure<br />Value.<br />No Fluff.
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-[#F35815] pl-6 py-2">
                                <h3 className="font-mono font-bold uppercase tracking-widest text-sm mb-2">The Raw Truth</h3>
                                <p className="font-mono text-base font-bold leading-relaxed">
                                    NO MONTHLY RENT.<br />
                                    You own the code.<br />
                                    I build it, I hand over the keys.<br />
                                    Zero lock-in.
                                </p>
                            </div>
                            <p className="font-sans text-zinc-600 text-sm leading-relaxed">
                                Stick to the budget. Validate the idea first. Scale when the revenue hits. These packages are engineered to get you to "Proof of Concept" fast.
                            </p>
                        </div>
                    </div>

                    {/* --- Pricing Cards Grid --- */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`
                                    relative flex flex-col justify-between
                                    ${tier.color} text-black
                                    border-2 border-black
                                    p-8
                                    transition-all duration-300
                                    hover:border-4 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1
                                `}
                            >
                                {tier.highlight && (
                                    <div className="absolute -top-4 right-4 bg-[#F35815] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        Most Popular
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className="space-y-4 mb-8">
                                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                                        {tier.name}
                                    </h3>
                                    <div className="font-oswald text-5xl font-bold tracking-tight flex items-baseline gap-1">
                                        <span className="text-xl font-sans font-normal text-zinc-500">₹</span>
                                        {tier.price}
                                    </div>
                                    <p className="font-mono text-sm font-bold border-b-2 border-black pb-4">
                                        {tier.target}
                                    </p>
                                    <p className="font-sans text-sm text-zinc-600 leading-snug">
                                        {tier.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <ul className="space-y-4 mb-8 flex-1">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                            <Check className="w-5 h-5 text-[#F35815] shrink-0" strokeWidth={3} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <PricingWhatsAppCTA
                                    tierName={tier.name}
                                    price={tier.price}
                                    ctaText={tier.cta}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
