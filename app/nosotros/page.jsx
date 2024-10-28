import React from "react";
import Image from "next/image";
import Link from "next/link";
import Brands from "@/components/Brands";

export const metadata = {
  title: "Nuestro equipo",
  description: "Equipo de buycars en acción",
};

const backgroundStyle = {
  backgroundColor: "#ffffff",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23ededed' fill-opacity='0.4' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\")",
};

const page = () => {
  return (
    <>
      <section
        className="w-full h-[400px]  md:h-[550px] relative text-white flex flex-col justify-center items-center py-20"
        style={backgroundStyle}
      >
        {/* Contenido centrado */}
        <div className="relative text-center z-10 text-black">
          <h1 className="md:text-xl text-3xl md:text-6xl font-bold pt-20">
            Nuestro Equipo
          </h1>
          <p className="px-5 md:px-20 py-6 md:py-10 max-w-4xl mx-auto">
            En Buycars nos esmeramos siempre en ofrecer siempre el mejor
            servicio de forma personalizada. Con profesionales y más de 10 años
            de trayectoria de su equipo, generamos experiencias de compra y
            venta con altos niveles de satisfacción.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <Image
                src="/img/team/victor-jaque.webp"
                alt="Victor Jaque"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-lg font-bold my-2">Victor Jaque</h2>
            <p>Ejecutivo de ventas</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <Image
                src="/img/team/pablo-gonzalez.webp"
                alt="Pablo Gonzalez"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-lg font-bold my-2">Pablo Gonzalez</h2>
            <p>Ejecutivo de ventas</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <Image
                src="/img/team/roberto-aguilera.webp"
                alt="Roberto Aguilera"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-lg font-bold my-2">Miguel Catalán</h2>
            <p>Ejecutivo de ventas</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center items-center mt-[100px] mb-[100px]">
        <div className="border-8 border-cyan-400 w-[600px] h-[300px] flex flex-col items-center justify-center p-5 rounded m-5">
          <h2 className="text-xl md:text-4xl text-center">
            Ven a nuestro local y vive la mejor experiencia de venta automotriz
            en Chile
          </h2>
          <Link
            href="/contacto"
            className="text-black bg-cyan-300 rounded-full px-4 py-2 mt-4 font-bold"
          >
            Como llegar a nuestras oficinas
          </Link>
        </div>
      </section>

      <section>
        <Brands />
      </section>
    </>
  );
};

export default page;
