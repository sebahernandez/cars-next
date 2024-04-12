"use client";
import Head from "next/head";
import React, { useEffect, useState }  from "react";
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
import products from "@/data/products.json";

function FeaturedCars({data}){
  const preloadImages = products.slice(0, 3);
  const [destacados, setDestacados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'THOKnpRxvLcVXzuAPmKnPVPIko9s49acls#sdg$1354Gwr#%/deg476534ad35RBh9ifXqSTTREiYZ2qWLAGveKm';
        const url   = 'https://venpu.cl/api';
        const response = await fetch(`${url}/cars/destacados`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      
        const r = await response.json();
        if(r.status) setDestacados(r.data);
        else console.log(r.error)
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

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
