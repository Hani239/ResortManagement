'use client'
import Footer from "@/container/Footer";
import Login from "@/component/Login";
import Nav from "@/component/Nav_Exp";
import Register from "@/component/Register";
import { useState } from "react";
import Link from "next/link";
import CheckOut from "@/container/CheckOut";
import UserProfile from "@/component/User/page";

type Props = {}

const Profile = (props: Props) => {
    const userStorage = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(userStorage ? userStorage : undefined);
    const [login, setLogin] = useState(true);
    console.log("order flag", props)
    return (
        <main className=''>
            <div className="relative flex z-10">
                <Nav></Nav>
            </div>
            <div className="mt-48 pb-20">
                {
                    user ?
                        <>
                            <UserProfile />
                        </> :
                        <>
                            {login ? <Login redirect={props.searchParams} /> : <Register redirect={props.searchParams} />}

                            <p className="mt-4 text-sm text-center text-gray-700">
                                <button className='font-medium text-red-600 hover:underline' onClick={() => setLogin(!login)}>
                                    {login ? "Don't have account? SignUp" : "Already have account? Login"}
                                </button>
                            </p>
                        </>
                }
            </div>
            <div>
                <Footer />
            </div>
        </main>
    )
}

export default Profile;