"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false); // La navbar n'est pas "sticky" par défaut
  const [isNavOpen, setIsNavOpen] = React.useState(false); // Le menu 'hamburger' n'est pas ouvert par défaut

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        // Elle le deviens quand lon scroll a > 50 de la page sur l'axe Y
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });

  return (
    <>
      <nav
        className={`w-full flex items-center px-8 py-4 justify-between bg-white transition-all duration-300 ${
          sticky ? "fixed top-0 z-50 shadow-md" : ""
        }`} // Si sticky est true, on ajoute les classes 'fixed top-0 z-50 shadow-md'
      >
        <Image src="./logo.svg" alt="logo" width={200} height={200} />
        <ul className="hidden gap-3 md:flex md:gap-x-8 ml-auto items-center">
          <li className="text-teal-950 list-none poppins">Home</li>
          <li className="text-teal-950 list-none poppins">Menu</li>
          <li className="text-teal-950 list-none poppins">Contact</li>
          <li>
            <button className="text-white bg-teal-950 poppins py-2 px-4 rounded hover:scale-110 transition-all duration-200 ease-in-out">
              Commande
            </button>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="md:hidden ml-auto"
        >
          <span className="block w-6 h-0.5 bg-teal-950 mb-1"></span>
          <span className="block w-6 h-0.5 bg-teal-950 mb-1"></span>
          <span className="block w-6 h-0.5 bg-teal-950"></span>
        </button>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
            <ul className="flex flex-col items-center gap-y-4">
              <li className="text-teal-950 list-none poppins">Home</li>
              <li className="text-teal-950 list-none poppins">Menu</li>
              <li className="text-teal-950 list-none poppins">Contact</li>
              <button className="text-white bg-teal-950 poppins py-2 px-4 rounded">
                Commande
              </button>
            </ul>
          </div>
        )}
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
