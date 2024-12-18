const options = document.querySelectorAll('.option');

// Fonction pour gérer le clic sur une option
options.forEach(option => {
    option.addEventListener('click', () => {
        // Réinitialise la couleur des autres options dans le même bloc
        const siblingOptions = option.parentElement.querySelectorAll('.option');
        siblingOptions.forEach(sibling => {
            sibling.style.backgroundColor = '#f7f7f7';
            sibling.style.color = '#4eb8b8';
        });

        // Applique le style de sélection à l'option cliquée
        option.style.backgroundColor = '#4eb8b8';
        option.style.color = 'white';
    });
});
// Permet d'autoriser le glisser-déposer
function allowDrop(event) {
    event.preventDefault();
}

// Fonction appelée lors du démarrage du glissement
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Fonction pour déposer l'élément dans la zone correspondante
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
}
