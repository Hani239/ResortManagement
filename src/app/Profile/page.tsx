'use client'
import Footer from "@/container/Footer";
import Login from "@/component/Login";
import Nav from "@/component/Nav_Exp";
import Register from "@/component/Register";
import { useEffect, useState } from "react";
import Link from "next/link";
import CheckOut from "@/container/CheckOut";
import UserProfile from "@/component/User/page";

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined };
  };
  
  const Profile = ({ searchParams }: Props) => {
    const [user, setUser] = useState<any>(null); // user = null initially
    const [login, setLogin] = useState(true);
  
    // Check if user is logged in
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (e) {
          console.error("Failed to parse user data", e);
        }
      }
    }, []);
    return (
        <main className=''>
            <div className="relative flex z-10">
                <Nav></Nav>
            </div>
            <div className="mt-20 pb-20">
                {
                    user ?
                        <>
                            <UserProfile />
                        </> :
                        <>
                            {/* {login ? <Login redirect={props.searchParams} /> : <Register redirect={props.searchParams} />} */}
                            {login ? <Login redirect={searchParams} /> : <Register redirect={searchParams} />}

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