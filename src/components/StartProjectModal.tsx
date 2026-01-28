"use client";

import { submitQuote } from "@/app/actions";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { X, Check, Loader2 } from "lucide-react";
import { useProjectModal } from "@/context/ProjectModalContext";

type FormData = {
    name: string;
    email: string;
    serviceType: string;
    budget: string;
    description: string;
};

export default function StartProjectModal() {
    const { isOpen, closeProjectModal } = useProjectModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Convert React Hook Form data to native FormData for Server Action
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("service", data.serviceType); // Note: actions.ts expects 'service'
        formData.append("budget", data.budget);
        formData.append("details", data.description); // Note: actions.ts expects 'details'

        try {
            const result = await submitQuote(formData);

            if (result.success) {
                console.log("Success:", result.message);
                setIsSubmitting(false);
                setIsSuccess(true);

                // Reset after showing success message
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
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white border-l-2 border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] z-[70] p-8 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="font-oswald text-3xl font-bold uppercase tracking-tighter text-black">
                                Initiate Protocol
                            </h2>
                            <button
                                onClick={closeProjectModal}
                                className="p-2 hover:bg-black hover:text-white transition-colors border border-transparent hover:border-black rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Check className="w-12 h-12 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-oswald text-3xl font-bold uppercase mb-2 text-black">Brief Received.</h3>
                                    <p className="font-mono text-zinc-600">I WILL DEPLOY A REPLY WITHIN 24 HOURS.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="space-y-2">
                                    <label className="font-oswald uppercase text-sm tracking-wider text-black">Name / Organization</label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-lg font-mono focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300"
                                        placeholder="Enter designation..."
                                    />
                                    {errors.name && <span className="text-red-500 text-xs font-mono">Required field.</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="font-oswald uppercase text-sm tracking-wider text-black">Comms Channel (Email)</label>
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-lg font-mono focus:border-brand-orange outline-none transition-colors text-black placeholder:text-zinc-300"
                                        placeholder="contact@domain.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs font-mono">Invalid email format.</span>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="font-oswald uppercase text-sm tracking-wider text-black">Service Type</label>
                                        <select
                                            {...register("serviceType", { required: true })}
                                            className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-lg font-mono focus:border-brand-orange outline-none transition-colors text-black"
                                        >
                                            <option value="">Select Protocol...</option>
                                            <option value="mvp">Rapid MVP</option>
                                            <option value="website">Agency Website</option>
                                            <option value="system">Design System</option>
                                            <option value="consulting">Technical Strategy</option>
                                        </select>
                                        {errors.serviceType && <span className="text-red-500 text-xs font-mono">Selection required.</span>}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-oswald uppercase text-sm tracking-wider text-black">Budget Capacity</label>
                                        <select
                                            {...register("budget", { required: true })}
                                            className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-lg font-mono focus:border-brand-orange outline-none transition-colors text-black"
                                        >
                                            <option value="">Select Range...</option>
                                            <option value="5k-10k">$5k - $10k</option>
                                            <option value="10k-25k">$10k - $25k</option>
                                            <option value="25k+">$25k+</option>
                                        </select>
                                        {errors.budget && <span className="text-red-500 text-xs font-mono">Selection required.</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-oswald uppercase text-sm tracking-wider text-black">Mission Brief</label>
                                    <textarea
                                        {...register("description", { required: true })}
                                        rows={4}
                                        className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-lg font-mono focus:border-brand-orange outline-none transition-colors resize-none text-black placeholder:text-zinc-300"
                                        placeholder="Describe the objective..."
                                    />
                                    {errors.description && <span className="text-red-500 text-xs font-mono">Briefing required.</span>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white font-oswald uppercase font-bold text-xl py-5 border-2 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            Authorizing...
                                        </>
                                    ) : (
                                        "INITIALIZE PROJECT"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
