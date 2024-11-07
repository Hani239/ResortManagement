import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";

import Sidebar from "@/component/Sidebar/page"
export default function editTopicForm(){
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
    <div className="w-full">
      <div className=" w-1/2 inline-block ">
        Id: <br/>
      <input className="border-2 p-2 w-full" type="text" placeholder="Id" ></input>
      Full Name: <br/>
         <input className="border-2 p-2 w-full" type="text" placeholder="Full Name" ></input>
         Email: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Email" ></input>
         Phone-No: <br/>
       
         <input className="border-2 p-2 w-full " type="text" placeholder="Phone No" ></input>
         Adhar Card Number: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Adhar Card Number" ></input>
       
           
            </div>
        <div className=" w-1/2 inline-block pl-2">
        Address: <br/>
            <input className="border-2 p-2 w-full " type="text" placeholder="Address" ></input>
         Position: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Position" ></input>
         Work-Description: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Work Description" ></input>
         Salary: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Salary" ></input>
         Year Of Joining: <br/>
         <input className="border-2 p-2 w-full " type="text" placeholder="Year Of Joining" ></input>
           
            </div>
           
      </div>
      <br/> <br/>  
        
       
       
       </form>
       <div className=" border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove/>

                <h3 className="text-xl m-2">Zala Hani</h3>
                <div className="text-l m-2">hanizala@gmail.com</div>
                <div className="text-l m-2">9090909090</div>
                <div className="text-l m-2">Sector-1 , Gandhinagar</div>
                <div className="text-l m-2">123456789234</div>
            </div>
        </div>
        <div className=" mt-5 border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove className="float-right"/>

                <h3 className="text-xl m-2">Sompura Khushi</h3>
                <div className="text-l m-2 ">KhushiSom@gmail.com</div>
                <div className="text-l m-2">9090909090</div>
                <div className="text-l m-2">Kudasan , Gandhinagar</div>
                <div className="text-l m-2">123456789234</div>
            </div>
        </div>
       </div>
       </div>
       </div>
    );
}