import Link from "next/link";

import { HiPencilAlt } from "react-icons/hi";


export default function addTopic(){
    return (
        <div className="m-10 gap-5">
         <br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Topic Title" ></input><br></br>
         <input className="border-2 p-2 w-full " type="text" placeholder="Write Discription Here" ></input>
         <br />
        <button className="p-5 bg-green-900 text-white">
            Add Topic
        </button>
       
       </div>
    );
}