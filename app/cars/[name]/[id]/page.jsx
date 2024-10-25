import PageCarsClient from "./PageCarsClient"; // Importamos el componente cliente
import PropTypes from "prop-types";

// Este es un componente del servidor
export default async function PageCars({ params }) {
  const { id } = params; // Obtenemos el id de params
  const token = process.env.NEXT_PUBLIC_TOKEN_KEY; // Obtenemos el token de la variable de entorno
  const url = "https://venpu.cl/api"; // La URL de la API

  // Lógica para obtener los datos del vehículo desde la API
  const response = await fetch(`${url}/cars/stock/${Number(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const car = data.status ? data.data : null;

  if (!car) {
    return <p>Cargando vehículo...</p>;
  }

  // Pasamos los datos al componente cliente
  return <PageCarsClient car={car} />;
}

// props validation
PageCars.propTypes = {
  params: PropTypes.object.isRequired,
};
