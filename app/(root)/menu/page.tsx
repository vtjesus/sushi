/* eslint-disable @next/next/no-img-element */
"use client";

import Loader from '@/components/reusable/Loader';
import NavBar from '@/components/reusable/NavBar'
// import { menu } from '@/constants'
import { getMenuData } from '@/lib/actions/menu';
import { menuItemProps } from '@/types';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Menu = () => {
    const [menu, setMenu] = useState<menuItemProps[]>([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const getMenu = async () => {
            const menuData: any = await getMenuData();
            if (menuData) {
                setLoader(false);
            }
            setMenu(menuData);
        }
        getMenu();
    }, [])
    return (
        <>
            {
                loader ?

                    <Loader /> :
                    <main className=' w-full min-h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4'>
                        <div className='lg:h-screen h-auto lg:w-1/2 w-full   sm:p-4 p-0  '>
                            <div className='w-full h-full sm:rounded-[20px] p-4 bg-menu-hero bg-center flex flex-col justify-between items-start gap-6'>
                                <NavBar />
                                <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
                                    MENU
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2 w-full h-screen p-4'>
                            <div className='w-full h-full border-[1px] rounded-lg border-secondaryCol/50 relative p-4 pt-20'>
                                <div className='w-[96%] h-auto px-4 py-2 flex justify-center items-center gap-4 absolute top-8 '>
                                    <a href='#maki' className="font-sans text-xs px-2 py-1 font-light cursor-pointer border-[0.5px] border-secondaryCol/50 rounded-sm ">MAKI</a>
                                    <a href='#uramaki' className="font-sans text-xs px-2 py-1 font-light cursor-pointer border-[0.5px] border-secondaryCol/50 rounded-sm ">URAMAKI</a>
                                    <a href="#special-rolls" className="font-sans text-xs px-2 py-1 font-light cursor-pointer border-[0.5px] border-secondaryCol/50 rounded-sm ">SPECIAL ROLLS</a>
                                </div>
                                <div className='h-full overflow-auto px-4 pt-10 scroll-smooth'>
                                    <section id='maki' className='mb-12 w-full h-auto'>
                                        {menu.filter(menu => menu.type === "MAKI").length > 0 && <div className='w-full flex justify-center gap-4 items-center mb-6'>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                                            <h1 className='text-4xl animate-menuNameAnim'>MAKI</h1>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                                        </div>}
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            {menu.filter(menu => menu.type === "MAKI")?.map(menu => (
                                                <div key={menu.name} className='w-full flex md:flex-row flex-col justify-start md:items-start items-center h-auto my-4 px-2 gap-4'>
                                                    <img src={menu?.image} className='w-[150px] h=[100px] rounded-md' alt='dish' />
                                                    <div className='w-full'>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <h2 className='text-2xl'>{menu.name}</h2>
                                                            <p>₹{menu.price}</p>
                                                        </div>
                                                        <p className='font-sans font-light text-sm w-[90%] mt-4'>{menu.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                    <section id='uramaki' className='my-12 w-full h-auto'>
                                        {menu.filter(menu => menu.type === "URAMAKI").length > 0 && <div className='w-full flex justify-center gap-4 items-center mb-6'>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                                            <h1 className='text-4xl'>URAMAKI</h1>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                                        </div>}
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            {menu.filter(menu => menu.type === "URAMAKI")?.map(menu => (
                                                <div key={menu.name} className='w-full flex md:flex-row flex-col justify-start md:items-start items-center h-auto my-4 px-2 gap-4'>
                                                    <img src={menu?.image} className='w-[150px] h=[100px] rounded-md' alt='dish' />
                                                    <div className='w-full'>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <h2 className='text-2xl'>{menu.name}</h2>
                                                            <p>₹{menu.price}</p>
                                                        </div>
                                                        <p className='font-sans font-light text-sm w-[90%] mt-4'>{menu.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                    <section id='special-rolls' className='my-12 w-full h-auto'>
                                        {menu.filter(menu => menu.type === "SPECIAL ROLLS").length > 0 && <div className='w-full flex justify-center gap-4 items-center mb-6'>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                                            <h1 className='text-4xl'>SPECIAL ROLLS</h1>
                                            <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                                        </div>}
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            {menu.filter(menu => menu.type === "SPECIAL ROLLS")?.map(menu => (
                                                <div key={menu.name} className='w-full flex md:flex-row flex-col justify-start md:items-start items-center h-auto my-4 px-2 gap-4'>
                                                    <img src={menu?.image} className='w-[150px] h=[100px] rounded-md' alt='dish' />
                                                    <div className='w-full'>
                                                        <div className='w-full flex justify-between items-center'>
                                                            <h2 className='text-2xl'>{menu.name}</h2>
                                                            <p>₹{menu.price}</p>
                                                        </div>
                                                        <p className='font-sans font-light text-sm w-[90%] mt-4'>{menu.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </main>
            }
        </>
    )
}

export default Menu