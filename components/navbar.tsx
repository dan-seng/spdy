"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
         <Image 
         src="/images/logo.png"
         alt="Logo"
         width={70}
         height={70}
         className="pointer-cursor hover:scale-125 hover:translate-y-1 transition-all duration-400"
         />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-red-800 font-bold links">
          <Link href="#services" className=" hover:text-black hover:translate-y-1 hover:scale-125 transition-all duration-300 cursor-pointer">Services</Link>
          <Link href="#projects" className=" hover:text-black hover:translate-x-1 hover:scale-125 transition-all duration-300 cursor-pointer">Projects</Link>
          <Link href="#contact" className=" hover:text-black hover:translate-y-1 hover:scale-125 transition-all duration-300 cursor-pointer">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 links hover:text-black hover:translate-x-1 transition-all duration-300">
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
