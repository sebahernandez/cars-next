import PageCarsClient from "@/components/PageCarsClient"; // Importamos el componente cliente
import PropTypes from "prop-types";

// Función para obtener los datos del vehículo desde la API
async function getCarDataById(id) {
  const token = process.env.NEXT_PUBLIC_TOKEN_KEY;
  const url = "https://venpu.cl/api";

  const response = await fetch(`${url}/cars/stock/${Number(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data.status ? data.data : null;
}

// Función para exportar metadata de Open Graph
export async function generateMetadata({ params }) {
  const { id } = params; // Obtenemos el id desde los parámetros
  const car = await getCarDataById(id); // Obtenemos los datos del auto

  if (!car) {
    return {
      title: "Vehículo no encontrado",
      description: "Este vehículo no está disponible en este momento.",
    };
  }

  return {
    title: `${car.name} - Detalles del Vehículo`,
    description: car.description,
    openGraph: {
      title: car.name,
      description: car.description,
      url: `https://www.buycars.cl/cars/${car.id}`,
      images: [
        {
          url: car.imageGallery?.[0]?.imageUrl || "",
          width: 1200,
          height: 630,
          alt: car.name,
        },
      ],
      type: "website",
    },
  };
}

// Componente del servidor que obtiene los datos del vehículo
export default async function PageCars({ params }) {
  const { id } = params; // Obtenemos el id de params
  const car = await getCarDataById(id); // Obtenemos los datos del vehículo desde la API

  if (!car) {
    return <p>Cargando vehículo...</p>; // Manejo de error en caso de que no se encuentre el vehículo
  }

  // Pasamos los datos al componente cliente
  return <PageCarsClient car={car} />;
}

// props validation
PageCars.propTypes = {
  params: PropTypes.object.isRequired,
};
