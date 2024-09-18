// Fonction pour récupérer les données de l'API
async function fetchData() {
  try {
      const response = await fetch('http://localhost:4000/api/pokemons'); // URL de de mon API
      if (!response.ok) {
          throw new Error('Erreur de réseau');
      }
      const data = await response.json();
      updateContent(data);
  } catch (error) {
      console.error('Erreur:', error);
  }
}

function updateContent(data) {
    const container = document.getElementById('pokemon-list');
    container.innerHTML = ''; // Vider le conteneur avant de le remplir

    data.forEach(pokemon => {
        
        const pokemonItem = document.createElement('article');
        // construire l'URL de l'image en fonction de l'ID du pokémon :
        const imageUrl =`assets/img/${pokemon.id}.webp`
        // Construire l'URL de la page des détails du Pokémon
        const detailPageUrl = `pokemon.html?id=${pokemon.id}`

        pokemonItem.classList.add('card'); // Ajouter une classe pour le style
        pokemonItem.innerHTML = `
        <a href="${detailPageUrl}">
            <h2>${pokemon.name}</h2>
            <img src="${imageUrl}" alt="${pokemon.name}">
            </a>
        `;
        container.appendChild(pokemonItem);
    });
}


// Appeler la fonction pour récupérer les données lorsque la page est chargée
window.onload = fetchData;
