"use client";
import Loader from '@/components/reusable/Loader';
import NavBar from '@/components/reusable/NavBar'
import { getBlogDataById } from '@/lib/actions/blogs.action';
import { blogProps } from '@/types';
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const BlogFull = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<blogProps>({});
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const getBlog = async () => {
            const blogData: any = await getBlogDataById(id);
            console.log(blogData);
            if (blogData) {
                setLoader(false);
            }
            setBlog(blogData);
        }
        id && getBlog();
    }, [id]);
    return (
        <>
            {
                loader ?

                    <Loader /> :
                    <main className=' w-full min-h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4'>
                        <div className='lg:h-screen h-auto lg:w-1/2 w-full   sm:p-4 p-0  '>
                            <div className='w-full h-full sm:rounded-[20px] p-4 bg-center bg-no-repeat bg-cover flex flex-col justify-between items-start gap-6' style={{
                                backgroundImage: blog && blog.image ? `url(${blog.image})` : 'none',
                            }}>
                                <NavBar />
                                <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto animate-titleAnim">
                                    BLOGS
                                </div>
                            </div>

                        </div>
                        <div className='lg:w-1/2 w-full h-screen p-4'>
                            <div className='w-full h-full border-[1px] overflow-auto scroll-smooth rounded-lg border-secondaryCol/50 relative p-4 '>
                                <div className='w-full h-auto px-4 py-2 flex justify-center items-center gap-4 '>
                                    <div className='w-full flex justify-center gap-4 items-center mb-6'>
                                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                                        <h1 className='lg:text-4xl text-wrap lg:w-[500px] w-[70%] text-[16px] animate-menuNameAnim text-center'>
                                            {blog.title}
                                        </h1>
                                        <Image src="/assets/menu/Grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                                    </div>
                                </div>
                                <div className=' px-4 pt-4 '>
                                    <section id='maki' className='mb-12 w-full h-auto'>
                                        <div className='w-full flex flex-col justify-start items-start gap-2'>

                                            <div>
                                                <div dangerouslySetInnerHTML={{ __html: blog.content ? blog.content : <></> }}></div>
                                            </div>
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