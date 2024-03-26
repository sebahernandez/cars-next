"use client";

import React, { useEffect, useState } from "react";
import reviewsData from "../data/reviews.json";

const CustomerReviews = () => {
  const [visibleReviews, setVisibleReviews] = useState([]);
  // Establece las primeras 3 reseñas para ser mostradas inicialmente
  useEffect(() => {
    setVisibleReviews(reviewsData.slice(0, 3));
  }, []);

  useEffect(() => {
    // Configura el intervalo para rotar las reseñas cada 3 segundos
    const interval = setInterval(() => {
      setVisibleReviews((prevReviews) => {
        // Encuentra el índice de la última reseña visible actual
        const lastReviewIndex = reviewsData.indexOf(
          prevReviews[prevReviews.length - 1]
        );
        // Calcula el inicio del nuevo conjunto de reseñas
        const nextIndex = (lastReviewIndex + 1) % reviewsData.length;
        // Obtiene las siguientes 3 reseñas
        const nextReviews = [];
        for (let i = 0; i < 3; i++) {
          nextReviews.push(reviewsData[(nextIndex + i) % reviewsData.length]);
        }
        return nextReviews;
      });
    }, 3000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex overflow-hidden">
        <div className="flex flex-row w-full justify-around">
          {visibleReviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col p-4 m-2 bg-white rounded shadow-lg"
              style={{ minWidth: "300px" }}
            >
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="ml-2 font-bold text-lg">{review.title}</span>
              </div>
              <p className="text-gray-600">{review.content}</p>
              <span className="mt-4 font-semibold text-sm">
                {review.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
