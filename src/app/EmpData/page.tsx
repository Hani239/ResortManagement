import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import EmpData from "@/component/EmpData/index"
import { HiPencilAlt } from "react-icons/hi";


export default function Emply(){
    return (
        <>
        <Nav></Nav>
            <div className="pt-40">
       <EmpData></EmpData>
       </div>
        </>
    );
}