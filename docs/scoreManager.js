// scoreManager.js
export const updateScoreDisplay = (scoreElementId) => {
  const scoreElement = document.getElementById(scoreElementId);
  if (!scoreElement) {
      console.warn(`L'élément avec l'ID ${scoreElementId} est introuvable.`);
      return;
  }

  const score = sessionStorage.getItem('score');
  if (score !== null) {
      scoreElement.textContent = `Votre score : ${score}`;
  } else {
      scoreElement.textContent = "Aucun score disponible.";
  }
};

export const saveScore = (score) => {
  sessionStorage.setItem('score', score);
};

export const getScore = () => {
  return sessionStorage.getItem('score');
};
