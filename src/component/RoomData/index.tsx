"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';         // Assuming you might need this for routing
import Sidebar from "@/component/Sidebar/page"; // Ensure this path is correct
import { HiPencilAlt } from "react-icons/hi";
import { CgRemove } from "react-icons/cg";

type Props = {
  params: any
}
const RoomData = (props: Props) => {
  const [roomname, setRoomname] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState([]); 
  const [error, setError] = useState(false);


  useEffect(() => {
    const roomId = "id"; // Replace with actual _id
    loadRooms(roomId);
  }, []);

  const loadRooms = async (_id: string) => {
    try {
      const response = await fetch("https://paradise-pulse.vercel.app/api/admin/room/" + _id);
  
      const data = await response.json();
      console.log(data);
  
      if (data.success) {
        setRooms(data.result);
      } else {
        alert("Room List Not Loading");
      }
    } catch (error) {
      console.error("Error fetching room:", error);
      alert("Something went wrong while loading rooms.");
    }
}

  // API call
  const handleAddFoodItem = async () => {
    console.log(roomname, price, capacity, path, description);
  
    if (!roomname || !price || !capacity || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
  
    const response = await fetch("https://paradise-pulse.vercel.app/api/admin/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomname, price, capacity, img_path: path, description }),
    });
  
    const data = await response.json(); // ✅ Now TypeScript knows this is a JS object
  
    if (data.success) {
      alert("Room added");
      // props.setAddItem(false)
    } else {
      alert("Room not added");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
        <Sidebar />
      </div>
      <div className="inline-block w-3/4">
        <div className="px-20">
          <form onSubmit={e => e.preventDefault()}>
            {/* <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={handleAddFoodItem}>
              ADD
            </button> */}
            {/* <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails}>
              UPDATE
            </button> */}
            <input className="border-2 p-2 w-full " type="text" placeholder="Name" value={roomname} onChange={e => setRoomname(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Image Path" value={path} onChange={e => setPath(e.target.value)} />
            {/* <div className="file-field input-field">
              <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div> */}
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={handleAddFoodItem}>
              Submit Post
            </button>
          </form>

          <br /><br /><br />
          {rooms.map((room:any, index) => (
            <div key={room._id || index} className=" border-2 w-full h-full p-5">
              <div>
                <button className="float-right"><HiPencilAlt /></button>
                <CgRemove />
                <div className="w-1/4 h-44 inline-block">
                  <img src={room.img_path} alt={room.roomname} className="w-full h-full object-cover object-center" />
                </div>
                <div className="w-3/4 inline-block pl-5">
                  <h3 className="text-xl m-2">{room.roomname}</h3>
                  <div className="text-l m-2">Price: ₹{room.price}</div>
                  <div className="text-l m-2">Capacity: {room.capacity} Persons</div>
                  <div className="text-l m-2">{room.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomData;
