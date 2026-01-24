"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingSectionProps {
    onOpenBooking: () => void;
    onOpenDemo: (demoId: string, title: string, price: string) => void;
}

// Check icon component for features
const CheckIcon = ({ className = "text-accent" }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

// Eye icon for View Demo buttons
const EyeIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: {
            duration: 0.2,
        },
    },
};

export default function PricingSection({ onOpenBooking, onOpenDemo }: PricingSectionProps) {
    const [activeTab, setActiveTab] = useState<"essentials" | "expansion">("essentials");

    const switchTab = (tab: "essentials" | "expansion") => {
        setActiveTab(tab);
    };

    return (
        <section id="pricing" className="py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">Pricing</span>
                    <h2 className="font-serif text-fluid-display font-bold mt-4 mb-6">Choose Your Growth Path</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">From a simple bio-link to a complete digital ecosystem. Pick the scope that matches your goals.</p>
                </div>

                {/* Tab Switcher - Segmented Control */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1.5 rounded-2xl bg-midnight-800/80 backdrop-blur-sm border border-white/10">
                        <button
                            onClick={() => switchTab("essentials")}
                            className={`tab-btn px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "essentials" ? "active" : ""}`}
                        >
                            Essentials <span className="text-zinc-500 font-normal">(Static)</span>
                        </button>
                        <button
                            onClick={() => switchTab("expansion")}
                            className={`tab-btn px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "expansion" ? "active" : ""}`}
                        >
                            Expansion <span className="text-zinc-500 font-normal">(Dynamic)</span>
                        </button>
                    </div>
                </div>

                {/* Animated Tab Panels */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "essentials" && (
                            <motion.div
                                key="essentials"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {/* Tier 1: The Bio-Link */}
                                <motion.div
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">The Bio-Link</h3>
                                        <p className="text-zinc-400 text-sm">Your Digital Identity.</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">₹249</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Single screen layout</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Links to all your socials</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Resume/PDF download</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">QR Code ready</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenBooking}
                                        className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all"
                                    >
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm">⚡ Delivered in 24 Hours</span>
                                    </button>
                                    <button
                                        onClick={() => onOpenDemo("bio-link", "The Bio-Link", "₹249")}
                                        className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                    >
                                        <EyeIcon />
                                        View Demo
                                    </button>
                                </motion.div>

                                {/* Tier 2: The Landing */}
                                <motion.div
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">The Landing</h3>
                                        <p className="text-zinc-400 text-sm">Convert Visitors.</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">₹999</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Long-scroll one page</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Hero section with CTA</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Services/Features grid</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Contact form integration</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenBooking}
                                        className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all"
                                    >
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm">📦 Delivered in 3-5 Days</span>
                                    </button>
                                    <button
                                        onClick={() => onOpenDemo("landing-page", "The Landing", "₹999")}
                                        className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                    >
                                        <EyeIcon />
                                        View Demo
                                    </button>
                                </motion.div>

                                {/* Tier 3: The Portfolio */}
                                <motion.div
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">The Portfolio</h3>
                                        <p className="text-zinc-400 text-sm">Build Authority.</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">₹1,499</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">3-5 distinct pages</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Home, About, Work sections</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Google Maps integration</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">SEO basics included</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenBooking}
                                        className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all"
                                    >
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm">📦 Delivered in 5-7 Days</span>
                                    </button>
                                    <button
                                        onClick={() => onOpenDemo("portfolio", "The Portfolio", "₹1,499")}
                                        className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                    >
                                        <EyeIcon />
                                        View Demo
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}

                        {activeTab === "expansion" && (
                            <motion.div
                                key="expansion"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {/* Tier 4: The Publisher */}
                                <motion.div
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">The Publisher</h3>
                                        <p className="text-zinc-400 text-sm">Content Engine.</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">₹2,499</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Admin dashboard (CMS)</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Blog/News section</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Newsletter integration</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Content scheduling</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenBooking}
                                        className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all"
                                    >
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm">🚀 Delivered in 1-2 Weeks</span>
                                    </button>
                                    <button
                                        onClick={() => onOpenDemo("publisher", "The Publisher", "₹2,499")}
                                        className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                    >
                                        <EyeIcon />
                                        View Demo
                                    </button>
                                </motion.div>

                                {/* Tier 5: The Storefront */}
                                <motion.div
                                    variants={cardVariants}
                                    className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="mb-6">
                                        <h3 className="font-serif text-2xl font-bold mb-2">The Storefront</h3>
                                        <p className="text-zinc-400 text-sm">Start Selling.</p>
                                    </div>

                                    <div className="mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">₹4,999</div>
                                        <div className="text-zinc-500 text-sm">One-time</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">10 product listings</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Payment gateway (UPI/Card)</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Shopping cart system</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckIcon />
                                            <span className="text-zinc-300 text-sm">Order management</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenBooking}
                                        className="pricing-btn w-full px-6 py-4 bg-midnight-800 hover:bg-accent text-white rounded-xl font-semibold transition-all"
                                    >
                                        <span className="btn-text">Buy Now</span>
                                        <span className="btn-delivery text-sm">🚀 Delivered in 2-3 Weeks</span>
                                    </button>
                                    <button
                                        onClick={() => onOpenDemo("storefront", "The Storefront", "₹4,999")}
                                        className="demo-btn w-full mt-3 px-6 py-3 border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                    >
                                        <EyeIcon />
                                        View Demo
                                    </button>
                                </motion.div>

                                {/* Tier 6: The Ecosystem (Premium GOLD Card) */}
                                <motion.div
                                    variants={cardVariants}
                                    className="relative"
                                >
                                    {/* Premium Badge */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <div className="px-4 py-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-orange-600 rounded-full text-black text-xs font-bold uppercase tracking-wide shadow-lg">
                                            ✨ Complete Solution
                                        </div>
                                    </div>

                                    {/* GOLDEN ECOSYSTEM CARD - Full Gold Background */}
                                    <div className="rounded-3xl p-8 bg-gradient-to-b from-amber-400 via-orange-500 to-orange-600 border-2 border-amber-300 shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] hover:-translate-y-1 transition-all duration-300">
                                        <div className="mb-6">
                                            <h3 className="font-serif text-2xl font-bold mb-2 text-black">The Ecosystem</h3>
                                            <p className="text-black/70 text-sm">Digital Empire.</p>
                                        </div>

                                        <div className="mb-8">
                                            <div className="text-4xl font-bold text-black mb-1">₹9,999</div>
                                            <div className="text-black/60 text-sm">One-time</div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-start gap-3">
                                                <CheckIcon className="text-black" />
                                                <span className="text-black text-sm">Full custom web application</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckIcon className="text-black" />
                                                <span className="text-black text-sm">Free domain (1 year)</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckIcon className="text-black" />
                                                <span className="text-black text-sm">Hosting included (1 year)</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckIcon className="text-black" />
                                                <span className="text-black text-sm">Custom logo design</span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckIcon className="text-black" />
                                                <span className="text-black text-sm">1 month priority support</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={onOpenBooking}
                                            className="pricing-btn w-full px-6 py-4 bg-black text-amber-400 rounded-xl font-bold transition-all hover:bg-black/90 hover:scale-[1.02]"
                                        >
                                            <span className="btn-text">Buy Now</span>
                                            <span className="btn-delivery text-sm font-bold">🏆 Delivered in 3-4 Weeks</span>
                                        </button>
                                        <button
                                            onClick={() => onOpenDemo("ecosystem", "The Ecosystem", "₹9,999")}
                                            className="w-full mt-3 px-6 py-3 bg-black/20 border border-black/30 text-black rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-black/30 transition-all"
                                        >
                                            <EyeIcon />
                                            View Demo
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
