'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import MainI from '@/Img/images/images/ViewMain.jpg'
import Nav from '@/component/Nav_Exp'
import Footer from '@/container/Footer'
import View from '@/component/ProductView'
import Button from '@/component/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import PVDrop from '@/component/ProductView/Dropdown3';
import New_Summer from '@/component/New_Summer'
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  searchParams: any;
  params: any;
};

const ViewProduct = (props: Props) => {
  const [rooms, setRooms] = useState<any>();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [cartData, setCartData] = useState<any>();
  const [cartStorage, setCartStorage] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const [cartIds, setCartIds] = useState<string[]>([]);

  // Set cart IDs whenever cart updates
  useEffect(() => {
    setCartIds(cartStorage.map((item: { _id: string }) => item._id));
  }, [cartStorage]);

  const isRoomInCart = rooms && cartIds.includes(rooms._id);

  // Fetch room details on first render
  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const id = searchParams.get('id');
      const res = await fetch(`/api/user/${id}`);
      const data = await res.json();

      if (data.success) {
        setRooms(data.details);
      } else {
        alert('Room details could not be loaded.');
      }
    } catch (err) {
      console.error('Error fetching room data:', err);
    }
  };

  // Load dates from cartStorage if the room exists in cart
  useEffect(() => {
    if (!rooms) return;

    const cartItem = cartStorage.find((item) => item._id === rooms._id);
    if (cartItem) {
      setCheckInDate(cartItem.checkInDate || '');
      setCheckOutDate(cartItem.checkOutDate || '');
    } else {
      setCheckInDate('');
      setCheckOutDate('');
    }
  }, [rooms]);
  

  const addToCart = (item: any) => {
    if (!item || !checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates.');
      return;
    }

    const updatedItem = {
      ...item,
      checkInDate,
      checkOutDate,
    };

    let updatedCart = [...cartStorage];
    const existingIndex = updatedCart.findIndex((i) => i._id === item._id);

    if (existingIndex >= 0) {
      updatedCart[existingIndex] = updatedItem;
    } else {
      updatedCart.push(updatedItem);
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);
    setCartData(updatedItem);
  };

  const getTodayDate = () => {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); // Adjust to local time
  return today.toISOString().split('T')[0]; // Format it as yyyy-mm-dd
};

// Use getTodayDate for min attribute
const today = getTodayDate();

  return (
    <div>
      <div className="relative flex z-20">
        <Nav cartData={cartData} />
      </div>

      <div>
        <div className='flex flex-wrap mt-48 mx-12 ml-6 mr-6 md:ml-20 md:mr-20 '>
          <div className='flex flex-wrap md:flex-1 h-full  object-contain sticky'>
            <div className='flex  w-full sm:w-full md:w-full lg:w-full aspect-auto  xl:w-5/6  justify-center  object-cover'>
              <img src={rooms?.img_path} alt="Product Image" className='w-full h-full' />
            </div>
          </div>
          <div className='flex flex-1 flex-col h-auto md:pl-14 pt-5'>
            <div className='font-inter text-sm'>Featured Room</div>
            <div className='font-playpen text-4xl py-2 font-semibold'>{rooms?.roomname}</div>
            <div className='font-playpen font-semibold text-xl py-8'>
              ₹{rooms?.price}
            </div>

            <div className='my-5'>
              <div className='font-inter text-md'>Check In Date</div>
              <input
                type='date'
                className='p-2 border border-solid rounded-lg'
                value={checkInDate}
                min={today} // ⬅ prevents past dates and tomorrow should still be valid
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  if (checkOutDate && new Date(selectedDate) > new Date(checkOutDate)) {
                    alert("Check-in date cannot be after check-out date.");
                    return;
                  }
                  setCheckInDate(selectedDate);
                }}
                disabled={isRoomInCart}
              />

            </div>

            <div className='mb-5'>
              <div className='font-inter text-md'>Check Out Date</div>
              <input
                type='date'
                className='p-2 border border-solid rounded-lg'
                value={checkOutDate}
                min={checkInDate || today} // ⬅ ensures check-out date is today or later than check-in
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  if (checkInDate && new Date(selectedDate) < new Date(checkInDate)) {
                    alert("Check-out date cannot be before check-in date.");
                    return;
                  }
                  setCheckOutDate(selectedDate);
                }}
                disabled={isRoomInCart}
              />
            </div>
            <div className='inline-flex gap-2 mb-5'>
              {
                isRoomInCart ?
                  <div className='flex'><button className='w-auto h-auto font-inter-100 font-semibold text-xs p-4 text-white align-middle border border-dashed border-white rounded-lg px-12 bg-slate-400 cursor-not-allowed' disabled>Added to Cart</button></div> :
                  <div className='flex'><Button text={'Add to Cart'} className='px-12' onClick={() => addToCart(rooms)} /></div>
              }
              <div className='flex text-red-500'><IoMdHeartEmpty size={50} /></div>
            </div>
            <div><PVDrop /></div>
            <div className="flex pt-5 gap-2 ">
              {/* Social media icons... */}
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center font-semibold text-2xl mt-20'>
          You may also like
        </div>
        <div className='overflow-x-auto mb-20'>
          <New_Summer className='' />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ViewProduct;
