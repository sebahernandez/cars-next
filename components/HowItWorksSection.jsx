import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faMoneyBill,
  faEnvelopeOpen,
  faCar,
  faCalendar,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorksSection() {
  return (
    <section className="mb-28">
      <div className="container mx-auto bg-cyan-200 py-12 px-12 rounded-lg">
        <h2 className="text-5xl font-bold text-center mb-4">
          Consignación Virtual
        </h2>
        <p className="text-xl text-center mb-8">
          A continuación detallamos el proceso para que puedas consignar tu auto
          en simples pasos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="bg-white rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <FontAwesomeIcon icon={faCar} className="text-black text-5xl" />
            </div>
            <p className="text-black text-xl font-bold py-2">¿Qué hacemos?</p>
            <p>
              Somos especialistas en venta automotriz, dedicados a brindar un
              servicio de calidad y seguridad para todos nuestros clientes. Nos
              encargamos de vender tu auto ya sea de manera física o virtual.
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-white rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                className="text-black text-5xl"
              />
            </div>
            <p className="text-black text-xl font-bold py-2">
              ¿Cómo lo hacemos?
            </p>
            <p>
              1- Agendamos visita para revisión, publicamos en todos nuestros
              canales con marketing digital. 2. Facilidades de pago, también
              recibimos auto en parte de pago. 3. Encontremos comprador y
              pagamos al instante.
            </p>
          </div>

          <div className="text-center">
            <div
              className="bg-white rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <FontAwesomeIcon icon={faLock} className="text-black text-5xl" />
            </div>
            <p className="text-black text-xl font-bold py-2">
              ¿Por qué lo Hacemos?
            </p>
            <p>
              Porque sabemos que demanda tiempo, no te expongas a riesgos
              innecesarios, como estafas, fraudes y robos, queremos que la venta
              de tu auto sea un trámite sencillo, rápido y seguro al mejor
              precio.
            </p>
          </div>
          <div className="text-center">
            <div
              className="bg-white rounded-full p-4 mb-4 flex items-center justify-center"
              style={{ width: "100px", height: "100px", margin: "auto" }}
            >
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-black text-5xl" // Ajusta esta clase para cambiar el tamaño
              />
            </div>

            <p className="text-black text-xl font-bold py-2">¡Listo!</p>
            <p>
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
