/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <motion.div initial={{
      x:-300,
      opacity: 0,
      scale: 0
    }} animate={{ x: 0 ,
    opacity: 1,
  scale:1}} 
    transition={{
      duration: 1.5,
    }}>
      <nav className="flex flex-wrap justify-between items-center py-5 ">
        <div>
          <h1 className="capitalize font-black text-xl font-custom">
            dental pro clinic
          </h1>
          <div></div>
        </div>

        <div
          className="space-y-2 md:hidden cursor-pointer border p-2 rounded"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className="w-8 h-0.5 bg-gray-100"></div>
          <div className="w-8 h-0.5 bg-gray-100"></div>
          <div className="w-8 h-0.5 bg-gray-100"></div>
        </div>

        <div
          className={
            " w-full md:block md:w-auto " +
            (navOpen
              ? " block animate-in fade-in zoom-in duration-300"
              : " hidden ")
          }
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-zinc-900 dark:border-gray-700">
            <li>
              <a
                className="cursor-pointer  font-thin block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-blue-500 md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="#"
              >
                our dentists
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-thin block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">
                services
              </a>
            </li>
            <li>
              <a className=" cursor-pointer font-thin block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">
                about
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-thin block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent">
                reviews
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-thin block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white md:dark:hover:bg-transparent ">
                locations
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex  w-40 items-center  justify-between text-xs font-custom">
          <div>location</div>

          <a className="cursor-pointer hover:bg-blue-600 hover:text-white animate-bounce bg-white text-gray-800 px-3 py-2 rounded-xl">
            call us
          </a>
        </div>
      </nav>
    </motion.div>
  );
}
