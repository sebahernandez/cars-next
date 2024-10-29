"use client"; // Declaramos que es un componente cliente

import PropTypes from "prop-types";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  FreeMode,
  Autoplay,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PageCarsClient({ car }) {
  const thumbsSwiperRef = useRef(null);
  const precio = car.price ? car.price.replace(/,/g, ".") : "";

  if (!car) {
    return <p>Cargando ficha vehículo...</p>;
  }
  return (
    <section className="md:container md:mx-auto mt-[120px] sm:mt-36 px-3 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 md:mx-0 md:gap-2 mx-5 my-5">
        <div className="col-span-2 md:col-span-2 lg:row-span-3 pr-0 md:pr-10">
          <Swiper
            navigation
            modules={[Navigation, Pagination, Autoplay, FreeMode, Thumbs]}
            className="h-[300px] md:h-[600px] w-full rounded-lg"
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            thumbs={{
              swiper:
                thumbsSwiperRef.current && !thumbsSwiperRef.current.destroyed
                  ? thumbsSwiperRef.current
                  : null,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          >
            {car.imageGallery &&
              Array.isArray(car.imageGallery) &&
              car.imageGallery.map((image) => (
                <SwiperSlide key={image.id || image.imageUrl}>
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={image.imageUrl}
                      alt={image.name || "Imagen de galería"}
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
            onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mt-4 h-24 w-full"
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {car?.imageGallery &&
              Array.isArray(car.imageGallery) &&
              car.imageGallery.map((image) => (
                <SwiperSlide key={image.id || image.imageUrl}>
                  <button className="h-full w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.name || "Imagen de galería"}
                      className="h-full w-full object-cover"
                      width={500}
                      height={700}
                    />
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="col-span-2 lg:col-start-3 border p-5 rounded-lg md:mt-0 mt-5">
          <table className="min-w-full table-auto ">
            <thead>
              <tr>
                <th className="px-2 py-2 text-left hidden">
                  Información del Vehículo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td>
                  <div>
                    <h1 className="text-2xl sm:text-2xl font-bold mb-2">
                      {car.name}
                    </h1>
                  </div>
                  <div className="my-3">
                    {car.miles}KM • {car.location}
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 ">
                  <div className="flex flex-col">
                    <span className="text-xl">Precio:</span>
                    <span className="text-3xl lg:text-3xl font-bold py-2">
                      ${precio}
                    </span>
                    <div
                      className={`w-max mb-4 text-white/90 text-center text-xs pl-2 pr-3 py-1.5 rounded-full gap-1 ${
                        car.available ? "bg-green-400" : "bg-red-400"
                      }`}
                    >
                      {car.available ? "Disponible ✓" : "No disponible"}
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 ">
                  <p>Tipo de combustible:</p>
                  <span className="text-gray-900 font-bold">
                    {car.fuelType}
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2 ">
                  <p>Transmisión:</p>
                  <span className="text-gray-900 font-bold">
                    {" "}
                    {car.transmission}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="my-5 flex">
            <Link
              href="/contacto"
              className="bg-black text-white rounded p-2 text-center w-full text-sm"
            >
              Reservar o agendar visita
            </Link>
          </div>
        </div>
        <div className="col-span-3 py-3">
          <h2 className="text-xl sm:text-2xl font-bold underline">
            Descripción:
          </h2>
          <p className="text-justify py-5">{car.description}</p>
        </div>
      </div>
    </section>
  );
}

PageCarsClient.propTypes = {
  car: PropTypes.object.isRequired,
};
