import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Button from '@/component/Button'
import Image from 'next/image';
import ProfilePicture from '@/component/ProfilePicture';
import UserProfile1 from '@/Img/userprofile.jpg';
import Imgg from '@/Img/images/Images/room/bee6.jpg';
import Img2 from '@/Img/images/Images/room/a1 (1).jpg';




export default function About(){
  return (
   
    <div className=" min-h-screen px-20">
    <div className="container mx-auto text-center py-12">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-8">
        Welcome to Paradise Pulse
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
        Nestled in the serene landscapes of Paradise Pulse is your perfect getaway from the hustle and bustle of city life. Our resort offers a unique blend of luxury, comfort, and nature, making it an ideal destination for relaxation and rejuvenation.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={Imgg}
            alt="Resort Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">
            Our Story
          </h2>
          <p className="text-md text-gray-600 mb-6">
            Established in 2000, Paradise Pulse has been a sanctuary for travelers looking for an escape. Our commitment to providing exceptional service and memorable experiences has made us one of the top resorts in Mahudi.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-left text-md text-gray-600 space-y-2">
            <li>Luxurious accommodations with modern amenities</li>
            <li>Fine dining with local and international cuisines</li>
            <li>Food order from room</li>
            <li>Spa and wellness treatments</li>
            <li>Event spaces for weddings, conferences, and retreats</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    )

};

