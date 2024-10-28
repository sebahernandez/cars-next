"use client";
import { useRef, useState } from "react";

export const metadata = {
  title: "Buycars - Contáctanos para mas información",
  description:
    "Puedes contactarnos para mas información sobre nuestros servicios y productos",
};

export default function ContactForm() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      tel: formData.get("tel"),
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

      await response.json();
      setIsSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="md:w-1/2 space-y-8 bg-gray-100 p-4 rounded-lg mx-6 "
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
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Teléfono
        </label>
        <input
          type="tel"
          name="tel"
          required
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          className="bg-white-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-cyan-300 hover:text-black"
      >
        Enviar
      </button>
      {isSubmitted && (
        <div className="mt-3 text-sm font-medium text-green-600">
          Mensaje enviado con éxito.
        </div>
      )}
    </form>
  );
}
