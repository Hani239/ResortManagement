'use client';
import React, { useState } from 'react';
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
import { useRouter } from 'next/navigation';
import HamburgerMenuAdmin from '../Hamburger_MenuAdmin';

type Props = {} & React.HTMLAttributes<HTMLElement>;
const NavAdmin = ({ className, children, ...props }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const adminStorage = localStorage.getItem('admin') && JSON.parse(localStorage.getItem('admin'));
    const [admin, setAdmin] = useState(adminStorage ? adminStorage : undefined);

    const router = useRouter();
    const logout = () => {
        localStorage.removeItem('admin');
        router.push('/') //Here this is not working so i have directly added path to link tag in logout
    }

    // const handleCartClick = () => {
    //     setCartOpen(!cartOpen); // Toggle the cart dialog visibility
    //   };
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
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
                                            {
                                                admin ?
                                                    <>
                                                        <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><Link href="/AdminDash">Admin</Link></li>

                                                    </> :
                                                    <>
                                                        <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 "><Link href="/AdminProfile">Admin</Link></li>

                                                    </>
                                            }
                                            {
                                                admin ?
                                                    
                                                    <>
                                                        <li className="font-sans text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 " onClick={logout}><Link href="/AdminProfile">Logout</Link></li>
                                                    </>:
                                                    <></>
                                            }

                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="flex items-center text-2xl">
                                    <Link href="/Wishlist"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-red-500 cursor-pointer transform transition-transform duration-300 hover:scale-150"><IoMdHeartEmpty /></div></Link>
                                    <Link href="/Profile"><div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-green-500 cursor-pointer transform transition-transform duration-300 hover:scale-150"><AiOutlineUser /></div></Link>
                                    <div className="h-10 w-10 inline-flex items-center ml-3 text-black hover:text-blue-600 cursor-pointer transform transition-transform duration-300 hover:scale-150" onClick={handleCartClick}><IoCartOutline /></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {cartOpen && <Cart/>} */}
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
                                {/* <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Wishlist"><div className="h-8 w-8 inline-flex justify-center items-center"><IoMdHeartEmpty /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                    <Link href="/Profile"><div className="h-8 w-8 inline-flex justify-center items-center"><AiOutlineUser /></div></Link>
                                </div>
                                <div className='h-8 w-8 bg-[#e8eeef] mr-2 rounded-xl'>
                                <div className="h-8 w-8 inline-flex justify-center items-center" onClick={handleCartClick}><IoCartOutline /></div>
                                </div> */}
                                <div className=''>
                                    <div className="h-10 w-10 inline-flex justify-center items-center"><HamburgerMenuAdmin /></div>
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

export default NavAdmin;
