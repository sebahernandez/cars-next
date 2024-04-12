"use client";

import React, { useState, useEffect } from "react";
import Car from "@/components/Car";
import products from "@/data/products";

const Page = () => {
  const [searchTerm, setSearchTerm]     = useState("");
  const [sortOrder, setSortOrder]       = useState("asc");
  const [filterBrand, setFilterBrand]   = useState("");
  const [visibleCars, setVisibleCars]   = useState(8);
  const [filteredCars, setFilteredCars] = useState([]);
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'THOKnpRxvLcVXzuAPmKnPVPIko9s49acls#sdg$1354Gwr#%/deg476534ad35RBh9ifXqSTTREiYZ2qWLAGveKm';
        const url   = 'https://venpu.cl/api';
        const response = await fetch(`${url}/cars/stock`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
      
        const r = await response.json();
        if(r.status) setStocks(r.data);
        else console.log(r.error)
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };
    let cars = stocks
      .filter(
        (car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.price.toString().includes(searchTerm) ||
          car.miles.toString().includes(searchTerm) ||
          car.fuelType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.transmission.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((car) => (filterBrand ? car.brand === filterBrand : true));

    if (sortOrder === "desc") {
      // Para orden descendente: De mayor a menor precio
      cars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      // Por defecto (ascendente): De menor a mayor precio
      cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    setFilteredCars(cars);
    setVisibleCars(8);
    fetchData();
  }, [searchTerm, sortOrder, filterBrand,stocks]);

  const loadMoreCars = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 8);
  };

  const uniqueBrands = [
    ...new Set(products.map((product) => product.brand)),
  ].sort();

  return (
    <div className="container mx-auto px-4 md:px-0 mt-[140px]">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Nuestro Catálogo de autos
        </h1>
        <span className="text-gray-600">
          Contamos con stock de vehículos de las mejores marcas
        </span>
      </div>
      <div className="mb-2 flex justify-between">
        <input
          type="text"
          placeholder="Buscar un auto..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2 w-full"
        />
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 mr-2"
        >
          <option value="asc">Precio Menor</option> {/* Corregido */}
          <option value="desc">Precio Mayor</option> {/* Corregido */}
        </select>
        <select
          onChange={(e) => setFilterBrand(e.target.value)}
          className="border p-2"
        >
          <option value="">Todas las Marcas</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCars.slice(0, visibleCars).map((car, index) => (
          <Car key={index} product={car} />
        ))}
      </div>
      {visibleCars < filteredCars.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreCars}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cargar más
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
