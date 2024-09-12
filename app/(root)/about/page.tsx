/* eslint-disable react/no-unescaped-entities */
import NavBar from '@/components/reusable/NavBar'
import StarRating from '@/components/reusable/StarRating'
import { reviews } from '@/constants'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <main className='w-full min-h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4'>
            <div className='lg:h-screen h-auto lg:w-1/2 w-full   sm:p-4 p-0  '>
                <div className='w-full h-full sm:rounded-[20px] p-4 bg-about-hero bg-center flex flex-col justify-between items-start gap-6'>
                    <NavBar />
                    <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
                        ABOUT
                    </div>
                </div>

            </div>
            <div className='lg:w-1/2 w-full lg:h-screen h-auto'>
                <div className='w-full h-full lg:border-[1px] rounded-lg  relative p-4 flex flex-col gap-6'>
                    <div className='lg:h-[40%] w-full flex gap-4 sm:flex-row flex-col'>
                        <div className='p-4 flex flex-col justify-between items-start gap-4 w-full h-full lg:min-h-0 min-h-[260px] rounded-lg border-[1px] bg-primaryCol border-secondaryCol/50  z-10'>
                            <h1 className='uppercase text-xl'>Sushi Artistry Redefined</h1>
                            <h1 className='text-base'>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly cursted to elevate your dining experience.</h1>
                        </div>
                        <div className='w-full h-full  lg:min-h-0 min-h-[260px] rounded-lg z-0 lg:animate-aboutSlide1'>
                            <Image src="/assets/about/about-1.png" width={1000} height={1000} className='w-full h-full rounded-lg' alt='about' />
                        </div>
                    </div>
                    <div className='lg:h-[20%] lg:py-0 py-4 w-full overflow-y-hidden overflow-x-auto flex justify-start items-center gap-4'>
                        {reviews && reviews.map(reviews => (
                            <div key={reviews.id} className='w-full lg:min-w-0 min-w-[300px]  h-full flex flex-col gap-2 justify-center items-center p-6 rounded-lg border-[1px] bg-primaryCol border-secondaryCol/50'>
                                <StarRating rating={reviews.rating} />
                                <h1 className='uppercase text-lg'>{reviews.name}</h1>
                                {/* <h2 className='text-sm'>{reviews.review}</h2> */}
                            </div>
                        ))}
                    </div>
                    <div className='lg:h-[40%] w-full flex gap-4 sm:flex-row flex-col'>
                        <div className='w-full h-full  lg:min-h-0 min-h-[260px] rounded-lg z-0 lg:animate-aboutSlide2'>
                            <Image src="/assets/about/about-2.png" width={1000} height={1000} className='w-full h-full rounded-lg' alt='about' />
                        </div>
                        <div className='p-4 flex flex-col justify-between items-start gap-4 w-full h-full lg:min-h-0 min-h-[260px] rounded-lg border-[1px] bg-primaryCol border-secondaryCol/50  z-10'>
                            <h1 className='uppercase text-xl'>Our Story</h1>
                            <h1 className='text-base'>Founded with a passion for culinary excellence, Sushiko's jouenry began 5 years ago. Over the years it has been transformed into
                                a haven for sushi enthusiasts celebrated for its artful mastery and devotion to redefine gastronomy.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About