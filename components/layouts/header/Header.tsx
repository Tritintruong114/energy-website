"use client";
import { Button, Logo, Menu } from "@/components/elements";
import headerData from "@/data/header.json";

import { useWindScreenowSize } from "@/hooks/useWindowSize";
import useDetectScroll from "@smakss/react-scroll-direction";

import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const { scrollDir } = useDetectScroll();

  const pathname = usePathname();
  const isSanityStudio = pathname.startsWith("/editor");

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
    <header
      className={cx(
        " sm:border-b-2 duration-300 bg-secondary-950 border-primary-300 fixed w-full py-6",
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0",
        isSanityStudio ? "z-0" : "z-20"
      )}
    >
      <div className="container flex justify-between">
        <div className="flex justify-center items-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "list-none bg-secondary-950 sm:bg-transparent  duration-300 sm:translate-y-0 absolute h-screen top-0 left-0 w-screen justify-center flex-col sm:relative sm:h-fit sm:w-fit sm:flex-row  flex items-center text-white gap-8",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index} className="">
                  <Link className="capitalize" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>

        <div className="flex h-fit z-10">
          <button
            onClick={toggleMenu}
            className="p-3 flex items-center justify-center border w-fit sm:hidden rounded-full"
          >
            <Menu />
          </button>
          <Button variant="tetriary-reversed">Get in touch</Button>
        </div>
      </div>
    </header>
  );
};
