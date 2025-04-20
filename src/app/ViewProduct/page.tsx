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
import { useRouter } from 'next/navigation';

type Props = {
  searchParams: any;
  params: any
}

const ViewProduct = (props: Props) => {
  const [rooms, setRooms] = useState<any>();
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [cartData, setCartData] = useState<any>(undefined);
  const [removeCartData, setRemoveCartData] = useState()
  // const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  const [cartStorage, setCartStorage] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // const [cartIds, setCartIds] = useState(cartStorage ? () => cartStorage.map((item) => item._id) : []);
  const [cartIds, setCartIds] = useState(
    cartStorage ? () => cartStorage.map((item: { _id: string }) => item._id) : []
  );

  // Load rooms on page load
  useEffect(() => {
    loadRooms();
  }, []);

  // Retrieve dates from localStorage on mount
  useEffect(() => {
    const storedCheckInDate = localStorage.getItem('checkInDate');
    const storedCheckOutDate = localStorage.getItem('checkOutDate');

    if (storedCheckInDate) setCheckInDate(storedCheckInDate);
    if (storedCheckOutDate) setCheckOutDate(storedCheckOutDate);
  }, []);

  // Save check-in date to localStorage when it changes
  useEffect(() => {
    if (checkInDate) {
      localStorage.setItem('checkInDate', checkInDate);
    }
  }, [checkInDate]);

  // Save check-out date to localStorage when it changes
  useEffect(() => {
    if (checkOutDate) {
      localStorage.setItem('checkOutDate', checkOutDate);
    }
  }, [checkOutDate]);

  console.log(cartIds);

  const loadRooms = async () => {
    const id = props.searchParams.id;
    console.log(id);

    const res = await fetch("http://localhost:3000/api/user/" + id);
    const data = await res.json() as { success: boolean; details: any };

    if (data.success) {
      setRooms(data.details);
    } else {
      alert("Room List Not Loading");
    }
  };

  const addToCart = async (item: { _id: any; } | undefined) => {
    if (!item) return;

    let cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = { ...item, checkInDate, checkOutDate };

    const existingItemIndex = cartStorage.findIndex((cartItem: { _id: any; }) => cartItem._id === item._id);
    if (existingItemIndex >= 0) {
      cartStorage[existingItemIndex] = cartItem;
    } else {
      cartStorage.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage));
    setCartStorage(cartStorage);
    setCartIds(cartStorage.map((item: { _id: any; }) => item._id));

    // Use 'any' here to bypass type-checking
    setCartData(cartItem);
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
