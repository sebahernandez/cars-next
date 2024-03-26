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
    { name: "Brand A", logoUrl: "/img/brands/auto-fin.webp" },
    { name: "Brand B", logoUrl: "/img/brands/banco-falabella.webp" },
    { name: "Brand B", logoUrl: "/img/brands/bci-seguros.webp" },
    { name: "Brand B", logoUrl: "/img/brands/club-seguro.webp" },
    { name: "Brand B", logoUrl: "/img/brands/compara.webp" },
    { name: "Brand B", logoUrl: "/img/brands/euro-capital.webp" },
    { name: "Brand B", logoUrl: "/img/brands/nuevo-capital.webp" },
    { name: "Brand B", logoUrl: "/img/brands/olx-autos.webp" },
  ];

  return (
    <div className="container mx-auto mb-28">
      <Swiper
        // Proporciona módulos adicionales aquí si es necesario
        modules={[Autoplay]}
        spaceBetween={50} // Espacio entre slides
        slidesPerView={4} // Número de slides a mostrar
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Configura el autoplay
        // Añade otras configuraciones de Swiper según necesites
        loop={true}
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
