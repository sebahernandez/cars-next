"use client"; // Declaramos que es un componente cliente

import PropTypes from "prop-types";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Map } from "iconic-react";
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
    <>
      <section className="md:container md:mx-auto mt-[120px] sm:mt-36">
        <div className="py-2 px-5 md:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{car.name}</h1>
          <p className="text-gray-700 flex items-center gap-2 font-bold">
            <Map size="32" color="#2ccce4" />
            {car.location}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 md:mx-0 md:gap-6 mx-5 my-5">
          <div className="col-span-2 md:col-span-2 lg:row-span-3">
            <Swiper
              navigation
              modules={[Navigation, Pagination, Autoplay, FreeMode, Thumbs]}
              className="h-[500px] w-full rounded-lg"
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
                  <SwiperSlide key={car.id}>
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
              {car.imageGallery &&
                Array.isArray(car.imageGallery) &&
                car.imageGallery.map((image) => (
                  <SwiperSlide key={car.id}>
                    <button className="h-full w-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        className="h-full w-full object-cover"
                        width={500}
                        height={500}
                      />
                    </button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="col-span-2 my-5 md:col-span-2 lg:col-span-3 lg:row-start-4 ">
            <h2 className="text-xl sm:text-2xl font-bold">Descripción:</h2>
            <p className="text-justify py-5">{car.description}</p>
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-3 ">
            <div className="py-5 flex flex-col items-center sm:items-end">
              <p className="text-xl sm:text-5xl lg:text-4xl font-bold my-2">
                ${precio}
              </p>
              <Link
                href="/"
                className="bg-black text-white rounded p-2 text-center my-3"
              >
                Simula tu crédito
              </Link>
            </div>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-2 py-2 text-gray-700 font-bold text-left underline text-2xl">
                    Características:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-2 py-2 text-gray-700 font-bold">
                    Kilómetros:
                  </td>
                  <td className="px-2 py-2 text-gray-700">{car.miles}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2 text-gray-700 font-bold">
                    Tipo de combustible:
                  </td>
                  <td className="px-2 py-2 text-gray-700">{car.fuelType}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2 text-gray-700 font-bold">
                    Transmisión:
                  </td>
                  <td className="px-2 py-2 text-gray-700">
                    {car.transmission}
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-700 font-bold">
                    Disponibilidad:
                  </td>
                  <td className="px-2 py-2 text-gray-700">
                    {car.available ? "Disponible" : "No disponible"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

PageCarsClient.propTypes = {
  car: PropTypes.object.isRequired,
};
