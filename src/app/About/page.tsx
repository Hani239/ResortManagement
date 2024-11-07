import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import About from "@/component/About/page"
import Footer from "@/container/Footer"
import { HiPencilAlt } from "react-icons/hi";


export default function Foodie(){
    return (
       <>
       <Nav></Nav>
       <div className="pt-40">
       <About></About>
       </div>
       <Footer />
       </>
    );
}