document.addEventListener('DOMContentLoaded', () => {
    displayPokemonDetails();
    console.log("Fichier JavaScript chargé !");
});

// Fonction pour récupérer l'ID depuis l'URL
function getPokemonIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // Récupère l'ID depuis les paramètres d'URL
}

// Fonction pour afficher les détails du Pokémon
async function displayPokemonDetails() {
    const pokemonId = getPokemonIdFromUrl(); // Cette fonction doit retourner l'ID correctement

    console.log("ID Pokémon récupéré :", pokemonId); // Ajout d'un log
    
    if (!pokemonId) {
        console.error('ID de Pokémon manquant');
        return;
    }

    try {
        const response = await fetch(`http://localhost:4000/api/pokemons/${pokemonId}`);
console.log("Réponse du serveur:", response);
        
        // Vérification de la réponse
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données du Pokémon");
        }
        
        const pokemon = await response.json();
        console.log("Données du Pokémon :", pokemon); // Ajout d'un log
        const detailsContainer = document.getElementById('card-pokemonDetail');
        
        // Construire l'URL de l'image du Pokémon
        const imageUrl = `assets/img/${pokemon.id}.webp`;

        // Mettre à jour les détails du Pokémon
        detailsContainer.innerHTML = `
            <h2 class="card__title">${pokemon.name}</h2>
            <img src="${imageUrl}" alt="${pokemon.name}">
            <section class="informations">
            <p><strong>PV : </strong>${pokemon.hp}</p>
            <p><strong>Attaque : </strong>${pokemon.atk}</p>
            <p><strong>Défense : </strong>${pokemon.def}</p>
            <p><strong>Attaque Spéciale : </strong>${pokemon.atk_spe}</p>
            <p><strong>Défense Spéciale : </strong>${pokemon.def_spe}</p>
            <p><strong>Rapidité : </strong>${pokemon.speed}</p>
        </section>
            `;
    } catch (error) {
        console.error('Erreur:', error);
    }
}
