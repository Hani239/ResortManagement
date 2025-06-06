import React from 'react'
import Image from 'next/image'
import wave from '@/Img/Header-Gray-Flip.png'
import pic from '@/Img/ImgFT/Logo-1.svg'
import Link from 'next/link';
import logo from '@/Img/images/Logo(1).png'

type Props = {} & React.HTMLAttributes<HTMLElement>;

const Footer = ({ className, children, ...props }: Props) => {
  return (
    <>
      <Image src={wave} alt="wave" />
      <footer className='bg-[#F7F7F7] pt-6 px-6 md:px-16'>
        <div className="flex flex-wrap md:flex-row flex-col gap-4 justify-between">
          <div className="box1">
            {/* <Image src={pic} width={94} height={32} alt={'pic'} /> */}
            <Link href="/" ><Image
              src={logo}
              alt="logo"
              className="h-20 w-auto ml-6"
            /></Link>
            <p className='pt-6 mb-4'>Aashram Cross Road,<br /> Mahudi, Gujarat 382721</p>

            <p className='font-semibold text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>079 35033000</p>

            <div className="flex pt-5 gap-2">
              <div className="flex w-10 h-10 rounded-full fill-current text-black transform transition-transform duration-300 hover:scale-110  hover:text-blue-700 bg-[#FDFDFD] items-center justify-center cursor-pointer">
              <Link href="https://www.facebook.com/profile.php?id=61565479649055" ><svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg></Link>
              </div>
              <div className="flex w-10 h-10 rounded-full fill-current text-black transform transition-transform duration-300 hover:scale-110 hover:text-pink-600 bg-[#FDFDFD] items-center justify-center gap-3 cursor-pointer">
              <Link href="https://www.instagram.com/paradisepulse4/" ><svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></Link>
              </div>
              <div className="flex w-10 h-10 rounded-full fill-current text-black transform transition-transform duration-300 hover:scale-110 hover:text-blue-400 bg-[#FDFDFD] items-center justify-center cursor-pointer">
              <Link href="https://www.facebook.com/profile.php?id=61565479649055" ><svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></Link>
              </div>
              {/* <div className="flex w-10 h-10 rounded-full fill-current text-black transform transition-transform duration-300 hover:scale-110 hover:text-red-600 bg-[#FDFDFD] items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" /></svg>
              </div> */}
            </div>
          </div>

          <div className="box1 ">
            <h1 className='font-bold'>About us</h1>

            <ul className='pt-4'>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Our story</li>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Our Difference</li>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Our Services</li>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Our Blog</li>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Contact</li>
            </ul>


          </div>
          <div className="box1 ">
            <h1 className='font-bold'>Shopping with us</h1>
            <ul className='pt-4'>
              {/* <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Size Charts</li> */}
              <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Look Books</li>
              <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Gift Cards</li>
              <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Customer Reviews</li>
              <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Retail Store</li>
              <li className='font-sans pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Shop All</li>
            </ul>
          </div>
          <div className="box1 justify-center">
            <h1 className='font-bold '>Customer service</h1>
            <ul className='pt-4'>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Track Order</li>
              <li className='font-sans  pt-2 flex flex-wrap text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Returns & Cancellation</li>
              <li className='font-sans  pt-2 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>FAQ</li>
            </ul>
          </div>
        </div>
        <div>

          <div className='terms flex flex-wrap justify-center gap-8 p-6'>
            {/* <p className='flex  pt-10 text-black text-xs hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Logic Lords </p> */}
            <p className='flex  pt-10 text-black text-xs hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Terms & Conditions </p>
            <p className='flex  pt-10 text-black text-xs hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-110'>Privacy Policy </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer