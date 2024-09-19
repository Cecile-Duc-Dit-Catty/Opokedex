async function fetchPokemonsByType() {
  const urlParams = new URLSearchParams(window.location.search);
  const typeId = urlParams.get('id'); // Récupérer l'ID depuis l'URL

  try {
    const response = await fetch(`http://localhost:4000/api/type/${typeId}/pokemons`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des pokémons');
    }
    const pokemons = await response.json(); 
    updatePokemonsContent(pokemons); // Utilisation de pokemons
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function updatePokemonsContent(data) {
  const container = document.getElementById('container__pokemons');
  container.innerHTML = ''; // Vider le conteneur avant de le remplir

  data.forEach(pokemon => {
    const pokemonItem = document.createElement('article');
    pokemonItem.classList.add('card');
    pokemonItem.innerHTML = `
      <a href="pokemon.html?id=${pokemon.id}">
        <h2>${pokemon.name}</h2>
        <img src="/front/assets/img/${pokemon.id}.webp" alt="${pokemon.name}">
      </a>
    `;
    container.appendChild(pokemonItem);
  });
}

// Appeler la fonction pour récupérer les Pokémon par type lorsque la page est chargée
window.onload = fetchPokemonsByType;
