'use client'
import Footer from "@/container/Footer";
import Login from "@/component/Login";
import Nav from "@/component/Nav_Exp";
import Register from "@/component/Register";
import { useState } from "react";
import Link from "next/link";
import CheckOut from "@/container/CheckOut";
import UserProfile from "@/component/User/page";
import NavAdmin from "@/component/NavAdmin/page";
import LoginAdmin from "@/component/LoginAdmin";
import Dashboard from  "@/component/Dashboard/page";

type Props = {}

const Profile = (props: Props) => {
    const adminStorage = localStorage.getItem('admin') && JSON.parse(localStorage.getItem('admin'));
    const [admin, setAdmin] = useState(adminStorage ? adminStorage : undefined);
    const [login, setLogin] = useState(true);
    return (
        <main className=''>
            <div className="relative flex z-10">
                <NavAdmin/>
            </div>
            <div className="mt-48 pb-20">
                {
                    // admin ?
                    //     <>
                    //         <Dashboard/>
                    //         {/* <LoginAdmin/> */}
                    //     </> :
                    //     <>
                    //         <LoginAdmin/>
                    //         {/* <Dashboard/> */}
                    //     </>
                }
                <LoginAdmin/>
            </div>
            <div>
                <Footer />
            </div>
        </main>
    )
}

export default Profile;