import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import Contact from "@/component/Contact/page"
import Footer from "@/container/Footer"
import { HiPencilAlt } from "react-icons/hi";
import UserProfile from "@/component/Contact/page";


export default function Foodie(){
    return (
       <>
       <Nav></Nav>
       <div className="pt-40">
      <Contact/>
       </div>
       <Footer />
       </>
    );
}