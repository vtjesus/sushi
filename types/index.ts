import { ReactNode } from "react";

export interface menuCardProps {
    className?: string;
    buttonText?: string;
    navigate?: string
}

export interface MusicContextProps {
    isMuted: boolean;
    toggleMute: () => void;
}

export interface MusicProviderProps {
    children: ReactNode;
}

export interface menuItemProps {
    name?: string;
    description?: string;
    image?: string;
    price?: string;
    type?: string;
}

export interface blogProps {
    title?: string;
    description?: string;
    image?: string;
    date?: any;
    content?: string;
    $id?: any;
}