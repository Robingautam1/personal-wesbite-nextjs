"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import ProjectFormModal from "./ProjectFormModal";

export default function PricingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState("Business");

    const openBooking = (tier: string) => {
        setSelectedTier(tier);
        setIsModalOpen(true);
    };

    const openCalendly = () => {
        // @ts-ignore
        if (window.Calendly) {
            // @ts-ignore
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/gautam-robin333/30min'
            });
            return false;
        }
        window.open('https://calendly.com/gautam-robin333/30min', '_blank');
    };

    return (
        <section className="bg-dirty-cream text-brand-black border-b-2 border-brand-black">
            <div className="max-w-[1400px] mx-auto min-h-[800px] flex flex-col md:flex-row">

                {/* --- TIER 1: LAUNCHPAD --- */}
                <div className="flex-1 border-r-2 border-brand-black p-8 md:p-12 flex flex-col justify-between relative group hover:bg-white hover:text-black transition-colors duration-500">
                    <div>
                        <div className="border-2 border-brand-black px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-8">
                            For Students
                        </div>
                        <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4">
                            The <br /> Launchpad
                        </h3>
                        <div className="text-4xl md:text-5xl font-bold font-oswald mb-8">
                            ₹8k
                        </div>
                        <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                            Perfect for personal portfolios, landing pages, and side projects. Minimalist, fast, and SEO-ready.
                        </p>
                        <ul className="space-y-4 font-bold text-sm uppercase tracking-wide">
                            {["Single Page Site", "Mobile Responsive", "Contact Form", "Basic SEO", "2 Days Delivery"].map((item) => (
                                <li key={item} className="flex items-center gap-3 group-hover:text-black">
                                    <Check className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => openBooking("Launchpad")}
                        className="w-full border-2 border-brand-black py-4 font-bold font-oswald uppercase tracking-widest hover:bg-brand-black hover:text-white hover:border-brand-black transition-colors mt-12 relative z-20"
                    >
                        Secure Priority Slot
                    </button>
                </div>

                {/* --- TIER 2: BUSINESS (HIGHLIGHT) --- */}
                <div className="flex-1 bg-agency-orange text-white border-r-2 border-brand-black p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-mono text-xs font-bold uppercase z-10">
                        Most Popular
                    </div>

                    {/* Industrial Stamp */}
                    <div className="absolute -right-8 top-32 text-black/10 font-oswald font-bold text-9xl rotate-90 pointer-events-none select-none whitespace-nowrap">
                        JAN BATCH
                    </div>

                    <div className="relative z-10">
                        <div className="border-2 border-white px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-8 text-black bg-white">
                            For Agencies
                        </div>
                        <h3 className="font-oswald text-5xl md:text-6xl font-bold uppercase mb-4 leading-none">
                            The <br /> Business
                        </h3>
                        <div className="text-5xl md:text-6xl font-bold font-oswald mb-8">
                            ₹15k
                        </div>
                        <p className="text-white/90 font-medium leading-relaxed mb-8 text-lg">
                            The complete package. Multi-page website with CMS, analytics, and speed optimization. Built to convert.
                        </p>
                        <ul className="space-y-4 font-bold text-sm uppercase tracking-wide">
                            {["5 Page Website", "CMS Integration", "Google Analytics", "Speed Optimization", "1 Week Delivery", "WhatsApp Support"].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-black" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        onClick={() => openBooking("Business")}
                        className="w-full bg-black text-white py-5 font-bold font-oswald uppercase tracking-widest hover:bg-white hover:text-black hover:translate-x-1 hover:-translate-y-1 transition-all border-2 border-black mt-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                    >
                        Start Project
                    </button>
                </div>

                {/* --- TIER 3: SCALE UP --- */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative group hover:bg-white hover:text-black transition-colors duration-500">
                    <div>
                        <div className="border-2 border-brand-black px-3 py-1 inline-block text-xs font-bold uppercase tracking-widest mb-8">
                            For Startups
                        </div>
                        <h3 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4">
                            The <br /> Scale-Up
                        </h3>
                        <div className="text-4xl md:text-5xl font-bold font-oswald mb-8">
                            ₹25k+
                        </div>
                        <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                            Full-stack web applications. Database, Authentication, Payments, and custom Admin Dashboards.
                        </p>
                        <ul className="space-y-4 font-bold text-sm uppercase tracking-wide">
                            {["Full Web App", "Database & Auth", "Payment Gateway", "Custom Dashboard", "Priority Support", "Scalable Arch"].map((item) => (
                                <li key={item} className="flex items-center gap-3 group-hover:text-black">
                                    <Check className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Inverted Bottom Block */}
                    <div className="bg-brand-black text-white p-6 -mx-8 -mb-12 md:-mb-12 mt-12 pb-12">
                        <p className="font-mono text-xs text-zinc-500 mb-4 uppercase">Raw Truth:</p>
                        <p className="text-sm font-medium leading-relaxed">
                            "No recurring fees. You own the code. I build it, deploy it, and hand over the keys."
                        </p>
                        <button
                            onClick={openCalendly}
                            className="w-full border border-zinc-700 hover:border-white text-zinc-300 hover:text-white py-3 font-bold font-oswald uppercase tracking-widest transition-colors mt-6 text-sm"
                        >
                            Book Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <ProjectFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultTier={selectedTier}
            />
        </section>
    );
}
