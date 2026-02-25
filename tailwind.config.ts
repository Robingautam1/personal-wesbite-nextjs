import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
            colors: {
                'dirty-cream': '#F4F3EE',
                'agency-orange': '#F35815',
                midnight: {
                    950: '#050505',
                    900: '#0a0a0a',
                    800: '#121212',
                    700: '#1a1a1a',
                    600: '#262626',
                },
                brand: {
                    black: '#0D0D0D', // Rich Black
                    white: '#F5F5F3', // Off-white
                    orange: '#FF4D00', // Safety Orange
                },
                accent: {
                    DEFAULT: '#3b82f6',
                    light: '#60a5fa',
                    dark: '#2563eb',
                },
            },
            fontSize: {
                'fluid-hero': 'clamp(2.5rem, 6vw, 4.5rem)',
                'fluid-display': 'clamp(2rem, 4vw, 3rem)',
            },
            animation: {
                'gradient-border': 'gradient-border 3s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                'gradient-border': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
                },
                'slide-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
