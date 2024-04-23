"use client";
import headerData from "@/data/header.json";
import Link from "next/link";
import { useState } from "react";
const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center px-6 absolute z-10 w-full">
      <div className=" flex justify-between w-full items-center py-3 border-b-2 border-white">
        <Link href="/" className="font-bebas text-white text-xl">
          Watanabe
        </Link>

        <ul
          className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${showMenu ? "top-0" : "-top-[100vh]"} `}
        >
          {headerData.header.map((item, index) => {
            return (
              <>
                <li className="text-white text-base uppercase">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              </>
            );
          })}
        </ul>
        <div>
          <button
            onClick={() => toggleMenu()}
            className="text-white sm:hidden z-20 relative"
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <button className="sm:block font-bebas hidden border-2 border-white rounded-full px-3 py-1 text-white hover:bg-white hover:text-black duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
