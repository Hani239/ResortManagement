"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Button from '@/component/Button'
import Image from 'next/image';
import ProfilePicture from '@/component/ProfilePicture';
import UserProfile1 from '@/Img/userprofile.jpg';
import Hani from '@/Img/Contact/Hani.jpeg';
import Khushi from '@/Img/Contact/Khushi.jpg';
import Dipesh from '@/Img/Contact/Dipesh.jpeg';
import Divyansh from '@/Img/Contact/Divyansh.jpeg';


const teamMembers = [
  {
    name: 'Hani Zala',
    role: 'Full Stack Developer',
    description: '7th Sem BE CE(b)',
    imageSrc:Hani,
  },
  {
    name: 'Khushi Sompura',
    role: 'Full Stack Developer',
    description: '7th Sem BE CE(b)',
    imageSrc:Khushi,
  },
  {
    name: 'Divyansh Patel',
    role: 'Full Stack Developer',
    description: '7th Sem BE CE(b)',
   imageSrc:Divyansh,
  },
  {
    name: 'Dipesh Mali',
    role: 'Full Stack Developer',
    description: '7th Sem BE CE(b)',
    imageSrc:Dipesh,
  },
];


export default function About(){
  return (
    <div className="min-h-screen px-20 ">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
        Meet the Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative -z-20 ">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <Image
              src={member.imageSrc}
              alt={member.name}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h2>
              <p className="text-md font-medium text-gray-600 mb-4">
                {member.role}
              </p>
              <p className="text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )

};

