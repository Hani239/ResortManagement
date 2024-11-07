import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";

import Sidebar from "@/component/Sidebar/page"
export default function Amenity(){
    return (
        <div className="w-full h-full">
        <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
            <Sidebar></Sidebar>
        </div>
        <div className="inline-block w-3/4">
        <div className="px-20">
        <form >
           
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">        
                 ADD
            </button>
            {/* <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
                UPDATE
            </button> */}
           <br />
       
         <br /><br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Id" ></input><br></br>
         <br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Amenity Name" ></input><br></br>
         <br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Discription" ></input>
         <br />
         <br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Price" ></input><br></br>
         <br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Location" ></input>
         <br /><br />
        
            
       </form>
       <div className=" border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove />

                <h3 className="text-xl m-2">Swimming Pool</h3>
                <div className="text-l m-2">Have The Swimming Experiance With Luxury 8 feet, 6 feet and 4 feet Pools</div>
                <div className="text-l m-2">Free If You Checked In Otherwise 200 per hour</div>
               
            </div>
        </div>
       
       </div>
       </div>
       </div>
    );
}