"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// Dynamic imports for heavy modals - prevents mobile memory issues
const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
  loading: () => null,
});

const DemoModal = dynamic(() => import("@/components/DemoModal"), {
  ssr: false,
  loading: () => null,
});

// Demo modal state hook - imported separately since it's just a hook
import { useDemoModal } from "@/components/DemoModal";

export default function Home() {
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Demo modal state (using custom hook)
  const demoModal = useDemoModal();

  // Handlers
  const openBooking = useCallback(() => {
    setIsBookingOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navbar onOpenBooking={openBooking} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={openBooking} />

        {/* Trust Factors */}
        <TrustSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Work Section */}
        <WorkSection />

        {/* Pricing Section */}
        <PricingSection
          onOpenDemo={demoModal.openDemo}
          onOpenBooking={openBooking}
        />

        {/* CTA Section */}
        <CTASection onOpenBooking={openBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals - Dynamically loaded to prevent mobile memory issues */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* Demo Modal - Loads demo HTML via iframe */}
      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={demoModal.closeDemo}
        demoId={demoModal.demoId}
        title={demoModal.title}
        price={demoModal.price}
      />
    </>
  );
}
