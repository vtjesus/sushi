import NavBar from '@/components/reusable/NavBar'
import Image from 'next/image'
import React from 'react'

const Reservation = () => {
    return (
        <main className='w-full min-h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4'>
            <div className='lg:h-screen h-auto lg:w-1/2 w-full   sm:p-4 p-0  '>
                <div className='w-full h-full sm:rounded-[20px] p-4 bg-reservation-hero bg-center flex flex-col justify-between items-start gap-6'>
                    <NavBar />
                    <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
                        <div>BOOK</div>
                        <div>A TABLE</div>
                    </div>
                </div>

            </div>
            <div className='lg:w-1/2 w-full h-screen p-4'>
                <div className='w-full h-full lg:border-[1px] rounded-lg border-secondaryCol/50 relative p-4 lg:pt-20'>
                    <div className='w-full flex justify-center gap-4 items-center mb-6'>
                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                        <h1 className='text-3xl sm:text-4xl'>RESERVATION</h1>
                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Reservation