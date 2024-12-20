// Fonction pour ajouter la classe "active" au lien correspondant à la page actuelle
function setActiveMenuItem() {
  const path = window.location.pathname; // Récupère le chemin de l'URL
  const menuItems = document.querySelectorAll('.side-menu .menu-item a');

  menuItems.forEach(item => {
      const itemPath = new URL(item.href, window.location.origin).pathname; // Pour comparer les URLs
       if (itemPath === path) {
          item.parentElement.classList.add('active'); // Ajoute la classe "active" au parent du lien
      }
  });
}

// Appeler la fonction au chargement de la page
window.onload = setActiveMenuItem;