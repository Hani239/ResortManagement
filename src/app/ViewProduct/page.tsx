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
  const [cartData, setCartData] = useState<any>(undefined);
  const [removeCartData, setRemoveCartData] = useState<any>();
  const searchParams = useSearchParams();
  const [cartStorage, setCartStorage] = useState<any[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  const [cartIds, setCartIds] = useState<string[]>([]);

  const router = useRouter();

  // Sync cartIds whenever cartStorage updates
  useEffect(() => {
    setCartIds(cartStorage.map((item: { _id: string }) => item._id));
  }, [cartStorage]);

  // Load room details on first render
  useEffect(() => {
    loadRooms();
  }, []);

  // Load check-in and check-out dates on first render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCheckIn = localStorage.getItem('checkInDate');
      const storedCheckOut = localStorage.getItem('checkOutDate');
      if (storedCheckIn) setCheckInDate(storedCheckIn);
      if (storedCheckOut) setCheckOutDate(storedCheckOut);
    }
  }, []);

  // Update localStorage when check-in/check-out dates change
  useEffect(() => {
    if (checkInDate) localStorage.setItem('checkInDate', checkInDate);
  }, [checkInDate]);

  useEffect(() => {
    if (checkOutDate) localStorage.setItem('checkOutDate', checkOutDate);
  }, [checkOutDate]);

  const loadRooms = async () => {
    try {
      const id = searchParams.get('id');
      console.log(id)
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

  const addToCart = (item: any) => {
    if (!item) return;

    const updatedItem = { ...item, checkInDate, checkOutDate };
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

  return (
    <div>
      <div className="relative flex z-20">
        <Nav cartData={cartData} removeCartData={removeCartData} />
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
              <div className='font-inter text-md'>Check In Date </div>
              <input type='date' className='p-2 border border-solid rounded-lg' value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)} />
            </div>
            <div className='mb-5'>
              <div className='font-inter text-md'>Check Out Date</div>
              <input type='date' className='p-2 border border-solid rounded-lg' value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)} />
            </div>
            <div className='inline-flex gap-2 mb-5'>
              {
                cartIds.includes(rooms?._id) ?
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
