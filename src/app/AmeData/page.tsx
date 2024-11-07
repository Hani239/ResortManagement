import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import AmeData1 from "@/component/AmeData/page"
import { HiPencilAlt } from "react-icons/hi";


export default function AmeData(){
    return (
        <>
             <Nav></Nav>
        <div className="pt-40">
       <AmeData1></AmeData1>
       </div>
        </>
       
    );
}