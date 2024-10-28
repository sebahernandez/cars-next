"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Call } from "iconic-react";

function DropdownCall() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const ref = useRef(null);
  // Función para manejar clics fuera del componente
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Añadir y remover el escuchador de eventos
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        className="bg-cyan-200 rounded-full flex items-center justify-center p-2 cursor-pointer"
        onClick={toggleDropdown}
        tabIndex="0"
        aria-label="Call Dropdown"
      >
        <Call size="24" color="#000000" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
          <a
            href="tel:+1234567890"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            +56 9 7742 5152
          </a>
          <a
            href="tel:+0987654321"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            +56 9 5801 2324
          </a>
          <a
            href="tel:+1122334455"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            +56 9 7622 6153
          </a>
        </div>
      )}
    </div>
  );
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-20 py-3 md:py-3 bg-slate-900 dark:bg-gray-900 px-5 sm:px-1 px-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-3 md:px-10">
        <a href="/" className="flex items-center">
          <Image
            src="/img/logo-buy-cars.webp"
            width={50}
            height={50}
            alt="Buycars"
            priority
          />
        </a>

        {/* Botón para menú móvil */}
        <div className="flex items-center">
          <div className="md:hidden flex items-center space-x-2 mr-5">
            {/* Iconos sociales visibles solo en móvil */}
            <div className="bg-cyan-200 rounded-full flex items-center justify-center p-2">
              <Link
                href="https://web.facebook.com/buycars.chile?mibextid=LQQJ4d&rdid=wuIoHHMcbZcjkuew"
                target="_blank"
              >
                <Facebook size="24" color="#000000" />
              </Link>
            </div>
            <div className="bg-cyan-200 rounded-full flex items-center justify-center p-2">
              <Link
                href="https://www.instagram.com/buycars.chile?igsh=cmo0NGcyenRhNmR3"
                target="_blank"
              >
                <Instagram size="24" color="#000000" />
              </Link>
            </div>
            <DropdownCall />
          </div>

          {/* Botón hamburguesa para abrir menú móvil */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 100 80"
              fill="currentColor"
            >
              <rect width="100" height="15"></rect>
              <rect y="30" width="100" height="15"></rect>
              <rect y="60" width="100" height="15"></rect>
            </svg>
          </button>

          {/* Menú de navegación común para desktop y móvil */}
          <div
            className={`${
              isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } md:visible md:opacity-100 md:flex md:items-center md:space-x-8 absolute md:relative top-full right-0 bg-slate-900 py-5 px-5 md:py-0 md:px-0 md:bg-transparent transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col mt-4 mx-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:items-center">
              <li>
                <Link
                  href="/"
                  className="block py-2  pl-3 text-white rounded hover:text-cyan-300 dark:text-gray-400 dark:hover:text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/stock"
                  className="block py-2  pl-3 text-white rounded hover:text-cyan-300 dark:text-gray-400 dark:hover:text-white"
                >
                  Stock
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="block py-2 pl-3 text-white rounded hover:text-cyan-300 dark:text-gray-400 dark:hover:text-white"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="block py-2  pl-3 text-white rounded hover:text-cyan-300 dark:text-gray-400 dark:hover:text-white"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="/contacto"
                  type="button"
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
                >
                  Vender mi auto
                </a>
              </li>
            </ul>
          </div>

          {/* Iconos de redes sociales visibles solo en desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-cyan-200 rounded-full flex items-center justify-center p-2">
              <Link
                href="https://web.facebook.com/buycars.chile?mibextid=LQQJ4d&rdid=wuIoHHMcbZcjkuew"
                target="_blank"
              >
                <Facebook size="24" color="#000000" />
              </Link>
            </div>
            <div className="bg-cyan-200 rounded-full flex items-center justify-center p-2">
              <Link
                href="https://www.instagram.com/buycars.chile?igsh=cmo0NGcyenRhNmR3"
                target="_blank"
              >
                <Instagram size="24" color="#000000" />
              </Link>
            </div>
            <DropdownCall />
          </div>
        </div>
      </div>
    </nav>
  );
};
