import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SlPlus } from "react-icons/sl";


function Hero() {
  // eslint-disable-next-line no-unused-vars
  const [text, count] = useTypewriter({
    words: ["Your dream is our care "],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="pt-20 bg-white text-gray-900 rounded-2xl px-5">
      <h1 className="text-6xl sm:text-center pb-20">
        <span className=" font-custom ">{text}</span>
        <Cursor  cursorColor="white" />
      </h1>

      <div className="w-64 mx-auto pb-20 ">
        <button className="hover:bg-blue-900 bg-blue-700 rounded-md p-3 capitalize text-white ">
          book your appointents online
        </button>
      </div>

      <div className="capitalize sm:grid grid-cols-4 gap-4 mt-12 font-custom">
        <div className=" mb-2 h-40">
            <h1 className="font-bold">Best  deals</h1>
            <button href="#" className="cursor-pointer text-gray-400 underline text-xs">view all services</button>
        </div>
        <div className="flex flex-col justify-between mb-2 h-40 bg-zinc-900 text-white rounded-xl p-5">
            <div className="flex justify-between ">
                <p className="text-gray-300">online consultations</p>
                <p className="text-gray-400">1</p>
            </div>
            <SlPlus className="hover:text-blue-500  cursor-pointer text-3xl  text-gray-300  rounded-full p-1" />

        </div>
        <div className="flex flex-col justify-between mb-2 h-40 rounded-xl bg-gray-100 p-5">
        <div className="flex justify-between ">
                <p className="text-gray-600">best dentist</p>
                <p className="text-gray-400">2</p>
            </div>

            <SlPlus className="text-3xl hover:text-blue-500 cursor-pointer  text-gray-600  rounded-full p-1" />

        </div>
        <div className="flex flex-col justify-between mb-2 h-40 rounded-xl bg-gray-100 p-5">
        <div className="flex justify-between ">
                <p className="text-gray-600">20+ clinics</p> 
                <p className="text-gray-400">3</p>
            </div>

            <SlPlus className="text-3xl hover:text-blue-500 cursor-pointer  text-gray-600  rounded-full p-1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
