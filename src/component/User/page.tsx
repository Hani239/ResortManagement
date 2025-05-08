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

    <div className="min-h-screen flex  gap-4 w-full py-10 pl-20 ">
      <div className="bg-white shadow-md rounded-lg p-6 w-1/3 h-full  ">
        <div className="flex flex-col items-center ">
          <ProfilePicture src={UserProfile1} alt="User Name" />
          <h1 className="text-2xl font-semibold mt-4">{user?.username}</h1>
          <p className="text-gray-600 mt-2">{user?.username}</p>
          <p className="text-center mt-4 text-gray-700">
            Welcome  {user?.username} ! You can browse your profile here.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-800">{user?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Location:</span>
              <span className="text-gray-800">{user?.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Joined:</span>
              <span className="text-gray-800">January 2023</span>
            </div>
            <center>
              <Button text={'Logout'} onClick={logout} />
            </center>
          </div>
        </div>
      </div>
      {/*details*/}
      <div className="bg-white shadow-md rounded-lg p-6 w-2/3 ">
        {/*Bookings*/}

        <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>


        {
          myOrders.map((item, index) => (
            <div key={index} className="w-full p-5 border-2">
              <h3>Order #{index + 1}<b className='text-green-900 float-right'> Paid</b></h3>
              {/* <p>Status: {item.order.status}</p> */}
              <p className='text-green-900 float-right'>Total amount: ₹{item.order.amount}</p>
              {/* <button className="float-right"><HiPencilAlt /></button>
                <CgRemove /> */}
              <h4>Rooms:</h4>
              <ul>
                {item.rooms.map((room : any, idx : any) => (
                  <li key={idx}>
                    <div className="w-1/4 block md:inline-block h-full">
                      <Image
                        src={room?.img_path}
                        // src={Imgg}
                        alt="Room Image"
                        width={96}
                        height={96}
                        className="w-full h-full"
                      />
                    </div>
                    
                    <div className="w-3/4 block md:inline-block gap-4">
                    <div className="text-l m-2">Name: {room?.roomname}</div>
                      <div className="text-l m-2">Price: ₹{room?.price} </div>
                      <div className="text-l m-2">Qty: 1</div>
                      {/* <div className="text-l m-2">Date : {checkInDate} to {checkOutDate}</div> */}
                    </div>
                  </li>
                ))}
              </ul>


            </div>
          ))
        }
      </div>
    </div>
  )

};

export default UserProfile;