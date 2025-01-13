"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  nom: string;
  prix: number;
  categorieId: number;
}

const Menu = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const getArticles = async () => {
    try {
      const response = await axios.get("https://localhost:7273/articles");
      console.log("response = ", response.data); // pour debug la response de notre appel
      setArticles(response.data); // Je popule mon etat setArticles avec les données de de la réponse
    } catch (error) {
      // Si l'essai n'a pas était reussi
      console.error("erreur =", error); // DEBUG ERROR
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  let filteredArticles;
  if (selectedCategory) {
    filteredArticles = articles.filter(
      (article) => article.categorieId === selectedCategory
    );
  } else {
    filteredArticles = articles;
  }

  return (
    <div className="flex flex-col justify-center items-center poppins">
      <h1 className="text-red-500 text-2xl py-2">Notre menu :</h1>

      {/* Entrées */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Entrées</h2>
        <ul className="flex flex-col gap-4 border-b-transparent shadow-md p-4">
          {articles
            .filter((article) => article.categorieId === 1)
            .map((article) => (
              <li key={article.id}>
                <h3 className="">{article.nom}</h3>
                <p>Prix : {article.prix}€</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Plats */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Plats</h2>
        <ul className="flex flex-col gap-4 border-b-transparent shadow-md p-4">
          {articles
            .filter((article) => article.categorieId === 2)
            .map((article) => (
              <li key={article.id}>
                <h3 className="">{article.nom}</h3>
                <p>Prix : {article.prix}€</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Desserts */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Desserts</h2>
        <ul className="flex flex-col gap-4 border-b-transparent shadow-md p-4">
          {articles
            .filter((article) => article.categorieId === 3)
            .map((article) => (
              <li key={article.id}>
                <h3 className="">{article.nom}</h3>
                <p>Prix : {article.prix}€</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
