import React from 'react';
import Image from 'next/image';
import Wish from '@/Img/icons8-wish-list-100.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Select_options from '../Button';
import Button from '@/component/Button';
import { HiArchiveBoxXMark } from "react-icons/hi2";

type Props = React.HTMLAttributes<HTMLElement>;

const Product = () => {
  return (

    <div className='block w-full'>
        
          <div className='p-20 w-full items-center'>
            <div>
               There are no products on the Wishlist!<br /><br/>   
               <Image src={Wish} alt='wish' />  <br /><br/>
               Look for the heart to save favorites while you shop.  <br/><br/>
               <Button text='Start Shopping' />
            </div>
             
          </div>
          <hr />

    </div>

  );
};

export default Product;
