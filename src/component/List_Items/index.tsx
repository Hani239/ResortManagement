"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

type Props = {} & React.HTMLAttributes<HTMLElement>;
const List_Items = ({ className, children, ...props }: Props) => {
  const [rooms, setRooms] = useState([]); 
  const router = useRouter();

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async (_id) => {

    let response = await fetch("http://localhost:3000/api/admin/room/" + _id);
    console.log(response);
    response = await response.json();
    if (response.success) {
      setRooms(response.result)
    } else {
      alert("Room List Not Loading")
    }
  }

  const handleClick = (roomId: string) => {
    // Instead of router.push, we use window.location.assign to navigate and reload
    window.location.assign(`/ViewProduct/?id=${roomId}`);
  };
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const [rooms, setRooms] = useState<Room[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/user/rooms`, { signal: abortController.signal });
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch rooms');
  //       }
  //       const data = await response.json();
  //       setRooms(data);
  //     } catch (err) {
  //       if (!abortController.signal.aborted) {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchRooms();
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [API_BASE_URL]);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (

    <div className='flex flex-wrap justify-center'>
      {rooms.map(room => (
        <div key={room._id}>
          {/* <span> {room.roomname} {room.price} 
               
               </span>
               <img src={room.imageUrl} alt="room" />  */}
          {/* <Product
                    src={room.imageUrl}
                    alt={room.imageUrl}
                    name={room.roomname}
                    bg={'snap-center h-80 w-72 sm:h-64 sm:w-56 md:h-80 md:w-88 lg:w-88 lg:h-96 xl:h-64 xl:w-72 m-0 sm:m-2 md:m-2 lg:m-2'}
                    className=''
                    priceCss='mt-5'
                    price={room.price}                  
                /> */}

          <div className='inline-block'>
            <div className="relative group border-none rounded-lg grid justify-center items-center snap-center mx-2 h-32 w-48 sm:h-32 sm:w-48 md:h-32 md:w-48 lg:h-40 lg:w-56 xl:w-48 xl:w-56 m-0 sm:m-2 md:m-2 lg:m-2 flex-shrink-0 overflow-hidden">
              <div>
                <img
                  src={room.img_path}
                  alt={"Room"}
                  className='h-full w-full group-hover:scale-110 transition duration-500 cursor-pointer object-cover object-center'

                />
              </div>
              <div className="absolute bottom-3 flex justify-center w-full">
                {/* <Link href="/ViewProduct">
            <Button text={'Select options'} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
          </Link> */}
                {/* <Link href={{
                  pathname: '/ViewProduct',
                  query:
                  {
                    name: `${room.roomname}`,
                    desc: `${room.discription}`,
                    price: `${room.price}`,
                    imgurl: `${room.img_path}`
                  }
                }}> */}
                  <Button text={'Select options'} onClick={()=>handleClick(room._id)} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
                {/* </Link> */}
              </div>
            </div>

            <div className='relative flex flex-col items-center overflow-hidden pb-8'>
              <div className='flex absolute pt-0 text-lg font-inter'>{room.roomname}</div>
              <div className='flex text-lg mt-5'></div>
              <div className='flex b-0 py-2 font-inter pt-5'>₹{room.price}</div>
            </div>
          </div>

        </div>
      ))}
    </div>

  );
}

export default List_Items;

// 'use client';
// import Product from '@/component/Products'
// import React from 'react'
// import Img1 from '@/Img/images/Images/room/b2.jpg'
// import Img2 from '@/Img/images/Images/room/bee6.jpg'
// import Img3 from '@/Img/images/Images/room/bv1.jpg'
// import Img4 from '@/Img/images/Images/room/farm1.jpg'
// import Img5 from '@/Img/images/Images/room/glass4.jpg'
// import Img6 from '@/Img/images/Images/room/gio1.jpg'
// import Img7 from '@/Img/images/Images/room/mud1.jpg'
// import Img8 from '@/Img/images/Images/room/nest1.jpg'
// import Img9 from '@/Img/images/Images/room/hc1.jpg'
// import { Span } from 'next/dist/trace'
// import { StaticImport } from 'next/dist/shared/lib/get-img-props'


// interface Product {
//   id: number;
//   src: string | StaticImport;
//   alt: string;
//   name: string;
//   price: number;
//   review: string;
//   real_price: number;
//   rating: string;
// }
// const products: Product[] = [
//   {
//     id: 1,
//     src: Img1,
//     alt: 'Barrel Room',
//     name: 'Barrel Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 2,
//     src: Img2,
//     alt: 'Bee Hive',
//     name: 'Bee Hive',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 3,
//     src: Img3,
//     alt: 'BougainVillea Cabins',
//     name: 'BougainVillea Cabins',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 4,
//     src: Img4,
//     alt: 'Farmers Room',
//     name: 'Farmers Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 5,
//     src: Img5,
//     alt: 'Glass Room',
//     name: 'Glass Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 6,
//     src: Img6,
//     alt: 'Geo Desic',
//     name: 'Geo Desic',
//     price: 9000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 7,
//     src: Img7,
//     alt: 'Mud Rooms',
//     name: 'Mud Rooms',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 8,
//     src: Img8,
//     alt: 'Birds Nest',
//     name: 'Birds Nest',
//     price: 8000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 9,
//     src: Img9,
//     alt: 'Historic Room',
//     name: 'Historic Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
// ];
// type Props = {} & React.HTMLAttributes<HTMLElement>;

// const List_Items = ({ className, children, ...props }: Props) => {
//   return (
//     <>
//       <div>
//         <div className={` flex flex-wrap justify-center ${className}`}>
//           {products.map((product) => (
//             <Product
//               src={product.src}
//               alt={product.alt}
//               name={product.name}
//               bg={' snap-center h-80 w-72 sm:h-64 sm:w-56 md:h-80 md:w-88 lg:w-88 lg:h-96 xl:h-64 xl:w-72 m-0 sm:m-2 md:m-2 lg:m-2'}
//               className=''
//               priceCss='mt-5'
//               price={product.price} review={product.review} real_price={product.real_price} rating={product.rating} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default List_Items