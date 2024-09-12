/* eslint-disable @next/next/no-img-element */
"use client";
import Loader from '@/components/reusable/Loader';
import NavBar from '@/components/reusable/NavBar'
import { getBlogData } from '@/lib/actions/blogs.action';
import { blogProps } from '@/types';
import moment from 'moment';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const BlogFull = () => {
    const [blog, setBlog] = useState<blogProps[]>([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const getBlog = async () => {
            const blogData: any = await getBlogData();
            console.log(blogData);
            if (blogData) {
                setLoader(false);
            }
            setBlog(blogData);
        }
        getBlog();
    }, []);

    const router = useRouter();
    const navigateFn = (id: string) => {
        router.push(`/blog/${id}`);
    }
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
                                    BLOGS
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2 w-full h-screen p-4'>
                            <div className='w-full h-full border-[1px] rounded-lg border-secondaryCol/50 relative p-4 pt-24 md:pt-32'>
                                <div className='w-[96%] h-auto px-4 py-2 flex justify-center items-center gap-4 absolute top-8 '>
                                    <div className='w-full flex justify-center gap-4 items-center mb-6'>
                                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                                        <h1 className='lg:text-4xl text-[16px] animate-menuNameAnim text-center'>
                                            BEHIND THE SCENE <br /> & LATEST NEWS
                                        </h1>
                                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                                    </div>
                                </div>
                                <div className='h-full overflow-auto px-4 pt-4 scroll-smooth'>
                                    <section id='maki' className='mb-12 w-full h-auto'>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>
                                            {
                                                blog.map(blog => (
                                                    <div key={blog.title} className='w-full h-auto flex lg:flex-row flex-col justify-start gap-4 items-start cursor-pointer' onClick={() => { navigateFn(blog.$id) }}>
                                                        <img src={blog.image} alt='blog' className='md:w-[210px] h-[160px] rounded-lg' />
                                                        <div className='flex-1 flex flex-col justify-start gap-2 items-start'>
                                                            <h1 className=' uppercase font-sans text-sm'>{moment(blog.date).format("Do MMM YYYY")} </h1>
                                                            <h1 className='text-xl uppercase'>{blog.title} </h1>
                                                            <h1 className='text-sm font-sans'>{blog.description}</h1>
                                                        </div>
                                                    </div>
                                                ))
                                            }
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

export default BlogFull;