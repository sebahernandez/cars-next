import React from "react";

export const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border-2 w-full mx-auto">
      <h2 className="text-lg font-semibold mb-4">Enviar mensaje al vendedor</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Ingresa un telefono de contacto"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Ingresa tu correo de contacto"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Necesito se comuniquen conmigo para obtener más información sobre este vehículo: COD000287"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
