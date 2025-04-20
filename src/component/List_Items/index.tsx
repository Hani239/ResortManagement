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
    const roomId = "id"; // Replace with actual _id
    loadRooms(roomId);
  }, []);

  const loadRooms = async (_id: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/room/" + _id);
  
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

    <div className='flex flex-wrap justify-center'>
      {rooms.map((room:any) => (
        <div key={room._id}>

          <div className='inline-block'>
            <div className="relative group border-none rounded-lg grid justify-center items-center snap-center mx-2 h-32 w-48 sm:h-32 sm:w-48 md:h-32 md:w-48 lg:h-40 lg:w-56 xl:w-56 m-0 sm:m-2 md:m-2 lg:m-2 flex-shrink-0 overflow-hidden">
              <div>
                <img
                  src={room.img_path}
                  alt={"Room"}
                  className='h-full w-full group-hover:scale-110 transition duration-500 cursor-pointer object-cover object-center'

                />
              </div>
              <div className="absolute bottom-3 flex justify-center w-full">
                  <Button text={'Select options'} onClick={()=>handleClick(room._id)} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
  
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

