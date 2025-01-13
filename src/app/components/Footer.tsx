import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white poppins m-auto flex flex-col md:flex-row items-center justify-between border-t-2 p-8">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <h3 className="text-lg font-bold">RestauSimplon</h3>
        <p>© 2024. Tous droits réservés.</p>
      </div>

      <ul className="list-none flex flex-col md:flex-row gap-4">
        <li><a href="*" className="hover:underline">Mentions légales</a></li>
        <li><a href="*" className="hover:underline">Confidentialité</a></li>
      </ul>
    </footer>
  );
};

export default Footer;