import Image from "next/image";
import React from "react";

const Work = () => {
  const data = [
    {
      title: "from Home",
      img: "/work/work1.png",
      bg: "bg-red-200",
      btn: "bg-red-300",
      border: "red",
    },
    {
      title: "On-Site",
      img: "/work/work2.png",
      bg: "bg-yellow-200",
      btn: "bg-yellow-300",
      border: "yellow",
    },
    {
      title: "On Hybrid-Base",
      img: "/work/work3.png",
      bg: "bg-blue-200",
      btn: "bg-blue-300",
      border: "blue",
    },
  ];

  return (
    <main className="w-full px-10 pb-20 flex flex-col space-y-8 justify-center items-center overflow-hidden">
      <h1 className="font-bold text-4xl">Work Style</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {data.map((item) => (
          <div
            className={`w-52 h-80 rounded-xl  ${item.bg} p-5 flex flex-col space-y-4`}
            key={item.title}
          >
            <div
              className="w-full h-1/2 relative"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <Image src={item.img} alt="Work image" fill />
            </div>
            <div className={`w-full space-y-2 flex flex-col`} data-aos="fade-up"  data-aos-duration="500">
              <h1 className="text-center font-semibold text-lg">
                {item.title}
              </h1>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            <button
              className={`px-2 py-1  ${item.btn} border-2 border-${item.border}-500 font-semibold rounded-full border-2`}
            >
              Apply
            </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Work;
