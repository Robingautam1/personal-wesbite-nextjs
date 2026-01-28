import Link from 'next/link';
import { useProjectModal } from '@/context/ProjectModalContext';

interface NavbarProps {
    onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
    const { openProjectModal } = useProjectModal();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                            <span className="text-white font-bold text-lg">R</span>
                        </div>
                        <span className="font-semibold text-lg hidden sm:block">Robin Gautam</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/process" className="text-sm text-zinc-400 hover:text-white transition-colors">Process</Link>
                        <Link href="/portfolio" className="text-sm text-zinc-400 hover:text-white transition-colors">Work</Link>
                        <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={openProjectModal}
                            className="cta-premium px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
                            </svg>
                            <span className="hidden sm:inline">START PROJECT</span>
                            <span className="sm:hidden">START</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
