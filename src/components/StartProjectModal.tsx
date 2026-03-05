"use client";

import { submitQuote } from "@/app/actions";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, Check, Loader2, ChevronDown } from "lucide-react";
import { useProjectModal } from "@/context/ProjectModalContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phoneCode: z.string(),
    phone: z.string().min(10, "Phone number required for WhatsApp").max(15, "Invalid phone number").regex(/^\d+$/, "Digits only"),
    businessName: z.string().min(2, "Business/Project name required"),
    industry: z.string().min(2, "Industry/Niche required"),
    stage: z.enum(["idea", "mvp", "growth", "rebrand"]),
    goal: z.string().min(10, "Please describe your primary goal"),
});

type FormData = z.infer<typeof formSchema>;

// --- Terminal Confirmation Screen ---
const STAGE_LABELS: Record<string, string> = {
    idea: "IDEA PHASE",
    mvp: "MVP BUILD",
    growth: "GROWTH SCALING",
    rebrand: "REBRAND / OVERHAUL",
};

function TerminalConfirmation({
    data,
    onClose,
}: {
    data: FormData;
    onClose: () => void;
}) {
    const [decryptState, setDecryptState] = useState<"decrypting" | "decrypted">("decrypting");
    const refNumber = `RG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
    });

    useEffect(() => {
        const timer = setTimeout(() => setDecryptState("decrypted"), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="confirm-page-enter h-full flex flex-col bg-[#0a0a0a] text-white font-mono relative overflow-y-auto -m-8 md:-m-12">
            {/* Scanline overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-50 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                }}
            />

            <div className="max-w-[680px] w-full mx-auto px-6 md:px-12 py-8 flex flex-col gap-0">
                {/* SECTION 1 — Terminal Header Bar */}
                <div className="bg-[#111] border-b border-[#1a1a1a] rounded-t-lg px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[11px] text-[#888] tracking-wider ml-2 hidden sm:inline">
                        RG-STUDIO · SECURE_TRANSMISSION · BRIEF_RECEIVED.LOG
                    </span>
                    <span className="text-[11px] text-[#888] tracking-wider ml-2 sm:hidden">
                        BRIEF_RECEIVED.LOG
                    </span>
                </div>

                <div className="bg-[#0a0a0a] border-x border-[#1a1a1a] px-6 md:px-8 py-8 flex flex-col gap-8">
                    {/* SECTION 2 — Status Indicator */}
                    <div className="flex items-center gap-2 text-xs text-[#25D366]">
                        <span className="confirm-pulse-dot w-2 h-2 rounded-full bg-[#25D366] inline-block" />
                        <span>TRANSMISSION SUCCESSFUL · PACKAGE RECEIVED · </span>
                        <span>
                            {decryptState === "decrypting" ? (
                                <span className="confirm-typewriter">DECRYPTING<span className="confirm-blink-cursor">█</span></span>
                            ) : (
                                <span className="text-[#25D366] font-bold">DECRYPTED ✓</span>
                            )}
                        </span>
                    </div>

                    {/* SECTION 3 — Personalized Greeting */}
                    <div>
                        <h2 className="font-oswald text-3xl md:text-[2.5rem] font-bold uppercase tracking-tighter leading-[1.1]">
                            BRIEF RECEIVED,
                            <br />
                            <span className="text-[#E85D26]">{data.name}.</span>
                        </h2>
                        <div className="mt-3 text-[11px] text-[#666] space-y-1">
                            <p>// TIMESTAMP: {timestamp}</p>
                            <p>// REF: {refNumber}</p>
                        </div>
                    </div>

                    {/* SECTION 4 — Confirmation Message */}
                    <div className="space-y-3">
                        <p className="text-xs text-[#a84420]">$ cat brief_status.txt</p>
                        <div className="pl-4 space-y-1 text-sm text-[#a0a0a0] leading-relaxed">
                            <p>&gt; Your project brief has been transmitted successfully.</p>
                            <p>&gt; I&apos;ve reviewed your intake and will respond within 24 hours.</p>
                            <p>&gt; Expect: initial thoughts, proposed timeline, and next steps</p>
                            <p>&gt; via WhatsApp or email.<span className="confirm-blink-cursor ml-1">█</span></p>
                        </div>
                    </div>

                    {/* SECTION 5 — Brief Summary Card */}
                    <div className="bg-[#0d0d0d] border border-[#1a1a1a] border-l-4 border-l-[#E85D26]">
                        <div className="flex justify-between items-center px-5 py-3 border-b border-[#111]">
                            <span className="text-xs text-[#E85D26] tracking-widest uppercase font-bold">// YOUR BRIEF SUMMARY</span>
                            <span className="text-[10px] text-[#ff4444] tracking-widest uppercase font-bold">[CLASSIFIED]</span>
                        </div>
                        <div className="divide-y divide-[#111]">
                            {[
                                { label: "OPERATOR", value: "Robin Gautam" },
                                { label: "BUSINESS", value: `${data.businessName} (${data.industry})` },
                                { label: "STAGE", value: STAGE_LABELS[data.stage] || data.stage.toUpperCase() },
                                { label: "OBJECTIVE", value: data.goal },
                                { label: "CONTACT", value: `${data.phoneCode} ${data.phone}` },
                            ].map((row) => (
                                <div key={row.label} className="flex gap-4 px-5 py-3">
                                    <span className="text-[11px] text-[#555] tracking-wider uppercase shrink-0 w-20 pt-px">{row.label}</span>
                                    <span className="text-sm text-white font-bold break-words">{row.value}</span>
                                </div>
                            ))}
                            <div className="flex gap-4 px-5 py-3 items-center">
                                <span className="text-[11px] text-[#555] tracking-wider uppercase shrink-0 w-20">STATUS</span>
                                <span className="flex items-center gap-2 text-sm text-[#25D366] font-bold">
                                    <span className="confirm-pulse-dot w-2 h-2 rounded-full bg-[#25D366] inline-block" />
                                    UNDER REVIEW
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 6 — What Happens Next */}
                    <div>
                        <p className="text-xs text-[#E85D26] tracking-widest uppercase font-bold mb-4">// WHAT HAPPENS NEXT</p>
                        <div className="space-y-0">
                            {[
                                "Brief reviewed within 24 hours",
                                "WhatsApp/email response with initial thoughts",
                                "Strategy call scheduled if project is a fit",
                                "Protocol initiated",
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[11px] text-[#E85D26] font-bold">[{String(i + 1).padStart(2, "0")}]</span>
                                        {i < 3 && <div className="w-px h-5 bg-[#1a1a1a] mt-1" />}
                                    </div>
                                    <span className="text-xs text-[#888] pt-px">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION 7 — CTA Button */}
                    <div className="text-center space-y-3 pt-2">
                        <a
                            href="https://wa.me/918292511007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="confirm-glow-btn inline-block bg-[#E85D26] text-black font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 w-full text-center hover:bg-white transition-colors"
                        >
                            [ REACH ME ON WHATSAPP → ]
                        </a>
                        <p className="text-[11px] text-[#555]">
                            Opens WhatsApp · Typical response: under 2 hours
                        </p>
                    </div>

                    {/* Close / Return */}
                    <button
                        onClick={onClose}
                        className="text-xs text-[#555] hover:text-white transition-colors text-center uppercase tracking-widest"
                    >
                        [ CLOSE TRANSMISSION ]
                    </button>
                </div>

                {/* SECTION 8 — Footer */}
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] border-t-0 rounded-b-lg px-6 py-4 text-center">
                    <p className="text-[11px] text-[#333] tracking-wider">
                        ROBIN GAUTAM · RG STUDIO · NEW DELHI, IN ·{" "}
                        <a href="https://robingautam.in" className="text-[#E85D26] hover:text-white transition-colors">
                            robingautam.in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

// --- Main Modal Component ---
export default function StartProjectModal() {
    const { isOpen, closeProjectModal } = useProjectModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneCode: "+91",
            stage: "idea"
        }
    });

    const handleClose = () => {
        closeProjectModal();
        setTimeout(() => {
            setIsSuccess(false);
            setSubmittedData(null);
            reset();
        }, 500);
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("service", `${data.businessName} (${data.industry})`);
        formData.append("budget", data.stage.toUpperCase());
        const detailsBlock = `Phone: ${data.phoneCode} ${data.phone}\n\nObjective: ${data.goal}`;
        formData.append("details", detailsBlock);

        try {
            const result = await submitQuote(formData);

            if (result.success) {
                setIsSubmitting(false);
                setSubmittedData(data);
                setIsSuccess(true);
            } else {
                alert("Submission failed: " + result.message);
                setIsSubmitting(false);
            }
        } catch (e) {
            console.error(e);
            alert("An error occurred. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className={`fixed top-0 right-0 h-full w-full md:w-[600px] z-[70] overflow-y-auto ${isSuccess ? "bg-[#0a0a0a]" : "bg-white border-l-4 border-black shadow-[-12px_0px_0px_0px_rgba(0,0,0,1)]"
                            }`}
                        style={isSuccess ? {} : undefined}
                    >
                        {isSuccess && submittedData ? (
                            <div className="p-8 md:p-12 h-full">
                                <TerminalConfirmation data={submittedData} onClose={handleClose} />
                            </div>
                        ) : (
                            <div className="p-8 md:p-12">
                                <div className="sticky top-0 bg-white z-50 flex justify-between items-center mb-8 border-b-2 border-black pb-6 pt-2">
                                    <h2 className="font-oswald text-4xl font-bold uppercase tracking-tighter text-black">
                                        Project Intake
                                    </h2>
                                    <button
                                        onClick={handleClose}
                                        className="p-2 hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black"
                                    >
                                        <X className="w-8 h-8" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-8">
                                    {/* IDENTITY */}
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                    Identity (Name)
                                                </label>
                                                <input
                                                    {...register("name")}
                                                    className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300 square"
                                                    placeholder="YOUR NAME"
                                                />
                                                {errors.name && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.name.message}</span>}
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                    Work Email
                                                </label>
                                                <input
                                                    {...register("email")}
                                                    className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300 square"
                                                    placeholder="NAME@COMPANY.COM"
                                                />
                                                {errors.email && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.email.message}</span>}
                                            </div>
                                        </div>

                                        {/* CONTACT (PHONE) */}
                                        <div className="space-y-2 group">
                                            <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                Priority Line (WhatsApp)
                                            </label>
                                            <div className="flex gap-4">
                                                <div className="w-[100px] relative">
                                                    <select
                                                        {...register("phoneCode")}
                                                        className="w-full h-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black appearance-none rounded-none"
                                                    >
                                                        <option value="+91">+91</option>
                                                        <option value="+1">+1</option>
                                                        <option value="+44">+44</option>
                                                        <option value="+971">+971</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-black" />
                                                </div>
                                                <input
                                                    {...register("phone")}
                                                    className="flex-1 bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300 square"
                                                    placeholder="98765 43210"
                                                />
                                            </div>
                                            {errors.phone && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.phone.message}</span>}
                                        </div>
                                    </div>

                                    {/* THE TARGET */}
                                    <div className="space-y-6 pt-4 border-t-2 border-zinc-100">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                    Business Name
                                                </label>
                                                <input
                                                    {...register("businessName")}
                                                    className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300 square"
                                                    placeholder="ACME CORP"
                                                />
                                                {errors.businessName && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.businessName.message}</span>}
                                            </div>

                                            <div className="space-y-2 group">
                                                <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                    Industry / Niche
                                                </label>
                                                <input
                                                    {...register("industry")}
                                                    className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300 square"
                                                    placeholder="DENTAL CLINIC"
                                                />
                                                {errors.industry && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.industry.message}</span>}
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                                Current Stage
                                            </label>
                                            <div className="relative">
                                                <select
                                                    {...register("stage")}
                                                    className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors text-black appearance-none rounded-none uppercase cursor-pointer hover:bg-zinc-50"
                                                >
                                                    <option value="idea">Idea Phase (Just a concept)</option>
                                                    <option value="mvp">MVP (Building first version)</option>
                                                    <option value="growth">Growth (Scaling revenue)</option>
                                                    <option value="rebrand">Rebrand (Overhauling existing)</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none text-black" />
                                            </div>
                                            {errors.stage && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.stage.message}</span>}
                                        </div>
                                    </div>

                                    {/* THE OBJECTIVE */}
                                    <div className="space-y-2 group pt-4 border-t-2 border-zinc-100">
                                        <label className="font-oswald uppercase text-xs font-bold tracking-widest text-zinc-500 group-focus-within:text-brand-orange transition-colors">
                                            Primary Objective
                                        </label>
                                        <textarea
                                            {...register("goal")}
                                            rows={4}
                                            className="w-full bg-white border-2 border-black p-4 text-lg font-mono font-bold focus:border-brand-orange outline-none transition-colors resize-none text-black placeholder:text-zinc-300 square"
                                            placeholder="E.g. Get more leads, look more premium, automate sales..."
                                        />
                                        {errors.goal && <span className="text-red-600 text-xs font-bold tracking-wide uppercase">{errors.goal.message}</span>}
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-black text-white font-oswald uppercase font-bold text-2xl tracking-widest py-6 border-2 border-black hover:bg-brand-orange hover:border-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative group overflow-hidden"
                                        >
                                            <span className="relative z-10 flex items-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-6 h-6 animate-spin" />
                                                        Transmitting...
                                                    </>
                                                ) : (
                                                    "TRANSMIT BRIEF"
                                                )}
                                            </span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleClose}
                                            className="w-full bg-transparent text-zinc-500 font-mono text-sm uppercase py-4 hover:text-black transition-colors"
                                        >
                                            [ CANCEL / CLOSE ]
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
