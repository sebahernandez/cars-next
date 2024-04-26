import React from "react";
import Image from "next/image";

const UserContact = ({ imageUrl, email, phoneNumber, name }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover object-top"
          src={imageUrl}
          alt="Profile image"
          width={24}
          height={24}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
        <div className="flex mt-4">
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300   "
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserContact;
