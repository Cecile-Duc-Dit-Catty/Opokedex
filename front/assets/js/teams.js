// Fonction pour récupérer les données de l'API
async function fetchData() {
  try {
    const response = await fetch('http://localhost:4000/api/teams'); // URL de l'API
    if (!response.ok) {
      throw new Error('Erreur de réseau');
    }
    const data = await response.json();
    console.log("Données récupérées:", data); // Affiche les données récupérées
    updateContent(data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function updateContent(data) {
  const container = document.getElementById('teamCards');
  container.innerHTML = ''; // Vider le conteneur avant de le remplir

  data.forEach(team => {
    const teamItem = document.createElement('section');
    teamItem.classList.add('cards-container'); // Ajouter la classe pour le style

    teamItem.innerHTML = `
      <div class="header__card">
        <a href="team.html?id=${team.id}">
          <h2>${team.name}</h2>
        </a>
        <div class="button__card">
          <img src="/front/assets/icons/xmark-solid.svg" alt="">
        </div>
      </div>
    `;

    // Vérifier si Pokemons est défini et est un tableau
    if (Array.isArray(team.Pokemons)) {
      team.Pokemons.forEach(pokemon => {
        const imageUrl = `../front/assets/img/${pokemon.id}.webp`; // Chemin de l'image du Pokémon
        const detailPageUrl = `pokemon.html?id=${pokemon.id}`; // Chemin de la page de détail

        const pokemonItem = document.createElement('article');
        pokemonItem.classList.add('card'); // Ajouter une classe pour le style
        pokemonItem.innerHTML = `
          <a href="${detailPageUrl}">
            <h2>${pokemon.name}</h2>
            <img src="${imageUrl}" alt="${pokemon.name}">
          </a>
        `;

        teamItem.appendChild(pokemonItem); // Ajouter Pokémon à la section teamCards
      });
    }

    container.appendChild(teamItem); // Ajouter l'équipe au conteneur principal
  });
}

// Appeler la fonction pour récupérer les données lorsque la page est chargée
window.onload = fetchData;
