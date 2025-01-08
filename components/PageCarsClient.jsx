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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    if (event.target.id === "modal-overlay") {
      closeModal();
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
                      onClick={() => openModal(index)}
                    >
                      <Image
                        src={image.imageUrl}
                        alt={image.name || "Imagen de galería"}
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        className="block w-full h-auto object-cover"
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
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-full w-full object-cover"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 p-4"
          onClick={handleModalClick}
          onTouchEnd={handleModalClick}
        >
          <div
            id="modal-content"
            className="relative w-full max-w-md md:max-w-3xl h-auto max-h-[90vh]  rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black text-white text-3xl p-2 rounded-full flex items-center justify-center w-12 h-12 z-50"
              onClick={closeModal}
            >
              ✕
            </button>
            <Swiper
              modules={[Zoom, Navigation, Pagination]}
              zoom={{ maxRatio: 3 }}
              navigation
              initialSlide={activeSlideIndex}
              className="w-full h-full"
            >
              {car.imageGallery.map((image, index) => (
                <SwiperSlide
                  key={image.id ?? `${image.imageUrl}-modal-${index}`}
                >
                  <div className="flex items-center justify-center h-[90vh] w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.name || "Imagen ampliada"}
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-auto h-auto max-w-full max-h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}

PageCarsClient.propTypes = {
  car: PropTypes.object.isRequired,
};
