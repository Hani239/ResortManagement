import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import UserData from "@/component/UserData/page"
import { HiPencilAlt } from "react-icons/hi";


export default function Udata(){
    return (
        <>
        <Nav></Nav>
        <div className="pt-40">
       <UserData></UserData>
       </div>
        </>
    );
}