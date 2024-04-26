"use client";

import ContactForm from "@/components/ContactForm";
import UserContact from "@/components/UserContact";
import React from "react";

const page = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-top h-100 text-white flex flex-col justify-center items-center"
        style={{
          backgroundColor: "#333",
          height: "400px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative container mx-auto flex flex-col">
          <h1 className="text-xl md:text-4xl font-bold text-center pt-20">
            Contáctanos
          </h1>
        </div>
      </section>

      <div className="md:container md:mx-auto mx-10 mt-20 mb-20 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 ">
        {/* Texto típico al lado izquierdo */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            En Buycars estamos para ayudarte
          </h2>
          <p className="text-gray-600">
            En Buycars nos esmeramos siempre en ofrecer siempre el mejor
            servicio de forma personalizada. Con profesionales y más de 10 años
            de trayectoria de su equipo, generamos experiencias de compra y
            venta con altos niveles de satisfacción.
          </p>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mt-8">
              Contacta con uno de nuestros ejecutivos
            </h3>
            <div className="flex flex-col gap-4 my-10 md:flex-row">
              <UserContact
                name="Victor Jaque"
                imageUrl="img/team/victorjaque2.webp"
                email="victor.jaque@buycars.cl"
                phoneNumber="+56977425152"
              />

              <UserContact
                name="Pablo Gonzalez"
                imageUrl="img/team/pablogonzalez2.webp"
                email="pablo.gonzalez@buycars.cl"
                phoneNumber="+56976226153"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mt-8">Dirección</h3>
            <p className="text-gray-600">Av.Las Condes 10.465 of 202</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default page;
