import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-start md:p-16 p-4 pt-16 bg-loader bg-gray-50 bg-opacity-100 bg-bottom bg-cover relative'>
            <div className='w-fit h-fit flex flex-col justify-center items-center gap-2 md:absolute bottom-8 right-8'>
                <h1 className='text-secondaryCol/50 text-3xl md:text-5xl'>LOADING</h1>
                <div className='w-full relative'>
                    <Image
                        src="/loader.png" // Replace with your favicon path
                        alt="Favicon"
                        width={24}
                        height={24}
                        className='favicon'
                    />
                </div>
            </div>
        </div>
    )
}

export default Loader