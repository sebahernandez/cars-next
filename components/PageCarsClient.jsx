"use client";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

export default function PageCarsClient({ car }) {
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Índice de la imagen activa

  useEffect(() => {
    if (car?.imageGallery) {
      const promises = car.imageGallery.map((image) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = image.imageUrl;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(promises).then(() => setIsGalleryLoading(false));
    }
  }, [car.imageGallery]);

  const openModal = (index) => {
    setActiveSlideIndex(index); // Establece la imagen activa
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target.id === "modal-overlay") {
      closeModal(); // Cierra el modal si el clic ocurre fuera del contenido principal
    }
  };

  if (!car) {
    return <p>Cargando ficha vehículo...</p>;
  }

  return (
    <section className="md:container md:mx-auto mt-[120px] sm:mt-36 px-3 md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-2 mx-5 my-5">
        {/* Galería de imágenes */}
        <div className="col-span-2 md:col-span-2 lg:row-span-3 pr-0 md:pr-10">
          {isGalleryLoading ? (
            <div className="flex items-center justify-center h-[300px] md:h-[600px] w-full bg-gray-100 rounded-lg">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
            </div>
          ) : (
            <>
              {/* Slider principal */}
              <Swiper
                modules={[Navigation, Pagination, FreeMode, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                onSlideChange={(swiper) =>
                  setActiveSlideIndex(swiper.activeIndex)
                }
                thumbs={{ swiper: thumbsSwiper }}
                className="h-[300px] md:h-[600px] w-full rounded-lg"
              >
                {car.imageGallery.map((image, index) => (
                  <SwiperSlide key={image.id ?? `${image.imageUrl}-${index}`}>
                    <div
                      className="flex h-full w-full items-center justify-center cursor-pointer"
                      onClick={() => openModal(index)} // Abre el modal al hacer clic
                    >
                      <Image
                        src={image.imageUrl}
                        alt={image.name || "Imagen de galería"}
                        className="block h-full w-full object-cover"
                        width={800}
                        height={600}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnails */}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mt-4 h-24 w-full"
              >
                {car.imageGallery.map((image, index) => (
                  <SwiperSlide
                    key={image.id ?? `${image.imageUrl}-thumb-${index}`}
                  >
                    <button className="h-full w-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.name || "Imagen de galería"}
                        className="h-full w-full object-cover"
                        width={500}
                        height={500}
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>

        {/* Información del vehículo */}
        <div className="col-span-2 lg:col-start-3 border p-5 rounded-lg md:mt-0 mt-5">
          <table className="min-w-full table-auto">
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
                <td className="px-2 py-2">
                  <div className="flex flex-col">
                    <span className="text-xl">Precio:</span>
                    <span className="text-3xl lg:text-3xl font-bold py-2">
                      ${car.price.replace(/,/g, ".")}
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
                <td className="px-2 py-2">
                  <p>Tipo de combustible:</p>
                  <span className="text-gray-900 font-bold">
                    {car.fuelType}
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-2 py-2">
                  <p>Transmisión:</p>
                  <span className="text-gray-900 font-bold">
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

        {/* Descripción */}
        <div className="col-span-3 py-3">
          <h2 className="text-xl sm:text-2xl font-bold underline">
            Descripción:
          </h2>
          <p className="text-justify py-5">{car.description}</p>
        </div>
      </div>

      {/* Modal con zoom */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleModalClick} // Cierra el modal si se hace clic fuera
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <Swiper
            modules={[Zoom, Navigation, Pagination]}
            zoom={{ maxRatio: 3 }}
            navigation
            pagination={{ clickable: true }}
            initialSlide={activeSlideIndex} // Empieza desde la imagen activa
            className="w-full h-full md:w-3/4 md:h-3/4"
          >
            {car.imageGallery.map((image, index) => (
              <SwiperSlide key={image.id ?? `${image.imageUrl}-modal-${index}`}>
                <div className="swiper-zoom-container">
                  <Image
                    src={image.imageUrl}
                    alt={image.name || "Imagen ampliada"}
                    className="block w-full h-full object-cover"
                    width={1200}
                    height={800}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}

PageCarsClient.propTypes = {
  car: PropTypes.object.isRequired,
};
