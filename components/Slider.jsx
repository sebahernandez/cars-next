"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCallback } from "react";
import useWindowSize from "../hooks/ImageSide";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { width } = useWindowSize();

  const mobileImages = [
    "/img/banner/mobile/movil-banner-1.webp",
    "/img/banner/mobile/movil-banner-2.webp",
    "/img/banner/mobile/movil-banner-3.webp",
  ];

  const desktopImages = [
    "/img/banner/desktop/banner-desktop-1.webp",
    "/img/banner/desktop/banner-desktop-2.webp",
    "/img/banner/desktop/banner-desktop-3.webp",
  ];

  const images = width < 768 ? mobileImages : desktopImages;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [setActiveIndex, images.length]);

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Configura el carrusel para avanzar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Cambia al siguiente slide automáticamente
    }, 5000); // Cambia el intervalo según necesites

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [activeIndex, nextSlide]);

  return (
    <div className="md:container md:mx-auto mt-36 mx-[20px]">
      <div
        id="animation-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute w-full h-full transition-opacity duration-700 ease-linear ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
            >
              <Image
                src={src}
                alt="Slide image"
                fill={true}
                priority={index === activeIndex}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-1 p-2 mx-5 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          {/* Asegúrate de que estos estilos permitan que el botón sea visible */}
          {/* Icono o texto para el botón anterior */}
          {"<"}
        </button>
        <button
          type="button"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-1 p-2 mx-5 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          {/* Asegúrate de que estos estilos permitan que el botón sea visible */}
          {/* Icono o texto para el botón siguiente */}
          {">"}
        </button>
      </div>
    </div>
  );
}
