const options = document.querySelectorAll('.option');

const correctAnswers = [
    "Parce qu'il n'a aucun pouvoir magique.",
    "Il prépare des potions magiques.",
    "Parce qu'il est trop gentil.",
    "Il aide sa maman en réglant le problème avec ses sœurs sans magie.",
    "Qu'il est parfait tel qu'il est, même sans être méchant."
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
        const questionIndex = Array.from(option.closest('.question2').parentElement.children).indexOf(option.closest('.question2'));
        
        // Vérifie si la réponse est correcte
        if (option.textContent.localeCompare(correctAnswers[questionIndex - 2]) == 0) {
            option.classList.add('correct')
        } else {
            option.classList.add('incorrect');
        }
    });
});

