'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoChevronRight } from "react-icons/go";

type Props = {
  redirect?: { [key: string]: string | string[] | undefined };
};

type LoginResponse = {
  success: boolean;
  result?: {
    [key: string]: any;
    password?: string;
  };
};

const Login = ({ redirect }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Indicates that we're on the client side
  }, []);

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    try {
      const res = await fetch('http://localhost:3000/api/user/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, login: true })
      });

      const response: LoginResponse = await res.json();

      if (response.success) {
        const { result } = response;
        if (result?.password) delete result.password;

        if (isClient) {
          localStorage.setItem("user", JSON.stringify(result));
        }

        if (redirect?.order) {
          router.push('/CheckOut');
        } else {
          router.push('/');
        }

        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full px-4 lg:px-0 sm:max-w-xl">
        <div className="p-6 bg-white rounded-md border-2 shadow-md">
          <form>
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
              <input
                type="email"
                value={email}
                placeholder="Enter Email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && !email && (
                <span className="text-sm text-red-600">Please enter a valid email</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <span className="text-sm text-red-600">Please enter a valid password</span>
              )}
            </div>

            <div className="mt-4">
              <button
                className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 flex items-center justify-center gap-2"
                onClick={handleLogin}
              >
                <span>Login</span> <GoChevronRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
