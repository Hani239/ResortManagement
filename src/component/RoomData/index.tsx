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
    loadRooms();
}, []);

  const loadRooms = async (_id) => {
    
    let response = await fetch("http://localhost:3000/api/admin/room/"+_id);
    console.log(response);
    response = await response.json();
    if (response.success) {
      setRooms(response.result)
    } else {
        alert("Room List Not Loading")
    }
    console.log(response)
    // if (response) {
    //     console.log(response);
    // }
}

  //API call
  const handleAddFoodItem = async () => {
    console.log(roomname, price, capacity, path, description);
    if (!roomname || !price || !capacity || !path || !description) {
      setError(true);
      return false;   //Api further call na thay etle
    }
    else {
      setError(false);
    }
    // let resto_id;
    // const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    // if (restaurantData) {
    //   resto_id = restaurantData._id
    // }
    let response = await fetch("http://localhost:3000/api/admin/room", {
      method: "POST",
      body: JSON.stringify({ roomname, price, capacity, img_path: path, description })
    });
    response = await response.json();
    if (response.success) {
      alert("Room added")
      // props.setAddItem(false)
    }
    else {
      alert("Room not added")
    }
  }
  // const [roomname, setRoomname] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [capacity, setCapacity] = useState("");
  // const [image, setImage] = useState(null);
  // const [uploading, setUploading] = useState(false);
  // const [error, setError] = useState('');
  // const [rooms, setRooms] = useState([]); 
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/user/rooms`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch rooms');
  //       }
  //       const data = await response.json();
  //       setRooms(data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchRooms();
  //   return () => { // Cleanup function to prevent setting state on unmounted component
  //     setIsLoading(false); // Just a safety measure to mimic cleanup
  //   };
  // }, [API_BASE_URL]);

  // const handleImageChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   } else {
  //     console.error("No files selected");
  //     alert("No file selected.");
  //   }
  // };

  // const postDetails = () => {
  //   if (!roomname || !description || !price || !capacity || !image) {
  //     alert("All fields must be filled, and an image must be selected.");
  //     return;
  //   }

  //   setUploading(true);
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "resort-image");
  //   data.append("cloud_name", "resortcloud");

  //   fetch("https://api.cloudinary.com/v1_1/resortcloud/image/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.secure_url) {
  //         createRoom(data.secure_url);
  //       } else {
  //         throw new Error('Image upload failed');
  //       }
  //     })
  //     .catch(err => {
  //       console.error("Error uploading image:", err);
  //       alert("Failed to upload image.");
  //       setUploading(false);
  //     });
  // };

  // const createRoom = (imageUrl) => {
  //   const roomData = {
  //     roomname,
  //     description,
  //     price: Number(price),
  //     capacity: Number(capacity),
  //     imageUrl
  //   };

  //   fetch(`${API_BASE_URL}/user/createroom`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(roomData)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       alert('Room created successfully!');
  //       setRoomname('');
  //       setDescription('');
  //       setPrice('');
  //       setCapacity('');
  //       setImage(null);
  //       setRooms(prevRooms => [...prevRooms, data]); // Update the room list
  //     })
  //     .catch(error => {
  //       console.error('Error creating room:', error);
  //       alert('Failed to create room.');
  //     })
  //     .finally(() => setUploading(false));
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

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
          {rooms.map(room => (
            <div className=" border-2 w-full h-full p-5">
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
