"use client"

import "./input.scss"

import { useEffect, useState } from "react"

import Button from "../Button";
import React from 'react'

function Input() {

    // Initialisation de l'état local pour stocker la valeur de l'input
    const [inputValue, setInputValue] = useState('');

    // Fonction de gestion du changement de l'input
    const handleInputChange = (e) => {
        // Mise à jour de la valeur de l'input avec la valeur saisie
        setInputValue(e.target.value);
    };

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('inputValue', inputValue);
        // Effacement du contenu de l'input en réinitialisant la valeur de l'état local
        console.log('Valeur enregistrée dans le localStorage :', inputValue);
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('inputValue');
        if (storedValue) {
            setInputValue(storedValue);
        }
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit} id="formulaire">
                <input id="input-name" type="texte" placeholder="Veuillez entrer votre nom ou pseudo" onChange={handleInputChange} value={inputValue} />
                <Button type="submit" >Valider</Button>
                <div className="welcome">{inputValue && <p>Bonne fête et bon appétit {inputValue} !</p>}</div>
            </form>
        </div>
    )
}

export default Input
