import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import RoomData from "@/component/RoomData/index"
import { HiPencilAlt } from "react-icons/hi";
import NavAdmin from "@/component/NavAdmin/page";


export default function Roomie(){
    return (
        <>
        <NavAdmin/>
        <div className="pt-40">
            <RoomData params={undefined}></RoomData>
       </div>
        </>
    );
}