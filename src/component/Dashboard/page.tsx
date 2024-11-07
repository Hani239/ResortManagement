import Link from "next/link";
import Image from "next/image"
import User from "@/app/Img/User.png"
import Room from "@/app/Img/Room.png"
import FoodC from "@/app/Img/FoodCat.png"
import Food from "@/app/Img/Food.png"
import Emp from "@/app/Img/Emp.png"
import Event from "@/app/Img/Event.png"
import Ame from "@/app/Img/Ame.png"
import Sidebar from "@/component/Sidebar/page"

export default function editTopicForm(){
    return (
        <div className="w-full h-full">
            <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
                <Sidebar></Sidebar>
            </div>
            <div className="inline-block w-3/4">
            <div className="flex text-l px-20 float-start pt-20 gap-5 mt-0 shrink-0 flex-wrap items-center">
            <Link href="/UserData">
                <div className="border-2 w-72 p-5  h-64">
                    <center>
                    <Image src={User} alt={""} height={180}/>
                    <div>User Data</div>
                    </center>
                </div>    
            </Link>
            <Link href="/RoomData">
                <div className="border-2  w-72 p-5 h-64">
                   <center>
                   <Image src={Room} alt={""} height={180}/>
                    <div>Room Data</div>
                   </center>
                </div>    
            </Link>
            {/* <Link href="/FoodData">
                <div className="border-2 w-72 p-5 h-64">
                <center>
                    <Image src={FoodC} alt={""} height={180}/>
                    <div>Food Category Data</div>
                </center>
                </div>    
            </Link> */}
            <Link href="/FoodData">
                <div className="border-2 w-72 p-5 h-64">
                <center>
                    <Image src={Food} alt={""} height={180}/>
                    <div>Food Data</div>
                </center>
                </div>    
            </Link>
            <Link href="/EmpData">
                <div className="border-2 w-72 p-5 h-64">
                    <center>
                    <Image src={Emp} alt={""} height={180}/>
                    <div>Employee Data</div>
                    </center>
                </div>    
            </Link>
            <Link href="/EventData">
                <div className="border-2 w-72 p-5 h-64">
                    <center>
                      <Image src={Event} alt={""} height={180}/>
                         <div>Event Data</div>
                    </center>
               
                </div>    
            </Link>
            <Link href="/AmeData">
                <div className="border-2 w-72 p-5 h-64">
               
                    <center>
                        <Image src={Ame} alt={""} height={180}/>
                        
                        <div>Amenity Data</div>
                    </center>
                </div>    
            </Link>
            </div>
       </div>
        </div>
       
    );
}