import React from "react";
import { Car } from "iconic-react";
import { Calendar } from "iconic-react";
import { Lock } from "iconic-react";
import { Happyemoji } from "iconic-react";

export default function HowItWorksSection() {
  return (
    <section className="mb-28">
      <div className="md:container md:mx-auto bg-slate-900 py-12 px-12 rounded-lg mx-[20px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Consignación Virtual
        </h2>
        <p className="text-xl text-center mb-8 text-white">
          A continuación detallamos el proceso para que puedas consignar tu auto
          en simples pasos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Car
                size="32"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">¿Qué hacemos?</p>
            <p className="text-white">
              Somos especialistas en venta automotriz, dedicados a brindar un
              servicio de calidad y seguridad para todos nuestros clientes. Nos
              encargamos de vender tu auto ya sea de manera física o virtual.
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Calendar
                size="32"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">
              ¿Cómo lo hacemos?
            </p>
            <p className="text-white">
              1- Agendamos visita para revisión, publicamos en todos nuestros
              canales con marketing digital. 2. Facilidades de pago, también
              recibimos auto en parte de pago. 3. Encontremos comprador y
              pagamos al instante.
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Lock
                size="32"
                color="#000000" // Mohamed wish you a good day
              />
            </div>
            <p className="text-white text-xl font-bold py-2">
              ¿Por qué lo Hacemos?
            </p>
            <p className="text-white">
              Porque sabemos que demanda tiempo, no te expongas a riesgos
              innecesarios, como estafas, fraudes y robos, queremos que la venta
              de tu auto sea un trámite sencillo, rápido y seguro al mejor
              precio.
            </p>
          </div>
          <div className="text-center">
            <div
              className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <Happyemoji
                size="32"
                color="#000000"
                // Mohamed wish you a good day
              />
            </div>

            <p className="text-white text-xl font-bold py-2">¡Listo!</p>
            <p className="text-white">
              Porque sabemos que demanda tiempo, no te expongas a riesgos
              innecesarios, como estafas, fraudes y robos, queremos que la venta
              de tu auto sea un trámite sencillo, rápido y seguro al mejor
              precio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
