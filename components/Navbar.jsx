"use client";

import React, { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white shadow-md fixed w-full z-10 top-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-7">
              <div>
                <a href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">
                    <Image
                      src="/img/buycars-logo.webp"
                      width={50}
                      height={50}
                      alt="Buycars"
                      className="logo"
                    />
                  </span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  INICIO
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  STOCK
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  NOSOTROS
                </a>
                <a
                  href="#"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  CONTACTO
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
                style={{ width: "40px", height: "40px", margin: "auto" }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ width: "50px", color: "black" }}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Llámanos ahora
                </p>
                <a href="tel:+990737621432" className="text-sm text-gray-600">
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
                  className="w-6 h-6 text-gray-500 hover:text-green-500"
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
          <ul>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300"
              >
                Stock
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 transition duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
