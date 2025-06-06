'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/Img/images/Logo(1).png'
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from 'react-icons/ai';
import { IoCartOutline } from "react-icons/io5";
import Img2 from '@/Img/Header-GreenHead.png';
import Img3 from '@/Img/NavWhite.png'
import { IoMenu } from "react-icons/io5";
import arrow from '@/Img/icons8-top-100.png'
import ScrollToTop from '../Scroll_Arrow';
import Link from 'next/link';
import Cart from '../Cart';
import HamburgerMenu from '../Hamburger_Menu';

type Props = { cartData?: any; removeCartData?: boolean;} & React.HTMLAttributes<HTMLElement>;

interface NavProps {
    className?: string;
    children?: React.ReactNode;
    cartData?: any;
    removeCartData?: boolean;
  }

  const Nav: React.FC<NavProps> = ({ className, children, cartData, removeCartData }) => {  
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    // const [admin, setAdmin] = useState();
    // const [cartNumber, setCartNumber] = useState(0);
    // const [cartItem, setCartItem] = useState([]);
    const [admin, setAdmin] = useState<any>(undefined);
const [cartItem, setCartItem] = useState<any[]>([]);
const [cartNumber, setCartNumber] = useState<number>(0);

  
useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    const parsedAdmin = storedAdmin ? JSON.parse(storedAdmin) : undefined;
    setAdmin(parsedAdmin);

    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    setCartItem(parsedCart);
    setCartNumber(parsedCart.length);
  }, []);

  useEffect(() => {
    if (cartData) {
      const newItem = JSON.parse(JSON.stringify(cartData));
      const updatedCart = [...cartItem, newItem];
      setCartItem(updatedCart);
      setCartNumber(updatedCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }, [cartData]);

  useEffect(() => {
    if (removeCartData) {
      const updatedCart = cartItem.filter((item) => item._id !== removeCartData);
      setCartItem(updatedCart);
      setCartNumber(updatedCart.length);
      if (updatedCart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        localStorage.removeItem("cart");
      }
    }
  }, [removeCartData]);

  const handleCartClick = () => {
    if (cartNumber > 0) setCartOpen(!cartOpen);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

    return (
        <div className=''>
            <nav className='fixed md:block hidden'>
                <div className="">
                    <div className="relative z-10">
                        <Image
                            src={Img2}
                            alt="Design"

                            className="w-screen object-cover"
                        />
                        <div className="absolute inset-2">
                            <div className="flex justify-between items-center mx-12 lg:mt-3 xl:mt-5 2xl:mt-8">
                                <Link href="/" ><Image
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto ml-6"
                                /></Link>
                                <div>
                                    <div className="ml-6 md:block hidden">
                                        <ul className="flex space-x-7 font-inter text-md font-medium lg:text-md xl:text-lg 2xl:text-xl">
                                            <li className=" font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300  "><a href="/">Home</a></li>
                                            <li><Link href="/List" className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 ">Accomodation</Link></li>
                                            <li><Link href="/Evnt" className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 ">Events</Link></li>                                            
                                            <li><Link href="/About" className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 ">About</Link></li>
                                            <li><Link href="/Contact" className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 ">Contact</Link></li>
                                          

                                            {/* <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><a href="#">About</a></li>
                                            <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><a href="#">Contact</a></li>
                                            <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><Link href="/AdminProfile">Admin</Link></li> */}

                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-center text-2xl">
                                    <Link href="/Wishlist"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-red-500 cursor-pointer"><IoMdHeartEmpty /></div></Link>
                                    {/* <Link href="/Profile"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-green-500 cursor-pointer transform transition-transform duration-300 hover:scale-150"><AiOutlineUser /></div></Link> */}
                                    <div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-green-500 cursor-pointer relative group"
                                        onMouseEnter={toggleDropdown}
                                        onMouseLeave={toggleDropdown}
                                    >
                                        <AiOutlineUser />
                                        {showDropdown && (
                                            <ul className="absolute top-5 left-0 mt-2 w-36 bg-white rounded-md shadow-lg py-2">

                                                <li><Link href="/Profile" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200">User Profile</Link></li>
                                                {/* <div><Link href="/AdminProfile" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200">Admin Profile</Link></div> */}
                                                {
                                                    admin ?
                                                        <>
                                                            <li><Link href="/AdminDash" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200">Admin Profile</Link></li>
                                                        </> :
                                                        <>
                                                            <li><Link href="/AdminProfile" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200">Admin Profile</Link></li>
                                                        </>
                                                }

                                            </ul>
                                        )}
                                    </div>
                                    <div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-blue-600 cursor-pointer relative" onClick={cartNumber > 0 ? handleCartClick : undefined}><IoCartOutline />
                                        <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-sm rounded-full flex items-center justify-center">
                                        {cartNumber ? cartNumber : 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {cartOpen && <Cart />}
            </nav>
            {/* <div className=''> */}
            <nav className='fixed md:hidden '>
                {/* min-[767px] */}
                <div className="relative z-10">
                    <div >
                        <Image
                            src={Img3}
                            alt="Nav_White"
                            className="w-screen h-20 object-cover"
                        />
                    </div>
                    <div className="absolute inset-0">
                        <div className="flex justify-between items-center m-4">
                            <div>
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto relative"
                                />
                            </div>
                            <div className="flex items-center text-2xl right-0 absolute">
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Wishlist"><div className="h-8 w-8 inline-flex justify-center items-center"><IoMdHeartEmpty /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Profile"><div className="h-8 w-8 inline-flex justify-center items-center"><AiOutlineUser /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <div className="h-8 w-8 inline-flex justify-center items-center relative" onClick={handleCartClick}><IoCartOutline />
                                        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                        {cartNumber ? cartNumber : 0}
                                        </span>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="h-10 w-10 inline-flex justify-center items-center"><HamburgerMenu /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image
                src={arrow}
                alt="scroll-up arrow"
                className="top-96 right-0 absolute"
            /> */}

                </div>
                {cartOpen && <Cart />}
            </nav>
            <ScrollToTop />
        </div>
    );
};

export default Nav;
