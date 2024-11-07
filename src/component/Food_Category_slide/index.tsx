'use client';
import Product from '@/component/Cat_Item'
import React from 'react'
import Img1 from '@/Img/FoodCategory/Salad.png'
import Img2 from '@/Img/FoodCategory/Punjabi_Sabji.png'
import Img3 from '@/Img/FoodCategory/Chaats.png'
import Img4 from '@/Img/FoodCategory/Chinese.png'
import Img5 from '@/Img/FoodCategory/Pizza.png'
import Img6 from '@/Img/FoodCategory/Dips.png'
import Img7 from '@/Img/FoodCategory/Paratha.png'
import Img8 from '@/Img/FoodCategory/Dessert.png'
import Img9 from '@/Img/FoodCategory/Cakes.png'

import { Span } from 'next/dist/trace'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


interface Product {
  id: number;
  src: string | StaticImport;
  alt: string;
  name: string;
  
}
const products: Product[] = [
  {
    id: 1,
    src: Img1,
    alt: 'Salad',
    name: 'Salad',
    
  },
  {
    id: 2,
    src: Img2,
    alt: 'North Indian',
    name: 'North Indian',
   
  },
  {
    id: 3,
    src: Img3,
    alt: 'Chaats',
    name: 'Chaats',
   
  },
  {
    id: 4,
    src: Img4,
    alt: 'Chinese',
    name: 'Chinese',
   
  },
  {
    id: 5,
    src: Img5,
    alt: 'Pizza',
    name: 'Pizzas',
   
    
  },
  {
    id: 6,
    src: Img6,
    alt: 'Dip',
    name: 'Dips',
   
    
  },
  {
    id: 7,
    src: Img7,
    alt: 'Parathas',
    name: 'Parathas',
    
  },
  {
    id: 8,
    src: Img8,
    alt: 'Desserts',
    name: 'Desserts',
   
  },
  {
    id: 9,
    src: Img9,
    alt: 'Cakes',
    name: 'Cakes',
    
  },
];

type Props = {} & React.HTMLAttributes<HTMLElement>;

const Category = ({ className, children, ...props }: Props) => {
  return (
    <>
      <div className='md:mx-20 mx-5'>

        <div className={`snap-mandatory snap-x wrapper flex  overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}`}>
        {products.map((product) => (
            <Product
              src={product.src}
              alt={product.alt}
              name={product.name}
              bg={'snap-center sm:snap-start m-5 w-64 h-72 md:w-64 md:h-72'}
              className=''
              priceCss='mt-10'
              price={0} review={""} real_price={0} rating={""} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Category