"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/autoplay"; // Estilos para la funcionalidad de autoplay

export default function BrandCarousel() {
  const brands = [
    { name: "autofin", logoUrl: "/img/brands/auto-fin.webp" },
    { name: "falabella", logoUrl: "/img/brands/banco-falabella.webp" },
    { name: "bci", logoUrl: "/img/brands/bci-seguros.webp" },
    { name: "club-seguro", logoUrl: "/img/brands/club-seguro.webp" },
    { name: "compara", logoUrl: "/img/brands/compara.webp" },
    { name: "euro-capital", logoUrl: "/img/brands/euro-capital.webp" },
    { name: "nuevo-capital", logoUrl: "/img/brands/nuevo-capital.webp" },
    { name: "olx-autos", logoUrl: "/img/brands/olx-autos.webp" },
  ];

  return (
    <div className="container mx-auto mb-8 md:mb-28 md:py-10">
      <h1 className="text-center text-xl my-10 font-bold md:text-4xl">
        Empresas Partner
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4} // Valor predeterminado para desktop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          // Cuando el ancho de la ventana es >= 320px (dispositivos móviles)
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Cuando el ancho de la ventana es >= 768px (tablets)
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // Puedes añadir más puntos de interrupción si lo necesitas
        }}
      >
        {brands.map((brand) => {
          const keyBrand = uuidv4();

          return (
            <SwiperSlide key={keyBrand}>
              <Image
                src={brand.logoUrl}
                alt={brand.name}
                width={210}
                height={80}
                className="mx-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
