"use client";
import React, { useState } from "react";
import axios from "axios";

const CreateArticles = () => {
  const [article, setArticle] = useState({
    nom: "",
    prix: "",
    categorieId: "",
  }); // Ici on initialise notre state avec nos attributs vide

  // ChangeEvent gestionnaire d'evenemnt, déclenche a chaque modification d'un champ de
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    //
    const { name, value } = event.target;
    setArticle({
      ...article, // Opérateur de décomposition qui permet de copier les valeurs de notre state
      [name]: value,
    });
  };

  // Fonction qui POST le result de notre formulaire avec FormEvent
  const postArticles = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7273/articles", article);
      alert("Article created successfully");
    } catch (error) {
      console.error("There was an error creating the article!", error);
    }
  };

  return (
    <div className="flex flex-col items-center poppins">
      <h1 className="text-2xl mb-4 text-red-500 mt-6">
        Ajouter un article au menu
      </h1>
      <form
        onSubmit={postArticles}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="nom"
          value={article.nom}
          onChange={handleChange}
          placeholder="Nom"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="prix"
          value={article.prix}
          onChange={handleChange}
          placeholder="Prix"
          className="border p-2 rounded"
          required
        />
        <select
          name="categorieId"
          value={article.categorieId}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Choisisez votre catégorie</option>
          <option value="1">Entrées</option>
          <option value="2">Plats</option>
          <option value="3">Desserts</option>
        </select>
        <button type="submit" className="bg-red-600 text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default CreateArticles;
