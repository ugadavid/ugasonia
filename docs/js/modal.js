

export const displayModal = (score, totalQuestions) => {
  //event.preventDefault(); // Empêche le rechargement de la page
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const closeModalButton = document.getElementById('close-modal');

  // Mettre à jour le contenu de la modal
  modalMessage.textContent = `Tu as obtenu ${score}/${totalQuestions} réponses correctes.`;
  modal.style.display = 'flex'; // Affiche la modal

}

export const closeModal = () => {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // Cache la modal
};


const close = document.getElementById('close-modal');
close.addEventListener('click', closeModal); // Ferme la modal lorsqu'on clique sur le bouton de fermeture


  