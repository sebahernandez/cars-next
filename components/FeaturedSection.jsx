import Image from "next/image";
import React from "react";
import {
  IoShieldCheckmarkOutline,
  IoCalendarNumberOutline,
  IoHandLeftOutline,
} from "react-icons/io5";

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="flex items-start my-10">
      <Icon className="text-green-500 w-6 h-6 flex-shrink-0 mt-1 mr-2" />
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="md:container md:mx-auto bg-amber-50 p-12 md:p-12 rounded-xl my-8 mx-[10px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            ¿Por qué Buycars?
          </h2>
          <p className="text-gray-600 mt-4">
            Especialistas en gestión de Ventas, Consignación y Compra de
            vehículos.
          </p>
          <div className="mt-8">
            <FeatureCard
              Icon={IoShieldCheckmarkOutline}
              title="Compra Segura"
              description="Todo nuestro stock cuenta con información de
              fuentes oficiales, en Buycars puedes comprar tranquilo y seguro."
            />

            <FeatureCard
              Icon={IoCalendarNumberOutline}
              title="Atención Personalizada"
              description="En Buycars nos enfocamos en dar una atención de calidad, atendiendo cada una de tus consultas
              y asesorándote en cada paso de la compra de tu proximo vehículo."
            />

            <FeatureCard
              Icon={IoHandLeftOutline}
              title="Ejecutivos calificados"
              description="Nos enfocamos en brindar una experiencia, en la cual te sentirás cómodo, sgeuro y acompañado en todos los procesos de tu compra"
            />
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <div className="relative w-full  rounded-lg overflow-hidden">
            <Image
              src="/img/compra-auto.jpg"
              alt="Featured Image"
              width={772}
              height={737}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
