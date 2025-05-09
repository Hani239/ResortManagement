import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from '@/component/Button'
import Image from 'next/image';
import ProfilePicture from '@/component/ProfilePicture';
import UserProfile1 from '@/Img/userprofile.jpg';
import Imgg from '@/Img/images/Images/room/bee6.jpg';
import Img2 from '@/Img/images/Images/room/a1 (1).jpg';

type Props = {}

// Define user and order types if needed
type User = {
  _id: string;
  [key: string]: any;
};

type Order = {
  rooms: any;
  order: any;
  _id: string;
  // Add other order fields here
};

const UserProfile = (props: Props) => {

  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [myOrders, setMyOrders] = useState<Order[]>([]);
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const parsedUser: User | undefined = storedUser ? JSON.parse(storedUser) : undefined;
    setUser(parsedUser);

    setCheckInDate(localStorage.getItem('checkInDate'));
    setCheckOutDate(localStorage.getItem('checkOutDate'));

    if (parsedUser?._id) {
      getMyOrders(parsedUser._id);
    }
  }, []);

  const getMyOrders = async (userId: string) => {
    try {
      const response = await fetch(`/api/order?id=${userId}`);
      const data = await response.json();

      if (data.success) {
        setMyOrders(data.result);
      } else {
        console.error("Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/'); // should work inside use client component
  };
  return (

    <div className="flex flex-col md:flex-row gap-4 w-full py-10 px-4 md:px-20 items-center">
  {/* Profile Card */}
  <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 max-w-md">
    <div className="flex flex-col items-center">
      <ProfilePicture src={UserProfile1} alt="User Name" />
      <h1 className="text-2xl font-semibold mt-4 text-center">{user?.username}</h1>
      <p className="text-center mt-2 text-gray-700 text-sm">
        Welcome {user?.username}! You can browse your profile here.
      </p>
    </div>
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Details</h2>
      <div className="flex flex-col space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Email:</span>
          <span className="text-gray-800 text-right">{user?.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Location:</span>
          <span className="text-gray-800 text-right">{user?.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Phone:</span>
          <span className="text-gray-800 text-right">{user?.phone}</span>
        </div>
        <div className="flex justify-center mt-4">
          <Button text="Logout" onClick={logout} />
        </div>
      </div>
    </div>
  </div>

  {/* Bookings */}
  <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/3 max-w-4xl">
    <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
    {myOrders.map((item, index) => (
      <div key={index} className="w-full p-4 mb-4 border-2 rounded-lg">
        <div className="flex justify-between items-center flex-wrap">
          <h3 className="font-semibold text-md">Order #{index + 1}</h3>
          <span className="text-green-900 font-semibold text-sm">Paid</span>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <p className="text-sm text-gray-600">Total amount:</p>
          <p className="text-green-900 font-semibold text-sm">₹{item.order.amount}</p>
        </div>

        <h4 className="mt-3 font-medium">Rooms:</h4>
        <ul className="space-y-4 mt-2">
          {item.rooms.map((room: any, idx: any) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-full sm:w-28">
                <Image
                  src={room?.img_path}
                  alt="Room Image"
                  width={112}
                  height={112}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="flex-1 text-sm space-y-1">
                <div><span className="font-medium">Name:</span> {room?.roomname}</div>
                <div><span className="font-medium">Price:</span> ₹{room?.price}</div>
                <div><span className="font-medium">Qty:</span> 1</div>
                {/* <div><span className="font-medium">Date:</span> {checkInDate} to {checkOutDate}</div> */}
               
              </div>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

  )

};

export default UserProfile;