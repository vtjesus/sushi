/* eslint-disable react/no-unescaped-entities */
import GoogleMapEmbed from '@/components/reusable/GoogleMap'
import NavBar from '@/components/reusable/NavBar'
import StarRating from '@/components/reusable/StarRating'
import { openingHours, restaurantDetails, reviews, roboUrl } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {

    return (
        <main className='w-full min-h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4'>
            <div className='lg:h-screen h-auto lg:w-1/2 w-full   sm:p-4 p-0  '>
                <div className='w-full h-full sm:rounded-[20px] p-4 bg-contact-hero bg-bottom flex flex-col justify-between items-start gap-6'>
                    <NavBar />
                    <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
                        CONTACT
                    </div>
                </div>

            </div>
            <div className='lg:w-1/2 w-full lg:h-screen h-auto'>
                <div className='w-full h-full  rounded-lg  relative p-4 flex flex-col gap-6'>
                    <div className='lg:h-[50%] w-full flex gap-4 sm:flex-row flex-col'>
                        <div className='p-4 flex flex-col justify-between items-center pt-8 gap-4 w-full h-full lg:min-h-0 min-h-[260px] rounded-lg border-[1px] bg-primaryCol border-secondaryCol/50  z-10'>
                            <h1 className='text-xl'>
                                OPENING HOURS
                            </h1>
                            <div className='gap-2 flex flex-col w-full'>
                                {openingHours.map(item => (
                                    <div className='w-full flex justify-between items-center gap-8' key={item.day}>
                                        <div>{item.day}</div>
                                        <div>{item.timing}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full h-full grid grid-cols-2 gap-2  lg:min-h-0 min-h-[260px] rounded-lg z-0 lg:animate-aboutSlide1'>
                            <Image src="/assets/about/bg-about.png" width={1000} height={1000} className='w-full aspect-square rounded-lg' alt='about' />
                            <Image src="/assets/about/about-1.png" width={1000} height={1000} className='w-full aspect-square rounded-lg' alt='about' />
                            <Image src="/assets/landing-page/landing-hero.png" width={1000} height={1000} className='w-full aspect-square rounded-lg' alt='about' />
                            <Image src="/assets/menu/menu-hero.png" width={1000} height={1000} className='w-full aspect-square rounded-lg' alt='about' />
                        </div>
                    </div>
                    <div className='lg:h-[50%] w-full flex gap-4 sm:flex-row flex-col'>
                        <div className='w-full h-full relative  lg:min-h-0 min-h-[360px] rounded-lg z-0 lg:animate-aboutSlide2'>
                            <Link href={roboUrl} target='_blank' className='z-50 absolute bottom-0 right-0 w-auto h-auto pr-2 pl-4 py-2 bg-primaryCol menu-custom-rounded flex justify-end items-center gap-2 '>
                                <h2 className='group-hover:opacity-70 group-hover:scale-[1.05]'>SHOW ROUTE</h2>
                                <Image src='/assets/landing-page/arrow.png' alt='Menu Icon' width={24} height={24} />
                            </Link>
                            <div style={{ width: "100%", height: "100%" }} className='rounded-lg lg:min-h-0 min-h-[360px]'>
                                <iframe className='map-css' style={{ borderRadius: "8px" }} width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Robosoft%20Technologies+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    {/* <a href="https://www.gps.ie/">gps systems</a> */}
                                </iframe>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col justify-between items-center gap-4 pt-8 w-full h-full lg:min-h-0 min-h-[260px] rounded-lg border-[1px] bg-primaryCol border-secondaryCol/50  z-10'>
                            <h1 className='text-xl'>
                                GET IN TOUCH
                            </h1>
                            <div className='gap-2 flex flex-col w-full'>
                                {restaurantDetails.map(item => (
                                    <a href={
                                        item.key === "Email"
                                            ? `mailto:${item.value}`
                                            : item.key === "Mobile Number"
                                                ? `tel:${item.value}`
                                                : undefined
                                    } className='w-full flex justify-between gap-24 items-start' key={item.key}>
                                        <div>{item.key}</div>
                                        <div className='text-right'>{item.value}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact