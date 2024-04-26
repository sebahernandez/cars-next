import React from "react";
import { Star1 } from "iconic-react";

export const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <Star1
          key={index}
          size="16"
          color={index < rating ? "#ff8a65" : "#e0e0e0"} // Cambia el color basado en el rating
          variant="Bold"
        />
      ))}
    </div>
  );
};
