const options = document.querySelectorAll('.option');

const correctAnswers = [
    "Déclarative",
    "Interrogative",
    "Exclamative",
    "Impérative"
];

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        // Réinitialise la couleur des autres options dans le même bloc
        const siblingOptions = option.parentElement.querySelectorAll('.option');
        siblingOptions.forEach(sibling => {
            sibling.style.backgroundColor = '#f7f7f7';
            sibling.style.color = '#4eb8b8';
            sibling.classList.remove('correct','incorrect')
        });
        
        // Applique le style de sélection à l'option cliquée
        option.style.backgroundColor = '#4eb8b8';
        option.style.color = 'white';

        // Récupère l'index de la question à laquelle appartient l'option cliquée
        const questionIndex = Array.from(option.closest('.question').parentElement.children).indexOf(option.closest('.question'));

        // Vérifie si la réponse est correcte
        if (option.textContent === correctAnswers[questionIndex]) {
            option.classList.add('correct')
        } else {
            option.classList.add('incorrect');
        }
    });
});

// Fonction pour gérer le glisser-déposer
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
}