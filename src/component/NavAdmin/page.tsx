'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/Img/images/Logo(1).png';
import Img2 from '@/Img/Header-GreenHead.png';
import Img3 from '@/Img/NavWhite.png';
import ScrollToTop from '../Scroll_Arrow';
import Link from 'next/link';
import Cart from '../Cart';
import HamburgerMenuAdmin from '../Hamburger_MenuAdmin';
import { useRouter } from 'next/navigation';

type Props = {} & React.HTMLAttributes<HTMLElement>;

// Optional: define admin object shape if you know it
type AdminType = {
  name?: string;
  email?: string;
  [key: string]: any;
};

const NavAdmin = ({ className, children, ...props }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [admin, setAdmin] = useState<AdminType | null>(null);

  const router = useRouter();

  useEffect(() => {
    const adminStorage = localStorage.getItem('admin');
    if (adminStorage) {
      try {
        const parsedAdmin: AdminType = JSON.parse(adminStorage);
        setAdmin(parsedAdmin);
      } catch (error) {
        console.error("Failed to parse admin from localStorage", error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('admin');
    setAdmin(null);
    router.push('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <nav className='fixed md:block hidden w-full z-20'>
        <div className="relative">
          <Image src={Img2} alt="Design" className="w-screen object-cover" />
          <div className="absolute inset-2">
            <div className="flex justify-between items-center mx-12 lg:mt-3 xl:mt-5 2xl:mt-8">
              <Link href="/">
                <Image src={logo} alt="logo" className="h-10 w-auto ml-6" />
              </Link>
              <div className="ml-6 md:block hidden">
                <ul className="flex space-x-7 font-inter text-md font-medium lg:text-md xl:text-lg 2xl:text-xl">
                  <li className="text-black hover:text-red-500 cursor-pointer transition duration-300">
                    <Link href="/">Home</Link>
                  </li>
                  {admin ? (
                    <>
                      <li className="text-black hover:text-red-500 cursor-pointer transition duration-300">
                        <Link href="/AdminDash">Admin</Link>
                      </li>
                      <li className="text-black hover:text-red-500 cursor-pointer transition duration-300" onClick={logout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <li className="text-black hover:text-red-500 cursor-pointer transition duration-300">
                      <Link href="/AdminProfile">Admin</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className='fixed md:hidden w-full z-20'>
        <div className="relative">
          <Image src={Img3} alt="Nav_White" className="w-screen h-20 object-cover" />
          <div className="absolute inset-0">
            <div className="flex justify-between items-center m-4">
              <Image src={logo} alt="logo" className="h-10 w-auto" />
              <div className="flex items-center text-2xl">
                <HamburgerMenuAdmin />
              </div>
            </div>
          </div>
        </div>
        {cartOpen && <Cart />}
      </nav>

      <ScrollToTop />
    </div>
  );
};

export default NavAdmin;
