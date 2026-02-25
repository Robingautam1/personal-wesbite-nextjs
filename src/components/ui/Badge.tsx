import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "secondary"
}

// Simple Badge implementation since we don't have the full shadcn/ui library installed yet
// styled to match the "Void Black" aesthetic
function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variant === "default" && "border-transparent bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
                variant === "secondary" && "border-transparent bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
                variant === "outline" && "text-zinc-400 border-zinc-800",
                className
            )}
            {...props}
        />
    )
}

export default Badge;
