interface CTASectionProps {
    onOpenBooking: () => void;
}

export default function CTASection({ onOpenBooking }: CTASectionProps) {
    return (
        <section className="py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-fluid-display font-bold mb-6">Ready to build something great?</h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">Let&apos;s discuss your project and see how we can help transform your vision into reality.</p>
                <button
                    onClick={onOpenBooking}
                    className="cta-premium px-10 py-5 bg-accent text-white font-semibold rounded-2xl transition-all hover:scale-105 text-lg inline-flex items-center gap-3"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L18 7L14.74 10.91L18 17L13.09 14.26L12 22L10.91 14.26L6 17L9.26 10.91L6 7L10.91 8.26L12 2Z" />
                    </svg>
                    Book a Strategy Session
                </button>
            </div>
        </section>
    );
}
