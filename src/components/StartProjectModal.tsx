"use client";

import { submitQuote } from "@/app/actions";
import { useState } from "react";
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

export default function StartProjectModal() {
    const { isOpen, closeProjectModal } = useProjectModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Map new fields to existing Server Action / DB Schema
        // DB: name, email, service, budget, details
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);

        // MAPPING: Store Business Name & Industry in 'service' column
        formData.append("service", `${data.businessName} (${data.industry})`);

        // MAPPING: Store Stage in 'budget' column
        formData.append("budget", data.stage.toUpperCase());

        // MAPPING: Store Phone & Goal in 'details' column
        const detailsBlock = `Phone: ${data.phoneCode} ${data.phone}\n\nObjective: ${data.goal}`;
        formData.append("details", detailsBlock);

        try {
            const result = await submitQuote(formData);

            if (result.success) {
                console.log("Success:", result.message);
                setIsSubmitting(false);
                setIsSuccess(true);

                setTimeout(() => {
                    closeProjectModal();
                    setTimeout(() => {
                        setIsSuccess(false);
                        reset();
                    }, 500);
                }, 3000);
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
                        onClick={closeProjectModal}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white border-l-4 border-black shadow-[-12px_0px_0px_0px_rgba(0,0,0,1)] z-[70] p-8 md:p-12 overflow-y-auto"
                    >
                        <div className="sticky top-0 bg-white z-50 flex justify-between items-center mb-8 border-b-2 border-black pb-6 pt-2">
                            <h2 className="font-oswald text-4xl font-bold uppercase tracking-tighter text-black">
                                Project Intake
                            </h2>
                            <button
                                onClick={closeProjectModal}
                                className="p-2 hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[60vh] flex flex-col items-center justify-center text-center space-y-8"
                            >
                                <div className="w-32 h-32 bg-brand-orange text-white flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                    <Check className="w-16 h-16" />
                                </div>
                                <div>
                                    <h3 className="font-oswald text-4xl font-bold uppercase mb-4 text-black">Brief Transmitted.</h3>
                                    <p className="font-mono text-lg text-zinc-600 font-bold">DEPLOYING RESPONSE PROTOCOL (24H).</p>
                                </div>
                                <button
                                    onClick={closeProjectModal}
                                    className="mt-8 font-mono text-sm underline text-zinc-500 hover:text-black"
                                >
                                    [ CLOSE WINDOW ]
                                </button>
                            </motion.div>
                        ) : (
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
                                        onClick={closeProjectModal}
                                        className="w-full bg-transparent text-zinc-500 font-mono text-sm uppercase py-4 hover:text-black transition-colors"
                                    >
                                        [ CANCEL / CLOSE ]
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
