import React from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
const pageCars = ({ params }) => {
  const product = products.find((product) => product.id === Number(params.id));

  if (!product) {
    return (
      <div className="mt-10 text-center font-bold">
        No se encontró el producto
      </div>
    );
  }

  return (
    <section className="flex container mx-auto w-full mt-[120px] mb-10">
      <div className="max-w-6xl p-10 border-2 rounded-lg">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700">Ubicación: {product.location}</p>
          </div>

          <div>
            <p className="text-2xl font-bold my-2 md:text-4xl ">
              {product.price}
            </p>
            <Link
              href="/"
              className="bg-black text-white rounded p-2 text-center my-3"
            >
              Simula tu credito
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="flex-1">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg shadow-md w-full h-auto object-cover"
                style={{ height: "500px" }} // Asegura que la imagen tenga una altura de 500px
                width={500}
                height={500}
              />
            </div>
            <div className="flex-1 p-4" style={{ height: "500px" }}>
              <div className="overflow-auto">
                <p className="text-justify p-5">{product.description}</p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-5">
            <div className="mb-4">
              <table className="min-w-full table-auto">
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-2 text-gray-700 font-bold">
                      Kilómetros:
                    </td>
                    <td className="px-6 py-2 text-gray-700">{product.miles}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2 text-gray-700 font-bold">
                      Tipo de combustible:
                    </td>
                    <td className="px-6 py-2 text-gray-700">
                      {product.fuelType}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-2 text-gray-700 font-bold">
                      Transmisión:
                    </td>
                    <td className="px-6 py-2 text-gray-700">
                      {product.transmission}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-gray-700 font-bold">
                      Disponibilidad:
                    </td>
                    <td className="px-6 py-2 text-gray-700">
                      {product.available ? "Disponible" : "No disponible"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full ml-10">
        <div
          className="flex flex-col justify-center bg-white rounded-lg border-2 w-full mx-5 py-20"
          style={{ maxHeight: "300px", overflow: "hidden" }}
        >
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Publicado por</h2>
            <div className="p-2">
              <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.121 11a9 9 0 1 0 13.758 0M12 5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"></path>
                </svg>
              </div>
              <p className="text-sm font-bold">EMPRESA</p>
              <p className="text-xs">Automotriz Julio Infante y CIA LTDA</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">
              Información de contacto
            </h3>
            <div className="flex items-center justify-center mb-2">
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span className="text-sm">ventas@julioinfante.com</span>
            </div>
            <div className="flex items-center justify-center">
              {/* Icono de teléfono */}
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
                <path d="M16 2v20M8 2v20M12 2v20"></path>
              </svg>
              <span className="text-sm">+56 9 9236 1973</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default pageCars;
