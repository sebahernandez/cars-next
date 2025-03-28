"use client";

import React, { useState, useEffect } from "react";
import Car from "@/components/Car";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterBrand, setFilterBrand] = useState("");
  const [visibleCars, setVisibleCars] = useState(8);
  const [filteredCars, setFilteredCars] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = `${process.env.NEXT_PUBLIC_TOKEN_KEY}`;
        const url = "https://venpu.cl/api";
        const response = await fetch(`${url}/cars/stock`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const r = await response.json();
        if (r.status) {
          setStocks(r.data);
        } else {
          console.log(r.error);
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, sortOrder, filterBrand]);

  useEffect(() => {
    let cars = stocks
      .filter((car) => {
        const searchTermLower = searchTerm.toLowerCase();
        const carNameLower = car.name?.toLowerCase();
        const carLocationLower = car.location?.toLowerCase();
        const carPriceString = car.price?.toString();
        const carMilesString = car.miles?.toString();
        const carFuelTypeLower = car.fuelType?.toLowerCase();
        const carTransmissionLower = car.transmission?.toLowerCase();

        return (
          (carNameLower && carNameLower.includes(searchTermLower)) ||
          (carLocationLower && carLocationLower.includes(searchTermLower)) ||
          (carPriceString && carPriceString.includes(searchTerm)) ||
          (carMilesString && carMilesString.includes(searchTerm)) ||
          (carFuelTypeLower && carFuelTypeLower.includes(searchTermLower)) ||
          (carTransmissionLower &&
            carTransmissionLower.includes(searchTermLower))
        );
      })
      .filter((car) => (filterBrand ? car.brand === filterBrand : true));

    if (sortOrder === "desc") {
      cars.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/,/g, ""));
        const priceB = parseFloat(b.price.replace(/,/g, ""));
        return priceB - priceA; // Orden descendente
      });
    } else {
      cars.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/,/g, ""));
        const priceB = parseFloat(b.price.replace(/,/g, ""));
        return priceA - priceB; // Orden ascendente
      });
    }

    setFilteredCars(cars);
    setVisibleCars(8);
  }, [stocks, searchTerm, sortOrder, filterBrand]);

  const loadMoreCars = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 8);
  };

  const uniqueBrands = Array.from(
    new Set(stocks.map((product) => product.brand))
  ).sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  return (
    <div className="mx-3 mt-[120px] md:container md:mx-auto md:mt-[120px] px-3 md:px-10">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Nuestro Catálogo de autos
        </h1>
        <span className="text-gray-600">
          Contamos con stock de vehículos de las mejores marcas
        </span>
      </div>
      <div className="flex flex-col md:flex-row mb-2 space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Buscar un auto..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 flex-grow"
        />
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="asc">Precio Menor</option>
          <option value="desc">Precio Mayor</option>
        </select>
        <select
          onChange={(e) => setFilterBrand(e.target.value)}
          className="border p-2"
        >
          <option value="">Todas las Marcas</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ClimbingBoxLoader
            color="#36d7b7"
            loading={isLoading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-0">
          {filteredCars?.length > 0 &&
            filteredCars
              .slice(0, visibleCars)
              .map((car) => <Car key={car.id} product={car} />)}
          {visibleCars < filteredCars.length && (
            <div className="flex justify-center items-center w-full my-6 sm:col-span-1 md:col-span-2 md:col-start-2 md:col-end-4">
              <button
                onClick={loadMoreCars}
                className="bg-cyan-200 text-black hover:bg-cyan-500 hover:text-white font-bold py-2 px-4 rounded"
              >
                Cargar más
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
