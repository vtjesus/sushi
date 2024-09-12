"use client";
import { MusicContextProps, MusicProviderProps } from '@/types';
import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';



const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
            isMuted ? audioRef.current.pause() : audioRef.current.play();
        }
    }, [isMuted]);

    return (
        <MusicContext.Provider value={{ isMuted, toggleMute }}>
            <audio ref={audioRef} loop>
                <source src="/japanese-music.mp3" type="audio/mpeg" />
            </audio>
            {children}
        </MusicContext.Provider>
    );
};

export const useMusic = () => {
    const context = useContext(MusicContext);
    if (context === undefined) {
        throw new Error('useMusic must be used within a MusicProvider');
    }
    return context;
};
