function genererValue() {
    const valeurBase = 'https://order-app-beige.vercel.app/tables/';

    for (let i = 1; i <= 110; i++) {
        const valeur = valeurBase + i;
        // Faites quelque chose avec le valeur ici (par exemple, l'afficher ou le stocker)
        console.log(valeur);
    }
}

genererValue();