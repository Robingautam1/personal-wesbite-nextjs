"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, MessageCircle, ExternalLink, Zap, Globe, Package, Check } from "lucide-react";
import Link from "next/link";
import { Drawer } from "vaul";
import { useState } from "react";

// --- Sub-Components ---

export const BottomDock = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full border border-black/10 bg-black/5 backdrop-blur-xl shadow-lg"
        >
            <Link href="/" className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform">
                <Home className="w-5 h-5 text-brand-black" />
            </Link>
            <Link href="/work" className="p-3 bg-white/50 hover:bg-white rounded-full transition-colors">
                <Briefcase className="w-5 h-5 text-brand-black" />
            </Link>
            <a href="https://wa.me/919643566114?text=Hey%20Robin,%20I%20have%20an%20idea%20for%20a%20project." target="_blank" className="p-3 bg-brand-orange text-white rounded-full shadow-md hover:brightness-110 transition-all">
                <MessageCircle className="w-5 h-5" />
            </a>
        </motion.div>
    );
};

export const MobileHero = () => {
    return (
        <section className="h-[95vh] relative flex flex-col justify-between p-6 overflow-hidden">
            {/* Watermark */}
            <h1 className="absolute top-10 -right-20 text-[6rem] font-bold text-black/5 leading-none rotate-90 origin-top-right whitespace-nowrap">
                ROBIN GAUTAM
            </h1>

            <div className="mt-20 z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-6xl font-black text-brand-black leading-[0.9] tracking-tighter mb-6">
                        I TURN <br />
                        IDEAS <br />
                        INTO <br />
                        <span className="text-brand-orange">ASSETS.</span>
                    </h2>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full z-10 mb-20"
            >
                <a
                    href="mailto:hello@robingautam.in"
                    className="flex w-full items-center justify-center gap-2 bg-brand-orange text-white py-4 rounded-xl font-bold uppercase tracking-widest text-lg shadow-lg"
                >
                    Start Project <ExternalLink className="w-5 h-5" />
                </a>
            </motion.div>
        </section>
    );
};

export const ServicesCarousel = () => {
    const services = [
        {
            title: "The Launchpad",
            desc: "MVP Development. From idea to functional product in weeks.",
            icon: Zap,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "The Business",
            desc: "Full Stack Scale. Database, Auth, Payments, and Admin Panels.",
            icon: Globe,
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            title: "Scale Up",
            desc: "High Performance. Optimization, Refactoring, and Enterprise Grade Security.",
            icon: Package,
            color: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <div className="py-12">
            <h3 className="px-6 text-2xl font-bold text-brand-black mb-6 uppercase tracking-tight">Services</h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-4 scrollbar-hide">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        whileTap={{ scale: 0.98 }}
                        className="snap-center shrink-0 w-[85%] bg-white rounded-2xl p-6 shadow-sm border border-black/5"
                    >
                        <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                            <service.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-brand-black mb-2">{service.title}</h4>
                        <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export const PricingSheet = () => {
    const tiers = [
        { name: "MVP", price: "$2,999", features: ["2 Weeks Delivery", "Next.js & Supabase", "Basic Design System", "Deployment"] },
        { name: "PRO", price: "$5,999", features: ["4 Weeks Delivery", "Advanced Auth & Payments", "Custom Admin Panel", "SEO Optimization"] }
    ];

    return (
        <div className="py-12 px-6">
            <h3 className="text-2xl font-bold text-brand-black mb-6 uppercase tracking-tight">Pricing</h3>
            <div className="flex flex-col gap-4">
                {tiers.map((tier, i) => (
                    <Drawer.Root key={i}>
                        <Drawer.Trigger asChild>
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-left flex justify-between items-center group"
                            >
                                <div>
                                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">{tier.name}</span>
                                    <span className="text-2xl font-black text-brand-black">{tier.price}</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </div>
                            </motion.button>
                        </Drawer.Trigger>
                        <Drawer.Portal>
                            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                            <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-50">
                                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                                    <div className="max-w-md mx-auto">
                                        <Drawer.Title className="font-bold text-3xl mb-2">{tier.name} Package</Drawer.Title>
                                        <div className="text-4xl font-black text-brand-orange mb-8">{tier.price}</div>

                                        <div className="space-y-4 mb-8">
                                            {tier.features.map((feature, f) => (
                                                <div key={f} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-zinc-600 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-lg hover:bg-brand-orange transition-colors">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </Drawer.Content>
                        </Drawer.Portal>
                    </Drawer.Root>
                ))}
            </div>
        </div>
    );
};

export default function MobileAppExperience() {
    return (
        <div className="bg-[#F4F3EE] min-h-screen text-[#121212] pb-24 font-sans">
            <MobileHero />

            {/* Infinite Marquee */}
            <div className="bg-brand-black py-4 overflow-hidden border-y border-black/5">
                <motion.div
                    className="flex whitespace-nowrap gap-8"
                    animate={{ x: [0, -500] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-white font-mono text-sm uppercase tracking-widest">
                            Strategy • Code • ROI •
                        </span>
                    ))}
                </motion.div>
            </div>

            <ServicesCarousel />
            <PricingSheet />
            <BottomDock />
        </div>
    );
}
