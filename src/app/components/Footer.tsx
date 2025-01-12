import React from "react";

const Footer = () => {
  return (
    <div className="bg-teal-950 text-white poppins m-auto flex items-center justify-between border-t-2 p-8">
      <div className="flex  flex-col">
        <h3>RestauSimplon</h3>
        <p>© 2024. Tous droits réservés.</p>
      </div>

      <ul className="list-none inline-block">
        <li>Mentions légales</li>
        <li>Confidentialité</li>
      </ul>
    </div>
  );
};

export default Footer;
