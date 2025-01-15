"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Article } from "../types/article";



const Menu = () => {
  const [articles, setArticles] = useState<Article[]>([]); 
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

  const deleteArticle = async (id: number) => {
    try {
      await axios.delete(`https://localhost:7273/articles/${id}`);
      setArticles(articles.filter((article) => article.id !== id));
      alert("Article supprimé avec succès");
    } catch (error) {
      console.error("erreur =", error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center poppins relative ">
      <h1 className="text-red-500 text-2xl py-2">Notre menu :</h1>

      {/* Entrées */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Entrées</h2>
        <ul className="flex flex-col gap-4 border-b-transparent">
          {articles
            .filter((article) => article.categorieId === 1)
            .map((article) => (
              <div className="relative">
                  <li key={article.id} className="shadow-md p-4">
                    <h3 className="">{article.nom}</h3>
                    <p>Prix : {article.prix}€</p>
                    <button onClick={() => deleteArticle(article.id)} className="text-red-600 p-2 absolute right-0 top-0">
                      X
                    </button>
                  </li> 
                </div>
            ))}
        </ul>
      </div>

      {/* Plats */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Plats</h2>
        <ul className="flex flex-col gap-4 border-b-transparent">
          {articles
            .filter((article) => article.categorieId === 2)
            .map((article) => (
                <div className="relative">
                <li key={article.id} className="shadow-md p-4">
                  <h3 className="">{article.nom}</h3>
                  <p>Prix : {article.prix}€</p>
                  <button onClick={() => deleteArticle(article.id)} className="text-red-600 p-2 absolute right-0 top-0">
                    X
                  </button>
              </li>
              </div>
            ))}
        </ul>
      </div>

      {/* Desserts */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-500">Desserts</h2>
        <ul className="flex flex-col gap-4 border-b-transparent">
          {articles
            .filter((article) => article.categorieId === 3)
            .map((article) => (
              <div className="relative">
                  <li key={article.id} className="shadow-md p-4">
                    <h3 className="">{article.nom}</h3>
                    <p>Prix : {article.prix}€</p>
                    <button onClick={() => deleteArticle(article.id)} className="text-red-600 p-2 absolute right-0 top-0">
                      X
                    </button>
                  </li> 
                </div>
            ))}
            
        </ul>
        <Link href="/commande">
  <div className="flex justify-center mt-4">
    <button className="p-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
      Ajouter un article
    </button>
  </div>
</Link>
      </div>
    </div>
  );
};
export default Menu;
