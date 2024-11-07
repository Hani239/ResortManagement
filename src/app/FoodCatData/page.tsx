import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import FoodCatData from "@/component/FoodData/page"
import { HiPencilAlt } from "react-icons/hi";


export default function FoodCat(){
    return (
        <>
        <Nav></Nav>
        <div className="pt-40">
       <FoodCatData></FoodCatData>
       </div>
        </>
    );
}