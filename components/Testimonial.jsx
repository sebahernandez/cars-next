"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual,
} from "swiper/modules";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import { StarRating } from "./StarRating";
import { Google } from "iconic-react";

const TestimonialSwiper = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cristóbal Martínez",
      testimonial: `Excelente servicio al cliente, siempre atentos y dispuestos a ayudar. ¡Totalmente satisfecho!`,
    },
    {
      id: 2,
      name: "Javiera Rodríguez",
      testimonial: `Rápidos y eficientes, resolvieron mi problema en menos de 24 horas. Definitivamente los recomiendo.`,
    },
    {
      id: 3,
      name: "Renato Pizarro",
      testimonial: `Los productos son de alta calidad y el envío fue muy rápido. Muy contento con la compra.`,
    },
    {
      id: 4,
      name: "Daniela Espinoza",
      testimonial: `Increíble experiencia de compra. Atención personalizada y muy profesional.`,
    },
    {
      id: 5,
      name: "Nicolás Gómez",
      testimonial: `El mejor servicio que he recibido en años. Amables y eficaces en todo momento.`,
    },
    {
      id: 6,
      name: "Camila Vásquez",
      testimonial: `Fascinada con el resultado, superaron mis expectativas con creces. ¡Gracias!`,
    },
    {
      id: 7,
      name: "Benjamín Orellana",
      testimonial: `Precio y calidad insuperables. Siempre elijo esta marca por su confiabilidad.`,
    },
    {
      id: 8,
      name: "Sofía Muñoz",
      testimonial: `Una atención excepcional, se tomaron el tiempo necesario para asegurarse que quedara completamente satisfecha.`,
    },
  ];

  return (
    <div className="md:container md:mx-auto py-5 mx-5">
      <h2 className="text-4xl font-bold mx-5 text-center">Testimonios</h2>
      <p className="text-xl py-2 mb-5 mx-5 text-center">
        Se parte de nuestra comunidad y conviértete en un{" "}
        <strong>#Buycarslovers.</strong>
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((testimonial) => {
          const key = uuidv4();
          return (
            <SwiperSlide key={key}>
              <div className="flex flex-col items-center justify-center h-[200px] p-5 my-5 bg-white shadow-lg rounded-lg ">
                <div className="my-3">
                  <Google
                    size="32"
                    color="#ff8a65"
                    variant="Bold"
                    // Mohamed wish you a good day
                  />
                </div>
                <p className="text-gray-600 text-center">
                  {testimonial.testimonial}
                </p>
                <p className="text-gray-800 mt-4 font-semibold text-center">
                  {testimonial.name}
                </p>
                <StarRating rating={5} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
