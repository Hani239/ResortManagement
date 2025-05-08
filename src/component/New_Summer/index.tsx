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

  useEffect(() => {
    const roomId = "id"; // Replace with actual _id
    loadRooms(roomId);
  }, []);

  const loadRooms = async (_id: string) => {
    try {
      const response = await fetch("http://paradise-pulse.vercel.app/api/admin/room/" + _id);

      const data = await response.json();
      console.log(data);

      if (data.success) {
        setRooms(data.result);
      } else {
        alert("Room List Not Loading");
      }
    } catch (error) {
      console.error("Error fetching room:", error);
      alert("Something went wrong while loading rooms.");
    }
  };


  const handleClick = (roomId: string) => {
    // Instead of router.push, we use window.location.assign to navigate and reload
    window.location.assign(`/ViewProduct/?id=${roomId}`);
  };

  return (
    <>
      <div className='md:mx-20 mx-5'>
        <div className='snap - mandatory snap-x wrapper flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}'>
          {rooms.map((room: any) => (
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
                    <Button text={'Select options'} onClick={() => handleClick(room._id)} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />                  </div>
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