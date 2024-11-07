'use client';
import Select_options from '@/component/Button';
import Create_Account from '@/component/Create_Acc_Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import { GoChevronRight } from "react-icons/go";
import "./style.css"

type Props = {};

const Register = (props: Props) => {
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setc_Password] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  // const [city,setCity]=useState('');
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    if (password !== c_password) {
      setPasswordError(true)
      return false
    }
    else {
      setPasswordError(false)
    }
    if (!username || !email || !password || !c_password || !address || !phone) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }

    // const teamData = {
    //   username,
    //   password,
    //   email,
    //   address,
    //   phone
    // };
    let response = await fetch('http://localhost:3000/api/user',{
      method: "POST",
      body: JSON.stringify({username, email, password, address, phone})
    })
    response = await response.json();
    if(response.success){
      const {result} = response
      delete result.password;
      localStorage.setItem("user",JSON.stringify(result));
      if(props.redirect?.order){
        router.push('/CheckOut')
      }
      else{
        router.push("/");
      }
      alert("Resort User Registered Successfully")
    }
  };


  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:max-w-xl">
          <div className="p-6 rounded-md border-2 shadow-md">
            <div className="">
              <div>
                <h1 className="text-4xl font-bold text-center text-gray-700">Create Account</h1>
                <h6 className="text-sm font-normal text-center text-gray-700">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                  <Link href="/privacy_policy" className='text-red-600'> privacy policy</Link>.
                </h6>
              </div>
              <br />
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
                  Username
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Enter Name' value={username} onChange={(event) => setUsername(event.target.value)}
                />
                {
                  error && !username && <span className='input-error'>Please enter valid name</span>
                }
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Enter Password' value={password} onChange={(event) => setPassword(event.target.value)}
                />
                {
                  passwordError && <span className='input-error'>Password and Confirm Password not match</span>
                }
                {
                  error && !password && <span className='input-error'>Please enter valid password</span>
                }
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Confirm Password' value={c_password} onChange={(event) => setc_Password(event.target.value)}
                />
                {
                  passwordError && <span className='input-error'>Password and Confirm Password not match</span>
                }
                {
                  error && !c_password && <span className='input-error'>Please enter valid confirm Password</span>
                }
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)}
                />
                {
                  error && !email && <span className='input-error'>Please enter valid email</span>
                }
              </div>
              <div className="mb-2">
                <label htmlFor="tel" className="block text-sm font-semibold text-gray-800">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Enter Phone Number' value={phone} onChange={(event) => setPhone(event.target.value)}
                />
                {
                  error && !phone && <span className='input-error'>Please enter valid Phone Number</span>
                }
              </div>
              <div className="mb-2">
                <label htmlFor="Address" className="block text-sm font-semibold text-gray-800">
                  Address:
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder='Enter Address' value={address} onChange={(event) => setAddress(event.target.value)}
                />
                {
                  error && !address && <span className='input-error'>Please enter valid Address</span>
                }
              </div>
              <div className="mt-4">
                {/* <Create_Account text={'Create Account'} onClick={handleSignup}/> */}
                <button className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " onClick={handleSignup} >
                  <div className="inline-block"> Create Account</div><div className="inline-block"> <GoChevronRight /> </div>
                </ button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
