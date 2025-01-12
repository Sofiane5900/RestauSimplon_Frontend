import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between w-full max-w-screen-xl 2xl:max-w-screen-2xl m-auto px-8 py-20">
      {/* Left Section */}
      <div className="text-center xl:text-left space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold poppins text-teal-950">
          Faites votre commande avec{" "}
          <span className="text-red-600">RestauSimplon</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Ajoutez, modifiez ou supprimez des articles du menu en quelques clics.
          Simplifiez la gestion de vos plats pour offrir la meilleure expérience
          à nos clients.
        </p>
        <div className="flex flex-col gap-4 xl:flex-row">
          <button className="px-6 py-3 bg-teal-950 text-white rounded-md shadow-md hover:bg-teal-700 transition">
            Voir les clients
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500 transition">
            Faire une commande
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-shrink-0 py-10">
        <Image src={HeroImage} alt="Hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
