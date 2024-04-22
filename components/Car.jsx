import Link from "next/link";

const Cards = ({ product }) => {
  return (
    <div className="flex flex-col  justify-around bg-white shadow-lg rounded-lg my-10 mx-3 h-[440px] ">
      <div className="relative">
        <div
          className="h-48 bg-gray-300 flex justify-center items-center bg-cover bg-center rounded"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        ></div>
        <button
          className={`absolute top-4 right-4 rounded p-1 shadow-md text-sm font-bold ${
            product.available ? "bg-white" : "bg-red-500 text-white"
          }`}
        >
          {product.available ? "Disponible" : "Vendido"}
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-gray-900">${product.price}</h3>
          <span className="text-sm text-gray-500">{product.location}</span>
        </div>
        <div className="my-2">
          <h4 className="text-gray-800 text-md font-medium">{product.name}</h4>
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>{product.miles}</span>
          <span>{product.fuelType}</span>
          <span>{product.transmission}</span>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href={`/cars/${product.id}`}
            className="text-white bg-slate-700 hover:bg-slate-900 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
