import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="border-t border-gray-700 py-16 px-4 md:px-0 lg:px-0 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Image
              src="/img/buycars-logo-whiite.webp"
              alt="Buycars"
              width={50}
              height={50}
              className="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-8 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div
                className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
                style={{ width: "40px", height: "40px", margin: "auto" }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ width: "50px", color: "black" }}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Llámanos ahora
                </p>
                <a href="tel:+990737621432" className="text-2xl text-cyan-300">
                  +990-737 621 432
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div
                className="bg-cyan-200 rounded-full p-4 mb-4 flex items-center justify-center"
                style={{ width: "40px", height: "40px", margin: "auto" }}
              >
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  style={{ width: "50px", color: "black" }}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Envianos un email a
                </p>
                <a href="tel:+990737621432" className="text-2xl text-cyan-300">
                  ventas@buycars.cl
                </a>
              </div>
            </div>
          </div>

          {/* Sección de enlaces */}
          <div className="flex space-x-4">
            <a href="/advertise" className="text-sm hover:text-gray-300">
              <h3 className="text-sm font-semibold text-cyan-300">Horario:</h3>
              Lunes a Viernes 10:00 - 19:00 Hrs. <br /> Sábados de 10:00 - 14:00
              Hrs.
            </a>
            <a href="/sitemap" className="text-sm hover:text-gray-300">
              <h3 className="text-sm font-semibold text-cyan-300">Oficina:</h3>
              Av.Las Condes 10.465 of 202
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Sección de derechos de autor y enlaces sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs mb-4 md:mb-0 ">
            Buycars@2024 todos los derechos reservados | Desarrollo por venpu.cl
          </p>
          <div className="flex space-x-4 ">
            {/* Iconos sociales */}
            <a href="/facebook" className="icon-facebook-class"></a>
            <a href="/twitter" className="icon-twitter-class"></a>
            <a href="/linkedin" className="icon-linkedin-class"></a>
            <a href="/instagram" className="icon-instagram-class"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
