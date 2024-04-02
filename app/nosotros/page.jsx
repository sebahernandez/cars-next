import React from "react";
import Image from "next/image";
import Link from "next/link";
import Brands from "@/components/Brands";

export const metadata = {
  title: "Nuestro equipo",
  description: "Equipo de buycars en acción",
};

const page = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-top h-600 text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/img/team/team-buycars.webp')",
          height: "600px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative container mx-auto flex flex-col">
          <h1 className="text-xl md:text-4xl font-bold text-center pt-20">
            Nuestro Equipo
          </h1>
          <p className="text-center px-10 py-10 md:w-[800px] md:mx-auto">
            En Buycars nos esmeramos siempre en ofrecer siempre el mejor
            servicio de forma personalizada. Con profesionales y más de 10 años
            de trayectoria de su equipo, generamos experiencias de compra y
            venta con altos niveles de satisfacción.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden">
              <Image
                src="/img/team/miguel-catalan.webp"
                alt="Miguel Catalán"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-lg font-bold my-2">Miguel Catalán</h2>
          </div>
          {/* Card 2 */}
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
          </div>
          {/* Card 3 */}
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
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center justify-center  p-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden  ">
              <Image
                src="/img/team/roberto-aguilera.webp"
                alt="Roberto Aguilera"
                width={500}
                height={500}
              />
            </div>
            <h2 className="text-lg font-bold my-2">Roberto Aguilera</h2>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center items-center mt-[100px] mb-[100px]">
        <div className="border-8 border-cyan-400 w-[600px] h-[300px] flex flex-col items-center justify-center p-5 rounded">
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
    </div>
  );
};

export default page;
