'use client';
import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";

import Sidebar from "@/component/Sidebar/page"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};
const editTopicForm = (props: Props) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter();
    const [error, setError] = useState(false);

    interface UserName {
        _id: string
        username: string;
        email: string;
        address: string;
        phone: number;
    }

    const handleUserAdd = async () => {
        if (!username || !email || !address || !phone) {
            setError(true)
            return false
        }
        else {
            setError(false)
        }

        const userData = {
            username,
            email,
            address,
            phone,
        };
    }

    const [userNames, setUserNames] = useState<UserName[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/user/createuser`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserNames(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="w-full h-full">
            <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
                <Sidebar></Sidebar>
            </div>
            <div className="inline-block w-3/4">
                <div className="px-20">
                    <form >

                        <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
                            ADD
                        </button>
                        {/* <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
                            UPDATE
                        </button> */}
                        <br />

                        <br /><br />
                        {/* <input className="border-2 p-2 w-full " type="text" placeholder="User Name" ></input><br></br>
                        <br></br>
                        <input className="border-2 p-2 w-full " type="text" placeholder="Email" ></input>
                        <br />
                        <br></br>
                        <input className="border-2 p-2 w-full " type="text" placeholder="Phone No." ></input><br></br>
                        <br></br>
                        <input className="border-2 p-2 w-full " type="text" placeholder="Address" ></input>
                        <br /><br />
                        <input className="border-2 p-2 w-full " type="text" placeholder="Aadhar Card Number" ></input>
                        <br />
                        <br></br> */}
                    </form>

                        <div>


                            {userNames.map(useN => (
                                <div key={useN._id}>
                                    <div className=" mt-5 border-2">
                                    <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                                    <CgRemove />
                                    <h3 className="text-xl m-2">Username:-  {useN.username}</h3>
                                    <div className="text-l m-2">Email:-  {useN.email}</div>
                                    <div className="text-l m-2">Address:-  {useN.address}</div>
                                    <div className="text-l m-2">Phone no.:-  {useN.phone}</div>
                                    </div>
                                </div>
                            ))}


                            {/* <div className="text-l m-2">123456789234</div> */}
                        </div>
                    
                    
                        {/* <div>
                                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                                <CgRemove />

                                <h3 className="text-xl m-2">Sompura Khushi</h3>
                                <div className="text-l m-2 ">KhushiSom@gmail.com</div>
                                <div className="text-l m-2">9090909090</div>
                                <div className="text-l m-2">Kudasan , Gandhinagar</div>
                                <div className="text-l m-2">123456789234</div>
                            </div> */}
                    
                </div>
            </div>
        </div>
    );
}
export default editTopicForm;