import Link from "next/link";
import Dashboard from  "@/component/Dashboard/page";
import { HiPencilAlt } from "react-icons/hi";
import Nav from "@/component/Nav_Exp";
import NavAdmin from "@/component/NavAdmin/page";


export default function Emply(){
    return (
        <div className="mt-0">
            <NavAdmin/>
            <div className="pt-20">
            <Dashboard/>
            </div>
    
       </div>
    );
}