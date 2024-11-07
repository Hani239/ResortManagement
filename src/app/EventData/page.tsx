import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import EventData from "@/component/EventData/page"
import { HiPencilAlt } from "react-icons/hi";


export default function Event(){
    return (
        <>
        <Nav></Nav>
        <div className="pt-40">
       <EventData></EventData>
       </div>
        </>
    );
}