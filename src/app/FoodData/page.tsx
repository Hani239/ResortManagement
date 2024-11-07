import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import FoodData from "@/component/FoodData/page"
import { HiPencilAlt } from "react-icons/hi";


export default function Foodie(){
    return (
       <>
       <Nav></Nav>
       <div className="pt-40">
       <FoodData></FoodData>
       </div>
       </>
    );
}