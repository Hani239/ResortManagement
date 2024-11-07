'use client';
import Product from '@/component/Products'

import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

type Props = {} & React.HTMLAttributes<HTMLElement>;

const New_Summer = ({ className, children, ...props }: Props) => {
  const [rooms, setRooms] = useState([]);
  const router = useRouter();

  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const [rooms, setRooms] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await fetch(http://localhost:3000/api/admin/room, { signal: abortController.signal });
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
  // }, []);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
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

  return (
    <>
      <div className='md:mx-20 mx-5'>

        <div className='snap - mandatory snap-x wrapper flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}'>


          {rooms.map(room => (
            <div key={room._id}>


              <div className='inline-block'>
                <div className="relative group border-none rounded-lg grid justify-center items-centersnap-center sm:snap-start m-5 w-[270px] h-[250px] md:w-96 md:h-72 flex-shrink-0 overflow-hidden">
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
                        name: ${room.roomname},
                        desc: ${room.description},
                        price: ${room.price},
                        imgurl: ${room.img_path}
                      }
                    }}> */}
                    {/* <Link href={`/ViewProduct/?id=${room._id}`}> */}
                      <Button text={'Select options'} onClick={()=>handleClick(room._id)} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
                    {/* </Link> */}
                  </div>
                </div>

                <div className='relative flex flex-col mx-10 overflow-hidden pb-8'>
                  <div className='absolute pt-0 text-lg font-inter'>{room.roomname}</div>
                  <div className='text-lg mt-5'></div>
                  <div className=' block b-0 py-2 font-inter pt-5'>₹{room.price}</div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div >
    </>
  )
}

export default New_Summer