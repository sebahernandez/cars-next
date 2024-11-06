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
  backgroundImage: "url('/bg-background.svg')",
};

const page = () => {
  return (
    <>
      <section
        className="w-full h-[400px] h-[300px] md:h-[650px] relative text-white flex flex-col justify-center items-center py-20"
        style={backgroundStyle}
      >
        {/* Contenido centrado */}
        <div className="relative text-center z-10 text-black">
          <div className=" w-full md:w-[900px] h-[500px] flex flex-col items-center justify-center p-5 rounded ">
            <h1 className="text-2xl md:text-6xl text-center font-bold tracking-wide">
              Ven a nuestro local y vive la mejor experiencia de venta
              automotriz en Chile
            </h1>
            <Link
              href="/contacto"
              className="text-black bg-cyan-300 rounded-full px-4 py-2 mt-4 font-bold"
            >
              Como llegar a nuestras oficinas
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center items-center mt-0 md:mt-[50px] md:mb-[100px]">
        <div className=" w-full md:w-[900px] h-[300px] flex flex-col items-center justify-center rounded ">
          <h1 className="md:text-5xl text-3xl md:text-6xl font-bold pt-20">
            Nuestro Equipo
          </h1>
          <p className="px-5 md:px-20 py-6 md:py-10 max-w-4xl mx-auto text-center">
            En Buycars nos esmeramos siempre en ofrecer siempre el mejor
            servicio de forma personalizada. Con profesionales y más de 10 años
            de trayectoria de su equipo, generamos experiencias de compra y
            venta con altos niveles de satisfacción.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 my-[10px] md:my-[100px]">
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
                src="/img/team/miguel-catalan.webp"
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

      <section>
        <Brands />
      </section>
    </>
  );
};

export default page;
