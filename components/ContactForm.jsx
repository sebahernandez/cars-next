"use client";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef(null); // Añade una referencia al formulario

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        // Asegúrate de que esta ruta coincida con tu ruta de API.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      formRef.current.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return (
    <>
      <section
        className="relative bg-cover bg-top h-400 text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/img/team/team-buycars.webp')",
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            En Buycars estamos para ayudarte
          </h2>
          <p className="text-gray-600">
            En Buycars nos esmeramos siempre en ofrecer siempre el mejor
            servicio de forma personalizada. Con profesionales y más de 10 años
            de trayectoria de su equipo, generamos experiencias de compra y
            venta con altos niveles de satisfacción.
          </p>
        </div>

        {/* Formulario al lado derecho */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-4 "
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-cyan-300 hover:text-black"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
