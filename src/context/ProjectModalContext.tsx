"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProjectModalContextType {
    isOpen: boolean;
    openProjectModal: () => void;
    closeProjectModal: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextType | undefined>(undefined);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openProjectModal = () => setIsOpen(true);
    const closeProjectModal = () => setIsOpen(false);

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
