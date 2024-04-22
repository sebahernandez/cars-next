"use client";
import React, { useEffect, useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Car from "@/components/Car";
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

function FeaturedCars() {
  const [destacados, setDestacados] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = `${process.env.NEXT_PUBLIC_TOKEN_KEY}`;
        const url = "https://venpu.cl/api";
        const response = await fetch(`${url}/cars/destacados`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const r = await response.json();
        if (r.status) {
          setDestacados(r.data);
          setIsLoading(false); // Desactivar el indicador de carga después de recibir los datos
        } else {
          console.log(r.error);
          setIsLoading(false); // Desactivar el indicador de carga en caso de error
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        setIsLoading(false); // Desactivar el indicador de carga en caso de excepción
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BounceLoader
          color="#36d7b7"
          loading={isLoading}
          size={70}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <section className="my-28">
      <div className="md:container md:mx-auto mx-[20px] ">
        <h2 className="text-2xl md:text-4xl font-bold ml-2">
          Vehículos Destacados
        </h2>

        <small className="text-sm md:text-xl ml-2">
          Encuentra el vehículo que buscas
        </small>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {destacados.map((product) => (
            <SwiperSlide key={product.id}>
              <Car product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default FeaturedCars;
