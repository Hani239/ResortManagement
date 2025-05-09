import { useRouter } from 'next/navigation'
import React from 'react'
import Button from '@/component/Button'
import Image from 'next/image'
import Imgg from '@/Img/images/Images/room/bee6.jpg'

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6 font-playpen">
          Welcome to Paradise Pulse
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Nestled in the serene landscapes, Paradise Pulse is your perfect getaway from the hustle and bustle of city life. Our resort offers a unique blend of luxury, comfort, and nature, making it an ideal destination for relaxation and rejuvenation.
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-y-12 gap-x-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-playpen">Our Story</h2>
            <p className="text-sm md:text-md text-gray-600 mb-6">
              Established in 2000, Paradise Pulse has been a sanctuary for travelers looking for an escape. Our commitment to providing exceptional service and memorable experiences has made us one of the top resorts in Mahudi.
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4 font-playpen">What We Offer</h2>
            <ul className="list-disc list-inside text-sm md:text-md text-gray-600 space-y-2">
              <li>Luxurious accommodations with modern amenities</li>
              <li>Fine dining with local and international cuisines</li>
              <li>Food order from room</li>
              <li>Spa and wellness treatments</li>
              <li>Event spaces for weddings, conferences, and retreats</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src={Imgg}
              alt="Resort Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
