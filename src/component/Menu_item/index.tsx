
import React from 'react';
import Image from 'next/image';
import Star from '@/Img/ImgC/star.png'
import Star2 from '@/Img/ImgC/star2.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Select_options from '../Button';
import Button from '@/component/Button';
import { HiArchiveBoxXMark } from "react-icons/hi2";
import Dated from '@/component/Get_Date'

type Props = { src: string | StaticImport, alt: string, text: string, bg: string, pricex: number } & React.HTMLAttributes<HTMLElement>;

const Product = ({ src, alt, className, bg, text, pricex, ...props }: Props) => {
   return (

      <div className='block w-full'>
         <div className='flex p-10 w-full items-center border-t'>
            {/* <div className='w-10  h-auto'><HiArchiveBoxXMark /></div> */}
            <div className='w-1/4 '>
               <Image src={src} alt={alt} width={80} height={40} />
            </div>
            <div className='w-2/4'>
               <h2>{text}</h2>
               <br />
               <span>{pricex}</span>
               <br />
               <span className='text-xs'><Dated></Dated></span>
            </div>
            <div className=''>
               <Button text='Add To Cart' />
            </div>
         </div>
      </div>

   );
};

export default Product;
