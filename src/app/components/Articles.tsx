"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    id: number;
    nom: string;
    prix: number;
    categorieId: number;
}

const Menu = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const getArticles = async () => {
        try {
            const response = await axios.get('https://localhost:7273/articles');
            console.log('response = ', response.data); // pour debug la response de notre appel
            setArticles(response.data); // Je popule mon etat setArticles avec les données de de la réponse 
        } catch (error) { // Si l'essai n'a pas était reussi
            console.error('erreur =', error); // Je debug l'error
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div>
            <h1 className='text-red-500'>Menu</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.nom}</h2>
                        <p>{article.prix}€</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;