"use client";

import React from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pageCars = ({ params }) => {
  const producto = products.find(
    (itemProduct) => itemProduct.id === Number(params.id)
  );

  return (
    <section className="container mx-auto mt-[150px]">
      <div className="py-2">
        <h1 className="text-3xl font-bold mb-2">{producto.name}</h1>
        <p className="text-gray-700">Ubicación: {producto.location}</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-6">
        <div className="col-span-2 row-span-3">
          <Swiper
            navigation
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination, Autoplay]}
            className="h-96 w-full rounded-lg"
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
        </div>
        <div className="col-span-3 row-start-4">
          <h2 className="text-2xl font-bold">Descripción:</h2>
          <p className="text-justify py-5">{producto.description}</p>
        </div>
        <div className="row-span-2">
          <div className="py-5 flex flex-col items-end">
            <p className="text-2xl font-bold my-2 md:text-4xl ">
              {producto.price}
            </p>
            <Link
              href="/"
              className="bg-black text-white rounded p-2 text-center my-3"
            >
              Simula tu credito
            </Link>
          </div>
          <table className="min-w-full table-auto">
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-2 text-gray-700 font-bold">
                  Kilómetros:
                </td>
                <td className="px-6 py-2 text-gray-700">{producto.miles}</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-2 text-gray-700 font-bold">
                  Tipo de combustible:
                </td>
                <td className="px-6 py-2 text-gray-700">{producto.fuelType}</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-2 text-gray-700 font-bold">
                  Transmisión:
                </td>
                <td className="px-6 py-2 text-gray-700">
                  {producto.transmission}
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 text-gray-700 font-bold">
                  Disponibilidad:
                </td>
                <td className="px-6 py-2 text-gray-700">
                  {producto.available ? "Disponible" : "No disponible"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-2 row-span-3 col-start-4 row-start-1 gap-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default pageCars;
