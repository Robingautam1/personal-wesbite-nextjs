"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ProjectModalContextType {
    isOpen: boolean;
    openProjectModal: () => void;
    closeProjectModal: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    // Sync with browser history for back button support
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            // Only close if we are currently open. 
            // The browser has already popped the state, so we just update UI.
            setIsOpen(false);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const openProjectModal = () => {
        // Push state so back button works. prevent scrolling
        document.body.style.overflow = 'hidden';
        window.history.pushState({ modal: 'project' }, '', window.location.pathname);
        setIsOpen(true);
    };

    const closeProjectModal = () => {
        document.body.style.overflow = 'unset';
        // If we opened via pushState, we should close via back() to keep history clean.
        if (window.history.state?.modal === 'project') {
            window.history.back();
        } else {
            // Fallback for direct handling or if history is somehow lost
            setIsOpen(false);
        }
    };

    return (
        <ProjectModalContext.Provider value={{ isOpen, openProjectModal, closeProjectModal }}>
            {children}
        </ProjectModalContext.Provider>
    );
}

export function useProjectModal() {
    const context = useContext(ProjectModalContext);
    if (context === undefined) {
        throw new Error("useProjectModal must be used within a ProjectModalProvider");
    }
    return context;
}
