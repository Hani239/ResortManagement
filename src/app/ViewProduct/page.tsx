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
  params: any
}

const ViewProduct = (props: Props) => {
  const [rooms, setRooms] = useState();
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [cartData, setCartData] = useState();
  const [removeCartData, setRemoveCartData] = useState()
  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cart')));
  const [cartIds, setCartIds] = useState(cartStorage ? () => cartStorage.map((item) => item._id) : []);

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
    const id = props.searchParams.id
    console.log(id)
    let response = await fetch("http://localhost:3000/api/user/" + id);
    response = await response.json();
    if (response.success) {
      setRooms(response.details)
    } else {
      alert("Room List Not Loading")
    }
  }

  const addToCart = async (item) => {
    let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = { ...item, checkInDate, checkOutDate };

    const existingItemIndex = cartStorage.findIndex(cartItem => cartItem._id === item._id);
    if (existingItemIndex >= 0) {
      cartStorage[existingItemIndex] = cartItem;
    } else {
      cartStorage.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartStorage));
    setCartStorage(cartStorage);
    setCartIds(cartStorage.map(item => item._id));
    setCartData(cartItem);
    setRemoveCartData();
  };

  const removeFromCart = async (id) => {
    setRemoveCartData(id);
    var localIds = cartIds.filter(item => item !== id);
    setCartData()
    setCartIds(localIds)
  }

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
                  <div className='flex'><Button text={'Remove From Cart'} className='px-12' onClick={() => removeFromCart(rooms?._id)} /></div> :
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
