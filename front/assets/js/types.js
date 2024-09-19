// Fonction pour récupérer les données de l'API
async function fetchTypes() {
  try {
    const response = await fetch('http://localhost:4000/api/types'); // URL de de mon API
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des types');
    }
    const types = await response.json();
    console.log('Types récupérés:', types); // Afficher les types récupérés
    updateContent(types);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function updateContent(data) {
  const container = document.getElementById('container__types');
  container.innerHTML = ''; // Vider le conteneur avant de le remplir

  data.forEach(type => {
    const typeItem = document.createElement('article');
    // Construire l'URL pour la page des Pokémon par type
    const detailPageUrl = `type.html?id=${type.id}`;

    typeItem.innerHTML = `
      <a href="${detailPageUrl}">
        <h2>${type.name}</h2>
      </a>
    `;
    container.appendChild(typeItem);
  });
}



// Appeler la fonction pour récupérer les données lorsque la page est chargée
window.onload = fetchTypes; // Correction ici
