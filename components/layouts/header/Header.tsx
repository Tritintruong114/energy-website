"use client";
import { Logo, Menu } from "@/components/elements";
import headerData from "@/data/header.json";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import cx from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const size = useWindScreenowSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);
  return (
    <header className="fixed border-b z-50 sm:border-none bg-secondary-950 sm:bg-transparent w-full py-6">
      <div className="container flex justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex gap-8 list-none bg-secondary-950 sm:bg-transparent absolute sm:translate-y-0 sm:relative h-screen sm:h-fit w-screen sm:w-fit right-0 top-0 text-white flex-col items-center justify-center sm:flex-row duration-300",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="capitalize" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>

        <div className="flex z-10">
          <button
            onClick={toggleMenu}
            className="p-3 sm:hidden flex items-center justify-center border rounded-full"
          >
            <Menu />
          </button>
          <button className="border hover:bg-primary-300 hover:text-black duration-300 py-3 px-5 rounded-full text-white">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
