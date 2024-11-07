import React from 'react';
import Image from 'next/image';
import Star from '@/Img/ImgC/star.png'
import Star2 from '@/Img/ImgC/star2.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Select_options from '../Button';
import Button from '../Button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

type Props = { src: string | StaticImport, priceCss: string, alt: string, name: string, review: string, bg: string, real_price: number, price: number, rating: string } & React.HTMLAttributes<HTMLElement>;

const Product = ({ src, alt, className, bg, priceCss, name, real_price, price, review, ...props }: Props) => {
  const router=useRouter();
  return (

    <div className='inline-block'>
      <div className={`relative group border-none rounded-lg grid justify-center items-center ${bg}`}>
        <div>
          <Image
            src={src}
            alt={alt}
            className='h-full w-full group-hover:scale-110 transition duration-500 cursor-pointer'
          />
        </div>
        <div className="absolute bottom-3 flex justify-center w-full">
          <Link href="/ViewProduct">
            <Button text={'Select options'} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
          </Link>
        </div>
      </div>
      <div className='ml-10 my-3'>
        <div className='inline-block'>
          <Image src={Star} alt={alt} className='inline-block' />
          <Image src={Star} alt={alt} className='inline-block' />
          <Image src={Star} alt={alt} className='inline-block' />
          <Image src={Star} alt={alt} className='inline-block' />
          <Image src={Star2} alt={alt} className='inline-block' />
        </div>
        <div className='inline-block text-gray-700 float-right'>
          {review}
        </div>
      </div>
      <div className='relative flex flex-col mx-10 overflow-hidden pb-8'>
        <div className='absolute pt-0 text-lg font-inter'>{name}</div>
        <div className={`text-lg ${priceCss}`}></div>
        <div className=' block b-0 py-2 font-inter pt-5'>₹{price}</div>
      </div>
    </div>
  );
};

export default Product;
