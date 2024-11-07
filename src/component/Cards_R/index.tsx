import React from 'react'
import Image from 'next/image'
import Item from '@/Img/hand-hear.png'
import Item1 from '@/Img/Oval-white.png'
import Item2 from '@/Img/path-dots.png'
import Star from '@/Img/ImgR/icons8-star-100.png'
import Item4 from '@/Img/ImgR/h2.png'
type Props = {}

const Cards_R = (props: Props) => {
    return (
        <>
            <div className='flex flex-wrap justify-center relative gap-5 m-5 md:mx-20'>
                <div className='p-10 min-[767]:w-48 min-[767]:h-50 md:flex-1 lg:flex-1 m-3 md:m-0 lg:m-0 rounded-tl-[95px]  rounded-br-[95px] bg-[#f7f7f7]'>
                    <Image src={Item} alt="Hand" height={90} width={90} className='' />
                    <h2 className='font-extrabold mt-6'>Handmade in New York</h2>
                    <p>Our pieces are made by talented Spanish heirloom artists and seamstresses who practice the art and techniques of handmade baby and children’s clothing.</p>

                </div>
                <div className='relative p-10 min-[767]:w-48 min-[767]:h-50 md:flex-1 lg:flex-1 m-3 md:m-0 lg:m-0 rounded-br-[95px]  bg-[#e8eeef]'>
                    <div className=''>

                        <Image src={Item1} alt="Green_Dot" height={100} width={100} className='absolute top-5 right-2 -z-1' />

                        <Image src={Item2} alt="Black_Dots" height={55} width={55} className='absolute top-10 right-16 -z-1' />

                        <Image src={Star} alt="Star" height={50} width={50} className='absolute h-auto w-50 top-10 left-5 -z-1' />
                    </div>
                  
                    <h2 className='font-extrabold mt-28'>Premium Quality</h2>
                    <p className='z-1'>We offer the best quality materials and textiles; attention to detail and baby's comfort always come first. We ensure every item meets premium standards.</p>


                </div>
                <div className=' p-10 min-[767]:w-48 min-[767]:h-50 md:flex-1 lg:flex-1 m-3 md:m-0 lg:m-0 rounded-tl-[95px]  rounded-br-[95px] bg-[#f7f7f7]'>
                    <Image src={Item4} alt="Heart" height={90} width={90} className='' />
                    <h2 className='font-extrabold mt-6'>Tradition and Passion</h2>
                    <p>In an age of mass production, we aim to keep alive traditional craftsmanship by sharing the timeless beauty and traditions of Spanish baby and children’s clothing.</p>
                </div>
            </div>
        </>
    )
}

export default Cards_R