import React from 'react'
import Image from 'next/image'
// import Img1 from '@/Img/Img1.webp'
// import Img2 from '@/Img/Img2.webp'
import Img2 from '@/Img/images/chad-montano-MqT0asuoIcU-unsplash.jpg'
import Img1 from '@/Img/images/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg'
import Img3 from '@/Img/hand-hear.png'
import wave4 from '@/Img/Header-Gray-Flip.png'
import Img4 from '@/Img/shape-left.png'
import Img5 from '@/Img/Group-26.png'
import Oval_Red from '@/Img/Oval-red.png'
import path from '@/Img/path.png'
import Button from '@/component/Button'
import Link from 'next/link'
type Props = {} & React.HTMLAttributes<HTMLElement>;

const Blog = ({ className, children, ...props }: Props) => {
  return (
    <div className='mt-44 relative'>
      <div className=''>
        <Image
          src={wave4}
          alt="wave"
          className=" object-cover -z-10"
        />
      </div>
      <div>
        <Image
          src={Img4}
          alt="Left-Shape"
          className="absolute w-80 z-0"
        />
      </div>
      <div className="right-0 bottom-0 absolute ">
        <Image
          src={Img5}
          alt="Right-Shape"
          className=" w-80 z-0"
        />
      </div>
      <div className='flex flex-wrap srink-0 h-screen w-full bg-[#f7f7f7] justify-center align-center'>

        <div className='relative w-full md:w-1/3 lg:w-1/3 flex sm:flex-1 sm:justify-center h-auto'>
          <div className='flex flex-col absolute top w-full p-5 lg:px-20'>
            <p className='font-inter sm:text-xs'>MultiCuisine </p>
            <br />
            <p className='font-playpen text-2xl sm:text-4xl font-semibold'>For the love of delicious food.</p>
            <br />
            <p className='md:font-inter text-xs md:text-xs' >Its All About The Food that makes you say wow. Best Food Varieties You Will Get Here Yummy Combos And Many More.</p>
          </div>
        </div>
        <div className='relative z-0 w-1/3 md:w-1/3 lg:w-1/3 sm:flex-1 flex h-auto'>
          <div className='absolute flex w-full justify-center'>
            <Image
              src={Img1}
              alt="Center Image"
              className="flex sm:object-cover absolute w-full rounded-xl sm:left-0 sm:right-0 sm:top-0 sm:bottom-0"
            />
          </div>
          <div className=''>
            <Image
              src={Img2}
              alt="Center Baby Image"
              className="w-3/5  object-cover rounded-xl bottom-12 -left-5 lg:bottom-14 lg:-left-32 md:bottom-72 md:-left-10 sm:bottom-96 sm:-left-5 absolute"
            />
            <Image
              src={Oval_Red}
              alt="Oval_Red"
              className="flex object-cover absolute bottom-8 -left-8 sm:bottom-80 sm:-left-16 md:bottom-64 md:-left-20 lg:bottom-7 lg:-left-48  w-1/3"
            />
            <Image
              src={path}
              alt="path"
              className="flex object-cover absolute w-1/3 bottom-8 -left-8 sm:bottom-80 sm:-left-16 md:bottom-64 md:-left-20 lg:bottom-7 lg:-left-48"
            />
          </div>
        </div>
        <div className='relative  w-full md:w-1/3 lg:w-1/3 flex sm:flex-1 justify-center h-auto' >
          <div className='flex flex-col absolute bottom-32 p-5 lg:px-20'>
            <Image
              src={Img3}
              alt="Hand-hear"
              className="invisible sm:visible h-auto w-24 float-left mb-20"
            />
            <div className='4'>
              <p className='md:font-inter text-xs mb-8 md:text-xs'>We’re committed to using the highest quality Food Items and ensure they are Hygenic, so they are perfect for Your Health.
              </p>
              <Link href='/Food_menu' ><Button text="Explore Menu"></Button></Link>
              {/* <Link href='/Food_menu' ></Link><Button text="Explore Menu"></Button> */}
              {/* <a href='#' className='font-playpen text-bold mb-8'></a> */}
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Blog