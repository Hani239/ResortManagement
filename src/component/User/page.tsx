import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from '@/component/Button'
import Image from 'next/image';
import ProfilePicture from '@/component/ProfilePicture';
import UserProfile1 from '@/Img/userprofile.jpg';
import Imgg from '@/Img/images/Images/room/bee6.jpg';
import Img2 from '@/Img/images/Images/room/a1 (1).jpg';


type Props = {}

const UserProfile = (props: Props) => {
  const userStorage = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
  const checkInDate = localStorage.getItem('checkInDate');
  const checkOutDate = localStorage.getItem('checkOutDate');
  const [user, setUser] = useState(userStorage ? userStorage : undefined);


  const router = useRouter();

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    getMyOrders()
  }, [])

  const getMyOrders = async () => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    // console.log(userStorage._id)
    let response = await fetch('http://localhost:3000/api/order?id=' + userStorage._id)
    response = await response.json();
    console.log(response)
    if (response.success) {
      setMyOrders(response.result)
    }
  }
  const logout = () => {
    localStorage.removeItem('user');
    router.push('/') //Here this is not working so i have directly added path to link tag in logout
  }
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
            <div className="w-full p-5 border-2">
              <h3>Order #{index + 1}<b className='text-green-900 float-right'> Paid</b></h3>
              {/* <p>Status: {item.order.status}</p> */}
              <p className='text-green-900 float-right'>Total amount: ₹{item.order.amount}</p>
              {/* <button className="float-right"><HiPencilAlt /></button>
                <CgRemove /> */}
              <h4>Rooms:</h4>
              <ul>
                {item.rooms.map((room, idx) => (
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



        {/* <div className="w-full p-5">
          <div className="w-1/4 h-full inline-block">
            <Image src={Imgg} alt="Room Image" className="w-full h-full" />
          </div>
          <div className="w-3/4 inline-block pl-5 flex-col-2 gap-4">
            <div className="text-l m-2">Price: ₹1000  <b className='text-green-900 float-right'> Paid</b></div>
            <div className="text-l m-2">Qty: 3</div>
            <div className="text-l m-2">Date : 15/6/2024 to 18/6/2024 [3 Days]</div>
          </div>
        </div> */}


        {/* <h2 className="text-xl font-semibold mb-4">Your Events</h2>
        <div className="w-full p-5">
          <div className="w-1/4 h-full inline-block">
            <Image src={Imgg} alt="Room Image" className="w-full h-full" />
          </div>
          <div className="w-3/4 inline-block pl-5 flex-col-2 gap-4">
            <div className="text-l m-2">Price: ₹3000  <b className='text-green-900 float-right'> Paid</b></div>
            <div className="text-l m-2">Qty: 2</div>
            <div className="text-l m-2">Date : 15/6/2024 to 18/6/2024 [3 Days]</div>
          </div>


        </div> */}



        {/* <div className="w-full p-5">
          <div className="w-1/4 h-full inline-block">
            <Image src={Imgg} alt="Room Image" className="w-full h-full" />
          </div>
          <div className="w-3/4 inline-block pl-5 flex-col-2 gap-4">
            <div className="text-l m-2">Price: ₹3000  <b className='text-green-900 float-right'> Paid</b></div>
            <div className="text-l m-2">Qty: 2</div>
            <div className="text-l m-2">Date : 15/6/2024 to 18/6/2024 [3 Days]</div>
          </div>
        </div> */}




      </div>



    </div>
  )

};

export default UserProfile;