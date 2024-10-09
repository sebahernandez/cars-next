import Link from "next/link";
import { Driving, GasStation, Setting2 } from "iconic-react";


const formatProductNameForUrl = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-') 
    .replace(/[^\w-]+/g, '');
};

const Cards = ({ product }) => {
  const precio = product.price.replace(/,/g, ".");

  // Limpia el nombre del producto para la URL
  const formattedName = formatProductNameForUrl(product.name);

  return (
    <div className="flex flex-col justify-between md:justify-around bg-white shadow-lg my-5 mx-3">
      <div className="relative">
        <a  href={`/cars/${formattedName}/${product.id}`}>
          <div
            className="h-48 bg-gray-300 flex justify-center items-center bg-cover bg-center rounded-t-md"
            style={{ backgroundImage: `url(${product.imageUrl})` }}
          ></div>
        </a>
        <button
          className={`absolute top-4 right-4 rounded p-1 shadow-md text-sm font-bold ${
            product.available ? "bg-white" : "bg-red-500 text-white"
          }`}
        >
          {product.available ? "Disponible" : "Vendido"}
        </button>
      </div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between items-baseline">
          <h3 className="text-sm md:text-lg font-bold text-gray-900">
            <a href={`/cars/${formattedName}/${product.id}`}>${precio}</a>
          </h3>
        </div>
        <div className="my-2 h-8">
          <h4 className="text-[9px] text-gray-800 md:text-md md:font-medium md:text-[12px]">
            {product.name}
          </h4>
        </div>
        <div className="flex items-start justify-between mt-4 text-[12px] md:flex-col  md:justify-between md:items-start lg:flex-row md:text-gray-600 md:text-sm border-t border-b border-gray-300">
          <span className="flex items-center gap-1 mt-2 mb-2">
            <Driving size="18" color="#000000" />
            {product.miles} KM
          </span>
          <span className="flex items-center gap-1 mt-2 mb-2">
            <GasStation size="18" color="#000000" />
            {product.fuelType}
          </span>
          <span className="flex items-center gap-1 mt-2 mb-2">
            <Setting2 size="18" color="#000000" />
            {product.transmission}
          </span>
        </div>
        <div className="mt-4 flex justify-end md:justify-end">
          <Link
            href={`/cars/${formattedName}/${product.id}`}
            className="text-white text-[13px] bg-slate-700 hover:bg-slate-900 font-medium rounded-sm md:text-sm px-4 py-2 text-center"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
