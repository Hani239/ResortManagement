'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Create_Account from '@/component/Create_Acc_Button';
import { GoChevronRight } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { hasCustomGetInitialProps } from 'next/dist/build/utils';
// import { useNavigate } from 'react-router-dom';

type Props = {};

const LoginAdmin = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    console.log(email, password);
    if (!email || !password) {
      setError(true)
      return false
    }
    else {
      setError(false)
    }

    let response = await fetch('http://localhost:3000/api/admin/login', {
      method: "POST",
      body: JSON.stringify({ email, password, login: true })
    });
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("admin", JSON.stringify(result));
      // if(props.redirect?.order){
      //   router.push('/order')
      // }
      // else{
      //   router.push("/");
      // }
      router.push("/AdminDash")
      alert("Login Successfull")
    } else {
      alert("Login Failed")
    }
  }
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full px-4 lg:px-0 sm:max-w-xl">
        <div className="p-6 bg-white rounded-md border-2 shadow-md">
          <form className="">
            <div>
              <h1 className="text-4xl font-bold text-center text-gray-700">Welcome Back</h1>
              <h6 className="text-sm font-normal text-center text-gray-700">
                Please sign in to access your full account
              </h6>
            </div>
            <br />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Email address
              </label>
              {/* <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              /> */}
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setEmail(e.target.value)}
              />
              {
                  error && !email && <span className='input-error'>Please enter valid name</span>
                }
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              {/* <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              /> */}
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {
                error && !password && <div className='input-error'>Please Enter valid Password</div>
              }
            </div>
            {/* <Link href="/forget" className="block text-xs text-red-600 hover:underline">
              Forget Password?
            </Link> */}
            <div className="mt-4">
              {/* <Create_Account text={'Sign in'} /> */}
              <button className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " onClick={handleLogin} >
                <div className="inline-block">Login</div><div className="inline-block"> <GoChevronRight /> </div>
              </ button>
            </div>
          </form>
          {/* <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-red-600 hover:underline">
              Sign up
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
