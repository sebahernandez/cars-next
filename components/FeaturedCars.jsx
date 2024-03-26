// Importaciones necesarias
"use client";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import products from "@/data/products.json";
export default function FeaturedCars() {
  const preloadImages = products.slice(0, 3);

  return (
    <section className="my-28">
      <Head>
        {preloadImages.map((product) => (
          <link
            key={product.id}
            rel="preload"
            href={product.imageUrl}
            as="image"
          />
        ))}
      </Head>
      <div className="container mx-auto my-10">
        <h2 className="text-xl md:text-4xl font-bold">Vehículos Destacados</h2>
        <small className="text-sm md:text-xl">
          Encuentra el vehículo que buscas
        </small>
      </div>
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            // Cuando el ancho de la ventana es >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Cuando el ancho de la ventana es >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Cuando el ancho de la ventana es >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // Cuando el ancho de la ventana es >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-lg rounded-lg my-10 mx-3">
                <div className="relative">
                  <div
                    className="h-48 bg-gray-300 flex justify-center items-center bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  ></div>
                  <button
                    className={`absolute top-4 right-4 rounded-lg p-1 shadow-md text-sm ${
                      product.available ? "bg-white" : "bg-red-500 text-white"
                    }`}
                  >
                    {product.available ? "Disponible" : "Vendido"}
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-gray-900">
                      {product.price}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {product.location}
                    </span>
                  </div>
                  <div className="my-2">
                    <h4 className="text-gray-800 text-md font-medium">
                      {product.name}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 text-sm">
                    <span>{product.miles}</span>
                    <span>{product.fuelType}</span>
                    <span>{product.transmission}</span>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/cars/${product.id}`}
                      passHref
                      className="text-white bg-black hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
