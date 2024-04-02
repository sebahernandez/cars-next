"use client";

import { useState } from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "iconic-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PageCars = ({ params }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const producto = products.find(
    (itemProduct) => itemProduct.id === Number(params.id)
  );

  return (
    <section className="md:container md:mx-auto mt-[120px] sm:mt-36">
      <div className="py-2 px-5">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{producto.name}</h1>
        <p className="text-gray-700 flex items-center gap-2 font-bold">
          {/* Asumiendo que <Map /> es un componente que renderiza un ícono */}
          <Map size="32" color="#2ccce4" />
          {producto.location}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-6 mx-5">
        <div className="md:col-span-2 lg:row-span-3">
          <Swiper
            navigation
            modules={[Navigation, Pagination, Autoplay, FreeMode, Thumbs]}
            className="h-96 w-full rounded-lg"
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
          >
            {producto.imageGallery.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.imageUrl}
                    alt={image.name}
                    className="block h-full w-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mt-4 h-24 w-full"
          >
            {producto.imageGallery.map((image, index) => (
              <SwiperSlide key={index}>
                <button className="h-full w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.name}
                    className="h-full w-full object-cover"
                    width={500} // Asegúrate de ajustar esto a las dimensiones reales de tus imágenes
                    height={500}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="md:col-span-2 lg:col-span-3 lg:row-start-4">
          <h2 className="text-xl sm:text-2xl font-bold">Descripción:</h2>
          <p className="text-justify py-5">{producto.description}</p>
        </div>
        <div className="md:col-span-2 lg:col-span-1 lg:row-span-3 ">
          <div className="py-5 flex flex-col items-center sm:items-end">
            <p className="text-xl sm:text-2xl lg:text-4xl font-bold my-2">
              ${producto.price}
            </p>
            <Link
              href="/"
              className="bg-black text-white rounded p-2 text-center my-3"
            >
              Simula tu crédito
            </Link>
          </div>
          <table className="min-w-full table-auto">
            <tbody>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-700 font-bold">
                  Kilómetros:
                </td>
                <td className="px-2 py-2 text-gray-700">{producto.miles}</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-700 font-bold">
                  Tipo de combustible:
                </td>
                <td className="px-2 py-2 text-gray-700">{producto.fuelType}</td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 text-gray-700 font-bold">
                  Transmisión:
                </td>
                <td className="px-2 py-2 text-gray-700">
                  {producto.transmission}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-700 font-bold">
                  Disponibilidad:
                </td>
                <td className="px-2 py-2 text-gray-700">
                  {producto.available ? "Disponible" : "No disponible"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5 md:my-0 md:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default PageCars;
