"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '@/Img/ImgC/1.png'
import Img2 from '@/Img/ImgC/2.png'
import Img3 from '@/Img/ImgC/3.png'
import Img4 from '@/Img/ImgC/4.png'
import Img5 from '@/Img/ImgC/5.png'
import Img6 from '@/Img/ImgC/6.png'
import Img7 from '@/Img/ImgC/7.png'
import Img8 from '@/Img/ImgC/8.png'
import Img9 from '@/Img/ImgC/9.png'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.module.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Product from '../Products';

type Props = {} & React.HTMLAttributes<HTMLElement>;

const Carousel = ({ className, children, ...props }: Props) => {
  return (
    <><div className='mx-20'>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          lg: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        }}
        effect={'snap'} // Enable snap effect
        scrollbar={{
          draggable: true, // Enable scrollbar draggable
          hide: false,     // Show scrollbar
        }}
        // scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className=""
      >
        <div className=''>
        <SwiperSlide className=''>
        <div className={`snap-mandatory gap-3 snap-x wrapper flex ${className} justify-center gap-10 overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF]`}>
        <Product
                src={Img1}
                alt={'Product1'}
                name={'Giraffe Slub Knit T-Shirt'}
                bg={'bg-[#e3e3e3] h-[300px] w-[250px] sm:h-[336px] sm:w-[280px] md:w-72 md:w-64'}
                price={16.99} review={''} real_price={0} rating={''} priceCss={''}/>

        <Product
                src={Img2}
                alt={'Product1'}
                name={'Rainbow soft toy'}
                bg={'bg-[#e3e3e3] h-[300px] w-[250px] sm:h-[336px] sm:w-[280px] md:w-72 md:w-64'}
                price={19.99} review={''} real_price={0} rating={''} priceCss={''}/>  
        <Product
                src={Img3}
                alt={'Product1'}
                name={'Dungarees With Pocket'}
                bg={'bg-[#e3e3e3]'}
                price={16.99} review={''} real_price={0} rating={''} priceCss={''}/>          

        <Product 
                src={Img4}
                alt={'Product1'}
                name={'Giraffe Slub Knit Trousers'}
                bg={'bg-[#e3e3e3]'}
                price={11.99} review={''} real_price={0} rating={''} priceCss={''}/>   
                      </div>
        </SwiperSlide>
        <SwiperSlide className=''>
        <div className={`snap-mandatory gap-3 snap-x wrapper flex ${className} justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF]`}>
        <Product
                src={Img5}
                alt={'Product1'}
                name={'Leopard T-Shirt'}
                bg={'bg-[#e3e3e3]'}
                price={4.99} review={''} real_price={0} rating={''} priceCss={''}/>          
        <Product
                src={Img6}
                alt={'Product1'}
                name={'Griaffe Romper Suit'}
                bg={'bg-[#e3e3e3]'}
                price={15.99} review={''} real_price={0} rating={''} priceCss={''}/>          
        <Product
                src={Img7}
                alt={'Product1'}
                name={'Cotten pajamas,3 pieces'}
                bg={'bg-[#e3e3e3]'}
                price={9.99} review={''} real_price={0} rating={''} priceCss={''}/>          
        <Product
                src={Img8}
                alt={'Product1'}
                name={'Sweatshirt Kit + T-Shirt + Bermudi Pack'}
                bg={'bg-[#e3e3e3]'}
                price={16.99} review={''} real_price={0} rating={''} priceCss={''}/> 
                      </div>
        </SwiperSlide>

        <SwiperSlide className=''>
        <div className={`snap-mandatory snap-x wrapper flex ${className} justify-center overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF]`}>
        <Product
                src={Img9}
                alt={'Product1'}
                name={'nameured Dress with Fryed Details'}
                bg={'bg-[#e3e3e3]'}
                price={19.99} review={''} real_price={0} rating={''} priceCss={''}/>  
                      </div>
        </SwiperSlide>
      </div>
      </Swiper>
      </div>
    </>
  );
}
export default Carousel