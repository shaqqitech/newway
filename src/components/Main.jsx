import React from "react";
import MainPic from "../../public/MainPic.png";
import Image from "next/image";

const Main = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center lg:flex-row">
      <div className="w-full lg:w-1/2 h-full flex justify-center lg:items-end items-center flex-col px-10" data-aos="fade-up"  data-aos-duration="400">
        <div className="w-3/4 lg:w-4/5 text-center lg:text-left space-y-5">
          <h1 className="font-bold text-4xl md:text-7xl">
            The New
            <br />
            Way to work.
          </h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full">
            More Details
          </button>
          <div className="flex flex-col lg:flex-row space-y-2 justify-center lg:justify-start  items-center space-x-4">
            <input type="text" className="px-3 py-1 rounded-full ring-2 ring-blue-500 focus:ring-4 outline-none placeholder:text-sm" placeholder="Subscribe to the NewsLetter" />
            <button className="w-fit px-3 py-1 rounded-full bg-orange-400 hover:bg-orange-500 font-semibold text-sm">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex justify-start items-center md:items-start" data-aos="fade-up"  data-aos-duration="500">
        <div className="w-3/4 md:w-4/5 md:pl-10">
          <Image src={MainPic} alt="Home Pic" sizes="100%" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
};

export default Main;
