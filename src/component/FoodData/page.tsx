'use client';
import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";

import Sidebar from "@/component/Sidebar/page"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import { GoChevronRight } from "react-icons/go";
// export default function editTopicForm() {
type Props = {};

const editTopicForm = (props: Props) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [id, setId] = useState('');
    const [foodcatname, setFoodcatname] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const router = useRouter();
    const [error, setError] = useState(false);

    interface FoodCat {
        _id: string;
        foodcatname: string;
        category: string;
        description: string;
        price: number;
    }


    const handleFoodCatAdd = async () => {
        if (!id || !foodcatname || !category || !description || !price) {
            setError(true)
            return false
        }
        else {
            setError(false)
        }

        const foodCatData = {
            id,
            foodcatname,
            category,
            description,
            price
        };

        try {
            const response = await fetch(`${API_BASE_URL}/user/foodcat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(foodCatData),
            });

            if (!response.ok) {
                const message = await response.text();
                throw new Error("Request failed: " + message);
            }

            const data = await response.json();
            alert("Food Category added Successfully")
            router.push("/")
            console.log("Food Category Successfully", data);
        } catch (error) {
            console.log(error)
            alert("Food Category not added")
            console.error("Food Category not added", error);
        }
    };

    // useEffect(() => {
    //     const fetchFoodCats = async () => {
    //         try {
    //             const response = await fetch(`${API_BASE_URL}/user/foodcat`); // Assuming your backend endpoint is '/api/foodcats'
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setFoodCats(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchFoodCats();
    // }, []);
    // const YourComponent: React.FC = () => {

    //Fetch Data
    const [foodCats, setFoodCats] = useState<FoodCat[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/user/foodcat`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFoodCats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // }

    return (
        <div className="w-full h-full">
            <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
                <Sidebar></Sidebar>
            </div>
            <div className="inline-block w-3/4">
                <div className="px-20">
                    <form >

                        <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={handleFoodCatAdd}>
                            ADD
                        </button>
                        {/* <button className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " onClick={handleFoodCatAdd} >
                            <div className="inline-block"> ADD </div><div className="inline-block"> <GoChevronRight /> </div>
                        </ button> */}
                        {/* <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
                            UPDATE
                        </button> */}
                        <br />

                        <br /><br />
                        Id:
                        <input
                            type="text"
                            className="border-2 p-2 w-full "
                            placeholder="Id"
                            value={id} onChange={(event) => setId(event.target.value)}
                        />
                        {
                            error && !id && <span className='input-error'>Please enter valid id</span>
                        }

                        Name:
                        <input
                            type="text"
                            className="border-2 p-2 w-full "
                            placeholder="Name"
                            value={foodcatname} onChange={(event) => setFoodcatname(event.target.value)}
                        />
                        {
                            error && !foodcatname && <span className='input-error'>Please enter valid Food Category Name</span>
                        }


                        Category:
                        <input
                            type="text"
                            className="border-2 p-2 w-full "
                            placeholder="Category"
                            value={category} onChange={(event) => setCategory(event.target.value)}
                        />
                        {
                            error && !category && <span className='input-error'>Please enter valid Food Category</span>
                        }

                        Description:
                        <input
                            type="text"
                            className="border-2 p-2 w-full "
                            placeholder="Description"
                            value={description} onChange={(event) => setDescription(event.target.value)}
                        />
                        {
                            error && !description && <span className='input-error'>Please enter valid Description</span>
                        }

                        Price:
                        <input
                            type="text"
                            className="border-2 p-2 w-full "
                            placeholder="Price"
                            value={price} onChange={(event) => setPrice(event.target.value)}
                        />
                        {
                            error && !price && <span className='input-error'>Please enter valid Price</span>
                        }
                    </form>

                    {foodCats.map(foodCat => (
                        <div key={foodCat._id}>
                            <div className="mt-5 border-2">
                                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                                <CgRemove />
                                <h3 className="text-xl m-2">Food Name: {foodCat.foodcatname}</h3>  
                                <div className="text-l m-2">Category: {foodCat.category}</div>
                                <div className="text-l m-2">Description: {foodCat.description}</div>
                                <div className="text-l m-2">Price: ₹{foodCat.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default editTopicForm;