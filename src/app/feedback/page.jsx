import Image from "next/image";
import React from "react";

const Facilities = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center px-10 pb-24 flex-col space-y-8">
      <h1 className="font-bold text-4xl text-center">
        Your Feedback
      </h1>
      <div className="w-full flex flex-col lg:flex-row space-y-10">
        {/* Left Box */}
        <div className="w-full md:flex-1 hidden md:flex justify-center items-center">
          <div
            className="w-full h-full mx-24 my-40 relative"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            {/* Include your left box content here */}
            {/* Example: */}
            <Image src="/benefits/fc.png" alt="Work image" fill />
          </div>
        </div>

        {/* Feedback Form */}
        <div className="w-full lg:flex-1 flex justify-center items-center">
          <div className="w-full max-w-md p-8 bg-gray-100 rounded-md"             data-aos="fade-left"
            data-aos-duration="400">
            <h2 className="text-2xl font-bold mb-4">Give Us Feedback</h2>
            <form>
              <label htmlFor="feedback" className="block mb-2">
                Your Feedback:
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                className="w-full p-2 mb-4 border rounded-md"
              />

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Facilities;
