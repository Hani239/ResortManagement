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
         Id: <br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Id" ></input><br></br>
         Name: <br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Name" ></input>
         Venue:<br />
         
         <input className="border-2 p-2 w-full " type="text" placeholder="Venue" ></input><br></br>
         Date : <br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Date" ></input>
         Description:
         <input className="border-2 p-2 w-full " type="text" placeholder="Discription" ></input>
         Price:
         <input className="border-2 p-2 w-full " type="text" placeholder="Amount Per Person" ></input>
          
       </form> <br />
         <br></br> 
       <div className=" border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove/>

                <h3 className="text-xl m-2">Holi Celebration</h3>
                <div className="text-l m-2">Garden</div>
                <div className="text-l m-2">27 March</div>
                <div className="text-l m-2">10:00 to 5:00 Celebration Of Colorfull Festival Come join and enjoy.. Colors Water And Much More Surprices By Us.</div>
                <div className="text-l m-2">1000</div>
            </div>
        </div>
        <div className=" mt-5 border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove/>

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