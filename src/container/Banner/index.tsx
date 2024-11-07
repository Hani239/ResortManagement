import React from "react";
import clsx from 'clsx';
import Image from 'next/image'
// import img from '@/Img/Banner_Baby.jpg'

import img from '@/Img/images/edvin-johansson-rlwE8f8anOc-unsplash.jpg'
import Sun from '@/Img/sun.png'
import Red from '@/Img/banner-red-dot.png'
import Wave from '@/Img/Banner_Wave.png'
import Rainbow from '@/Img/v974-10-Converted.png'
import Left from '@/Img/grey-left-shape-header-1.png'
import Heart from '@/Img/icons8-heart-100.png'
import Oval from '@/Img/Oval.png'
import Oval_light from '@/Img/Oval-light.png'
import Oval_yellow from '@/Img/Oval-yellow.png'
import Oval_red from '@/Img/Oval-red.png'
import Button from '@/component/Button'
import Link from 'next/link'

type Props = {} & React.HTMLAttributes<HTMLElement>;
const Banner = ({ className, children, ...props }: Props) => {
    return (
        <div className='flex flex-wrap mt-10 relative'>
            <Image
                src={Left}
                alt="Left"
                className="object-cover w-48 absolute top-0 -z-10"
            />
            <Image
                src={Oval}
                alt="Oval"
                className="object-cover w-10 absolute top-28 left-96 -z-10 md:block hidden"
            />
            <Image
                src={Oval_light}
                alt="Oval_light"
                className="object-cover w-16 absolute top-40 left-10 -z-10"
            />
            <div className="md:flex-1 flex items-center justify-center">

                <div className='ml-5 md:ml-20 mr-8'>
                    
                        <Image
                            src={Heart}
                            alt="Heart"
                            className="object-cover "
                        />
                        <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-playpen'>Experience A World Of Comfort.</p>
                    

                    <div className="mt-3 lg:mt-5">
                    <Link href="/List"> <Button text={'Explore our products'} /></Link>
                    </div>
                </div>
            </div>
            <Image
                src={Oval_yellow}
                alt="Oval_yellow"
                className="object-cover w-8 absolute bottom-48 left-72 -z-10 md:block hidden"
            />
            <Image
                src={Oval_red}
                alt="Red_Dot"
                className="object-cover w-16 absolute bottom-0 left-1/3 -z-10 md:block hidden"
            />
            <div className="flex md:flex-1 h-auto m-5 md:mt-28 relative md:mr-20">
            {/* <Image
                src={Rainbow}
                alt="Rainbow"
                className="absolute w-24 left-1/2 -top-5 md:top-1/2 md:-left-10 md:w-32 z-0"
            /> */}
                <Image
                    src={img}
                    alt="Baby_Img"
                    className=" border rounded-lg"
                />
                <Image
                    src={Wave}
                    alt="wave"
                    className="w-full object-cover absolute bottom-0"
                />
                <Image
                    src={Sun}
                    alt="Sun"
                    className="w-24 object-cover absolute m-6 top-0 md:block hidden"
                />
            </div>
            {/* <div className=''>
                <Image
                  src={Wave}
                  alt="wave"
                  className="w-full object-cover absolute md:relative"
                />
            </div> */}
        </div>
    );
};
export default Banner;
Button