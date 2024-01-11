import Image from "next/image";
import React from "react";

const Facilities = () => {
  const data = [
    {
      title: "1/2 Lunch Time",
      img: "/benefits/fc1.png",
      bg: "bg-red-200",
    },
    {
      title: "! Hour Rest Time",
      img: "/benefits/fc2.png",
      bg: "bg-yellow-200",
    },
    {
      title: "2 Times Coffee",
      img: "/benefits/fc3.png",
      bg: "bg-blue-200",
    },
    {
      title: "Prayer Time",
      img: "/benefits/fc4.png",
      bg: "bg-cyan-200",
    },
  ];
  return (
    <main className="w-full px-10 pb-24 flex flex-col space-y-8">
      <h1 className="font-bold text-4xl text-center">
        Benefits Of On-Site Work
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Box */}
        <div className="w-full lg:flex-1 hidden lg:flex justify-center items-center">
          <div
            className="w-full h-full mx-24 my-40 relative"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <Image src="/benefits/fc.png" alt="Work image" fill />
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full lg:flex-1 flex justify-center items-center">
          <div className="w-full flex flex-wrap gap-8 justify-center items-center">
            {data.map((item) => (
              <div
                className={`w-72 h-72 md:w-52 md:h-52  rounded-xl  ${item.bg} p-5 flex flex-col  justify-center items-center space-y-4`}
                key={item.title}
              >
                <div
                  className="w-4/5 h-4/5 relative"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  <Image src={item.img} alt="Work image" fill />
                </div>

                <h1
                  className="w-full text-center font-semibold text-md"

                >
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
