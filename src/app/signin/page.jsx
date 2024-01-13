'use client'
import Image from "next/image";
import React, { useState } from "react";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
      };


  return (
    <main className="w-full h-screen flex justify-center items-center px-10 pb-24 flex-col space-y-8">
      <h1 className="font-bold text-4xl text-center">Sign In</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-10">
        {/* Left Box */}
        <div className="w-full h-full flex-1 flex justify-center items-center">
          <div
            className="w-full h-full mx-2 sm:mx-4 md:mx-8 lg:mx-24 lg:my-10"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <div className="w-full h-full flex justify-center items-center relative">
              <Image
                src="/contact.png"
                alt="Work image"
                width={500}
                height={1}
              />
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="w-full lg:flex-1 flex justify-center items-center">
            <div className="inputBox p-8 rounded-lg shadow-md max-w-md w-full">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="inputField mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="inputField mt-1 p-2 w-full border border-gray-300 rounded-md"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
