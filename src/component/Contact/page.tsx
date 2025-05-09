"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from '@/component/Button'
import Image from 'next/image';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Mail, Linkedin } from 'lucide-react';
import Hani from '@/Img/Contact/Hani.jpeg';
import Khushi from '@/Img/Contact/Khushi.jpg';
import Dipesh from '@/Img/Contact/Dipesh.jpeg';
import Divyansh from '@/Img/Contact/Divyansh.jpeg';

const teamMembers = [
  {
    name: 'Hani Zala',
    role: 'Full Stack Developer',
    imageSrc: Hani,
    linkedin: 'https://linkedin.com/in/hani-zala', 
    email: 'mailto:hanizalain9@gmail.com', 
  },
  {
    name: 'Khushi Sompura',
    role: 'Full Stack Developer',
    imageSrc: Khushi,
    linkedin: 'https://www.linkedin.com/in/khushi-sompura-87095a237/',
    email: 'mailto:khushisom1105@gmail.com',
  },
  {
    name: 'Divyansh Patel',
    role: 'Full Stack Developer',
    imageSrc: Divyansh,
    linkedin: 'https://www.linkedin.com/in/divyansh-patel-829557239/',
    email: 'mailto:divyanshgopal474@gmail.com',
  },
  {
    name: 'Dipesh Mali',
    role: 'Full Stack Developer',
    imageSrc: Dipesh,
    linkedin: 'https://www.linkedin.com/in/dipesh-mali-99426826b/',
    email: 'mailto:dips5696@gmail.com',
  },
];

export default function About() {
  return (
    <div className="min-h-screen px-4 md:px-20 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 font-playpen">
          Meet the Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="flex justify-center gap-6 text-gray-700">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-600 transition duration-200 ease-in-out">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={member.email} className="hover:scale-110 hover:text-rose-600 transition duration-200 ease-in-out">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
