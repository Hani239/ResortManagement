import Link from "next/link";
import Image from "next/image"
import User from "@/app/Img/User.png"
import Room from "@/app/Img/Room.png"
import FoodC from "@/app/Img/FoodCat.png"
import Food from "@/app/Img/Food.png"
import Emp from "@/app/Img/Emp.png"
import Event from "@/app/Img/Event.png"
import Ame from "@/app/Img/Ame.png"
import Sidebar from "@/components/Sidebar/page"
export default function editTopicForm(){
    return (
        
       <div className=" w-full pt-20">
           <Link href="/UserData"><div className="p-3 border-b-2 w-full"><center>User Data</center> </div></Link>
           <Link href="/EmpData"><div className="p-3 border-b-2 w-full"><center>Employee Data</center> </div></Link>
           <Link href="/RoomData"><div className="p-3 border-b-2 w-full"><center>Room Data</center> </div></Link>
           <Link href="/FoodCatData"><div className="p-3 border-b-2 w-full"><center>Food Category</center> </div></Link>
           <Link href="/FoodData"> <div className="p-3 border-b-2 w-full"><center>Food Menu</center> </div></Link>
           <Link href="/EventData"><div className="p-3 border-b-2 w-full"><center>Event Data</center> </div></Link>
           <Link href="/AmeData"><div className="p-3 border-b-2 w-full"><center>Amenity Data</center> </div></Link>
       </div>
    );
}