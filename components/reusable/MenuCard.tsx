"use client"
import { menuCardProps } from '@/types'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const MenuCard = ({ className, buttonText, navigate = "" }: menuCardProps) => {
    const router = useRouter();

    const navigateFn = (link: string) => {
        router.push(link);
    }
    return (
        <div className={clsx('group', className)} onClick={() => navigateFn(navigate)}>
            <div className='md:absolute hidden inset-0 w-full h-full group-hover:bg-gray-100 group-hover:bg-opacity-30 transition delay-100 rounded-[20px]'></div>
            <div className='z-10 absolute bottom-0 right-0 w-auto h-auto pr-2 pl-4 py-2 bg-primaryCol menu-custom-rounded flex justify-end items-center gap-2 '>
                <h2 className='group-hover:opacity-70 group-hover:scale-[1.05]'>{buttonText}</h2>
                <Image src='/assets/landing-page/arrow.png' alt='Menu Icon' width={24} height={24} />
            </div>
        </div>
    )
}

export default MenuCard