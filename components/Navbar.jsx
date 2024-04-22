"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Call, Instagram, Facebook } from "iconic-react";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 shadow-md fixed w-full z-10 top-0 px-2">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <div>
                <a href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">
                    <Image
                      src="/img/logo-buy-cars.webp"
                      width={50}
                      height={50}
                      alt="Buycars"
                      className="logo"
                      priority
                    />
                  </span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
                >
                  Inicio
                </Link>
                <Link
                  href="/stock"
                  className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
                >
                  Stock
                </Link>
                <Link
                  href="/nosotros"
                  className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contacto"
                  className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="bg-cyan-200 rounded-full p-1 mb-2 flex items-center justify-center md:p-2"
                style={{ margin: "auto", marginRight: "10px" }}
              >
                <Link
                  href="https://web.facebook.com/buycars.chile?mibextid=LQQJ4d&rdid=wuIoHHMcbZcjkuew"
                  target="_blank"
                >
                  <Facebook size="24" color="#000000" />{" "}
                </Link>
              </div>

              <div
                className="bg-cyan-200 rounded-full p-1 mb-2 flex items-center justify-center  md:p-2"
                style={{ margin: "auto", marginRight: "10px" }}
              >
                <Link
                  href="https://www.instagram.com/buycars.chile?igsh=cmo0NGcyenRhNmR3"
                  target="_blank"
                >
                  <Instagram size="24" color="#000000" />
                </Link>
              </div>

              <div
                className="bg-cyan-200 rounded-full p-1 mb-2 flex items-center justify-center  md:p-2"
                style={{ margin: "auto" }}
              >
                <Call size="24" color="#000000" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Llámanos ahora
                </p>
                <a
                  href="tel:+990737621432"
                  className=" text-white font-bold text-sm md:text-xl"
                >
                  +990-737 621 432
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-cyan-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? "" : "hidden"} mobile-menu`}>
          <ul className="py-2">
            <li className="py-2 hover:bg-gray-800 hover:text-cyan-300 ">
              <Link
                href="/"
                className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
              >
                Inicio
              </Link>
            </li>
            <li className="py-2 hover:bg-gray-800 hover:text-cyan-300 ">
              <Link
                href="/stock"
                className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
              >
                Stock
              </Link>
            </li>
            <li className="py-2 hover:bg-gray-800 hover:text-cyan-300 ">
              <Link
                href="/nosotros"
                className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
              >
                Nosotros
              </Link>
            </li>
            <li className="py-2 hover:bg-gray-800 hover:text-cyan-300 ">
              <Link
                href="/contacto"
                className="py-4 px-2 text-white font-semibold hover:text-cyan-300 transition duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
