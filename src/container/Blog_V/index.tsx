import React from 'react'
import Image from 'next/image'
import Img1 from '@/Img/ImgV/pexels-olia-danilevich-5088179-2.webp'
import Img2 from '@/Img/ImgV/pexels-monstera-7139729.webp'

type Props = {} & React.HTMLAttributes<HTMLElement>;

const Blog_V = ({ className, children, ...props }: Props) => {
    return (
        <div className=''>
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-bold mb-2">FROM THE BLOG</p>
                <p className="text-3xl font-bold mb-4">Boring stuff is for adults</p>
<div className=''>
                <div className="box flex flex-col sm:flex-row justify-center relative gap-5 w-screen h-100">
                    <div className="box w-full sm:w-1/10 md:w-8/10 lg:w-8/10 xl:w-8/10 h-100 m-2 overflow-hidden transition duration-300 ease-in-out transform relative hover:rounded-lg">
                        <Image
                            src={Img1}
                            alt="Img1"
                            className="box-image rounded-md w-full h-full object-cover hover:shadow-md hover:scale-125 duration-1000 hover:rounded-lg"
                        />
                    </div>
                    <div className="box w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-100 m-2 overflow-hidden transition duration-300 ease-in-out transform relative hover:rounded-lg">
                        <Image
                            src={Img2}
                            alt="Img2"
                            className="box-image rounded-md w-full h-full object-cover hover:shadow-md hover:scale-125 duration-1000 hover:rounded-lg"
                        />
                    </div>
                </div>
                </div>

            </div>
            <div className='box flex gap-96'>
                <div className='box m-5 '>
                    <a href='#' className="hover:text-red-500 hover:underline font-bold text-xl sm:text-2xl">
                        <p className="text-left ...">Keep Your Child's Mind Active This Summer</p>
                    </a>
                </div>
                <div className='box m-5  '>
                    <a href='#' className="hover:text-red-500 hover:underline font-bold text-xl sm:text-2xl">
                        <p className="text-left ...">The Animals Observatory Pre Fall 2022 Collection</p>
                    </a>
                </div>

            </div>
            <div className='box flex gap-x-96'>
                <div className='box m-5'>
                    <a href='#' className="hover:text-red-500 hover:underline font-bold text-sm sm:text-lg">
                        <p className="text-left ...">Read More </p>
                    </a>
                </div>
                <div className='box m-5'>
                    <a href='#' className="hover:text-red-500 hover:underline font-bold text-sm sm:text-lg">
                        <p className="text-left ...">Read More </p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Blog_V