import React from 'react';
import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Select_options from '../Button';
import Button from '../Button';
import Link from 'next/link'

type Props = { src: string | StaticImport, priceCss: string, alt: string, name: string, review: string, bg: string, real_price: number, price: number, rating: string } & React.HTMLAttributes<HTMLElement>;

const Product = ({ src, alt, className, bg, priceCss, name, real_price, price, review, ...props }: Props) => {
  return (

    <div className='inline-block w-full'>
      <div className={`relative group border-none rounded-lg grid justify-center items-center ${bg}`}>
        <div>
          <Image
            src={src}
            alt={alt}
            className='h-48 w-48 group-hover:scale-110 transition duration-500 cursor-pointer'
          />
        </div>
        <div className="absolute bottom-3 flex justify-center w-full">
          {/* <Link href="/ViewProduct">
            <Button text={'Select options'} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
          </Link> */}
        </div>
      </div>
      {/* <div className='ml-10 my-3'>
       
         <div className='inline-block text-gray-700 float-right'>
          {review}
        </div> 
      </div> */}
      <center><div className='relative flex flex-col  overflow-hidden pb-20 items-center'>
       <div className='absolute pt-0 text-lg font-inter'>{name}</div>
        {/* <div className={`text-lg ${priceCss}`}></div>
        <div className=' block b-0 py-2 font-inter pt-5'>₹{price}</div> */}

      </div>
      </center> 
    </div>
  );
};

export default Product;
