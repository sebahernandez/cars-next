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

const TestimonialSwiper = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial: `Gracias por la atención,
    responsabilidad y
    transparencia, los recomiendo
    100%, no sabía por qué vehículo
    y el tipo de financiamiento, me
    explicaron en detalle de todo el
    proceso, lo que me ayudó a
    tomar una decisión informada`,
    },
    {
      id: 2,
      name: "Jane Doe",
      testimonial: `Solicité una asesoría para
        vender mi vehículo y vendieron
        mi auto en un excelente precio
        y en un tiempo súper rápido`,
    },
    {
      id: 3,
      name: "Steve Smith",
      testimonial:
        "La calidad del producto es insuperable. Definitivamente recomendaría esto a mis amigos.",
    },
    {
      id: 4,
      name: "Sara Wilson",
      testimonial:
        "He usado este producto durante el último año, y ha sido fantástico en todo aspecto.",
    },
    // Asegúrate de que los ID sean únicos
    {
      id: 5,
      name: "Alex Johnson",
      testimonial:
        "La atención al detalle en este producto es increíble. ¡Muy recomendado!",
    },
    {
      id: 5,
      name: "Alex Johnson",
      testimonial:
        "La atención al detalle en este producto es increíble. ¡Muy recomendado!",
    },

    {
      id: 5,
      name: "Alex Johnson",
      testimonial:
        "La atención al detalle en este producto es increíble. ¡Muy recomendado!",
    },

    {
      id: 6,
      name: "Alex Johnson",
      testimonial:
        "La atención al detalle en este producto es increíble. ¡Muy recomendado!",
    },
  ];

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-4xl font-bold">Lo que dicen nuestros clientes...</h2>
      <p className="text-xl py-2 mb-5">
        Se parte de nuestra comunidad y conviértete en un #Buycarslovers.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
        spaceBetween={50}
        slidesPerView={4} // Ajusta esto según tus necesidades de diseño responsivo
        /*         pagination={{ clickable: true }}
        navigation */
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => {
          const key = uuidv4();
          return (
            <SwiperSlide key={key}>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg max-w-md">
                <p className="text-gray-600 text-center">
                  {testimonial.testimonial}
                </p>
                <p className="text-gray-800 mt-4 font-semibold text-center">
                  {testimonial.name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
