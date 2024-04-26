import React from "react";
import { Car, Coin1, Message2 } from "iconic-react";
import { Calendar } from "iconic-react";
import { Lock } from "iconic-react";
import { Happyemoji } from "iconic-react";

export default function HowItWorksSection() {
  return (
    <section className="mb-28">
      <div className="md:container md:mx-auto bg-slate-900 py-12 px-12 rounded-lg mx-[10px]">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">
          Consignación Virtual
        </h2>
        <p className="text-xl text-center mb-8 text-white">
          Vendemos tu auto, mientras lo sigues manejando
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Car
                size="44"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">Paso 1</p>
            <p className="text-white">
              Tráemos tu auto para conocer su historia y hacer la inspección
              necesaria
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Coin1
                size="44"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">Paso 2</p>
            <p className="text-white">
              Fijamos un precio en conjunto, te asesoramos y daremos nuestro
              punto de vista del mercado
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Message2
                size="44"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">Paso 3</p>
            <p className="text-white">
              Publicamos el auto en los principales canales de venta, difundimos
              en nuestras redes sociuales y página web. Atendemos a todos los
              interesados.
            </p>
          </div>
          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Happyemoji
                size="44"
                color="#000000"
                // Mohamed wish you a good day
              />
            </div>

            <p className="text-white text-xl font-bold py-2">Paso 4</p>
            <p className="text-white">
              Vendemos tu auto y te pagamos al instante, nos encargamos de todo
              el tramite de transferencia y baja de tag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
