import { updateScoreDisplay } from './scoreManager.js';

    document.addEventListener('DOMContentLoaded', () => {
        // Appel de la fonction pour mettre à jour l'affichage du score
        updateScoreDisplay('score');

        const form = document.querySelector('form');
        const modal = document.getElementById('modal');
        const modalMessage = document.getElementById('modal-message');
        const closeModalButton = document.getElementById('close-modal');
        const scoreDiv = document.getElementById('score');

        const correctAnswers = {
            line1: 'ce',
            line2: "s'est",
            line3: "C'est",
            line4: 'ses',
            line5: 'Ce',
        };

        // Met à jour l'affichage initial
        updateScoreDisplay();

        // Gestion de la validation du formulaire
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Empêche le rechargement de la page

            let score = 0;
            const totalQuestions = Object.keys(correctAnswers).length;

            for (const [key, value] of Object.entries(correctAnswers)) {
                const input = document.getElementById(key);
                if (input && input.value.trim().toLowerCase() === value.toLowerCase()) {
                    input.style.backgroundColor = 'lightgreen';
                    score++;
                } else {
                    input.style.backgroundColor = 'lightcoral';
                }
            }

            
            // Enregistre le score et met à jour l'affichage
            saveScore(score);
            updateScoreDisplay('score');
        });

        
    });