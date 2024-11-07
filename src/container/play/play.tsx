import React from 'react'
import Image from 'next/image'
import pic from '@/Img/images/company-female-friends-having-a-party-1.png'
import pic2 from '@/Img/ImgC/roundlines.svg'
import pic3 from '@/Img/ImgC/reddot.svg'
import pic4 from '@/Img/ImgC/dots.svg'
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import Button from '@/component/Button'
import wave4 from '@/Img/Header-Green-Flip.png'
import wave5 from '@/Img/Header-Green.png'


type Props = {}

const Play = (props: Props) => {
    return (
        <>
            <div className='py-20 '>
                <Image
                    src={wave4}
                    alt="wave"
                    className="w-full object-cover"
                />
                <div className='flex-wrap justify-center  bg-[#e8eeef] flex'>
                    
                    <div className='flex flex-wrap justify-center gap-5 items-center mx-6 '>
                        <div className=''>
                            <p className='font-dancing_script text-6xl font-semibold '>Wedding's & Events</p>
                            <p className='font-playpen text-4xl'>Celebrate your special day </p>
                            <br />
                            <div className='flex '>
                                <Button text='Book Events' />
                            </div>
                        </div>
                        <div className=''>
                            <div className='relative'>
                                <Image src={pic} alt="toys" />
                                <Image src={pic2} alt="round lines" className='absolute -top-16 right-5 w-20 md:w-28 animate-pulse delay-100 ease-out' />
                                <Image src={pic3} alt="red dot" className='absolute -right-2 top-20 w-12 sm:right-5 sm:top-40 sm:w-16' />
                                <Image src={pic4} alt="dots" className='absolute -bottom-8' />
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={wave5}
                    alt="wave"
                    className="w-full object-cover"
                />
            </div>
        </>
    )
}

export default Play