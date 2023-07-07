"use client";
import Link from "next/link";
import React from "react";
import ModalMenu from '@/components/mobile-menu/ModalMenu'
import HamburgerMenu from "@/components/hamburger/HamburgerMenu";

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <header className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
      <div className="mx-auto container px-5">
        <div className=" uppercase items-center flex justify-between h-[80px]">
          <Link href={"/"} className="text-xl">
            Logo
          </Link>
          <nav className="hidden sm:flex sm:items-center sm:gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/resume"}>Resume</Link>
          </nav>
             <HamburgerMenu isOpen={isOpen} setOpen={setOpen}/>
             <ModalMenu isOpen={isOpen} setOpen={setOpen}/>
          {/* {isOpen && <ModalMenu isOpen={isOpen} setOpen={setOpen}/>} */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
