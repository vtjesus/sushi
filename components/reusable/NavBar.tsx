"use client";
import React from 'react'
import { MenuIcon, Volume2, VolumeX } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useRouter } from 'next/navigation';
import { useMusic } from '@/context/MusicContext';
const NavBar = () => {
    const router = useRouter();

    const navigateFn = (link: string) => {
        router.push(link);
    }
    const { isMuted, toggleMute } = useMusic();
    return (
        <div className="sm:w-auto w-full  px-4 py-2 bg-primaryCol rounded flex sm:justify-center justify-between items-center gap-2">

            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="font-extralight p-1 border-[1px] rounded" />
                </SheetTrigger>
                <SheetContent side="left" className="bg-primaryCol p-8 w-3/4 border-2 border-l-0 border-secondaryCol rounded-r-lg outline-none">
                    <SheetDescription className="h-full m-auto w-auto flex flex-col justify-center items-center text-secondaryCol gap-4">
                        <p className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/menu') }}>MENU</p>
                        <p className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/reservation') }}>RESERVATIONS</p>
                        <p className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/about') }}>ABOUT</p>
                        <p className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/contact') }}>CONTACT</p>
                        <p className="text-4xl md:text-7xl cursor-pointer  delay-100 transition hover:opacity-75 hover:scale-[1.05]" onClick={() => { navigateFn('/blog') }}>BLOG</p>

                        <button onClick={toggleMute}>
                            {!isMuted ?
                                <>
                                    <span className='flex items-center gap-2 text-sm'><p>Mute</p> <VolumeX className='w-4' /></span>
                                </> : <>
                                    <span className='flex items-center gap-2 text-sm'><p>Unmute</p> <Volume2 className='w-4' /></span></>
                            }
                        </button>
                    </SheetDescription>
                </SheetContent>
            </Sheet>
            <div className="text-2xl cursor-pointer" onClick={() => { navigateFn('/') }}>SUSHIKO</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer" onClick={() => { navigateFn('/menu') }}>MENU</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer" onClick={() => { navigateFn('/about') }}>ABOUT</div>
            <div className="font-sans text-xs px-2 py-1 font-light cursor-pointer border-[1px] rounded-sm hidden sm:block" onClick={() => { navigateFn('/reservation') }}>BOOK A TABLE</div>
        </div>
    )
}

export default NavBar