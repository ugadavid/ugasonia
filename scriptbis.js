// script.js

// Configuration initiale
const words = [
  { word: "SAPIN", found: false },
  { word: "CADEAU", found: false },
  { word: "RENNE", found: false },
  { word: "NEIGE", found: false },
  { word: "ETOILE", found: false },
  { word: "PERE NOEL", found: false },
];

const gridSize = 10; // Taille de la grille (10x10)
const gridContainer = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
let score = 0;
let selectedCells = [];

// Générer la grille de jeu
function generateGrid() {
  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));

  // Placer les mots dans la grille
  words.forEach(({ word }) => placeWordInGrid(word, grid));

  // Remplir les cases vides avec des lettres aléatoires
  for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
          if (!grid[i][j]) {
              grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          }
      }
  }

  // Afficher la grille dans le DOM
  displayGrid(grid);
}

// Placer un mot dans la grille de façon aléatoire
function placeWordInGrid(word, grid) {
  const directions = ["horizontal", "vertical", "diagonal"];
  let placed = false;

  while (!placed) {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);
      placed = canPlaceWord(word, grid, row, col, direction);
      if (placed) writeWord(word, grid, row, col, direction);
  }
}

// Vérifier si un mot peut être placé
function canPlaceWord(word, grid, row, col, direction) {
  if (direction === "horizontal" && col + word.length > gridSize) return false;
  if (direction === "vertical" && row + word.length > gridSize) return false;
  if (direction === "diagonal" && (col + word.length > gridSize || row + word.length > gridSize)) return false;

  for (let i = 0; i < word.length; i++) {
      const newRow = row + (direction === "vertical" || direction === "diagonal" ? i : 0);
      const newCol = col + (direction === "horizontal" || direction === "diagonal" ? i : 0);
      if (grid[newRow][newCol] && grid[newRow][newCol] !== word[i]) {
          return false;
      }
  }

  return true;
}

// Placer le mot dans la grille
function writeWord(word, grid, row, col, direction) {
  for (let i = 0; i < word.length; i++) {
      const newRow = row + (direction === "vertical" || direction === "diagonal" ? i : 0);
      const newCol = col + (direction === "horizontal" || direction === "diagonal" ? i : 0);
      grid[newRow][newCol] = word[i];
  }
}

// Afficher la grille dans le DOM
function displayGrid(grid) {
  gridContainer.innerHTML = ""; // Réinitialiser la grille
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gap = "2px";

  grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
          const cellElement = document.createElement("div");
          cellElement.classList.add("cell");
          cellElement.textContent = cell;
          cellElement.dataset.row = rowIndex;
          cellElement.dataset.col = colIndex;

          cellElement.style.display = "flex";
          cellElement.style.alignItems = "center";
          cellElement.style.justifyContent = "center";
          cellElement.style.border = "1px solid #ccc";
          cellElement.style.fontSize = "16px";
          cellElement.style.cursor = "pointer";

          cellElement.addEventListener("click", () => handleCellClick(rowIndex, colIndex, cellElement));

          gridContainer.appendChild(cellElement);
      });
  });
}

// Gérer le clic sur une cellule
function handleCellClick(row, col, cellElement) {
  if (!cellElement.classList.contains("selected")) {
      cellElement.classList.add("selected");
      cellElement.style.backgroundColor = "#aaa";
      selectedCells.push({ row, col, letter: cellElement.textContent });
  }

  checkWord();
}

// Vérifier si une séquence de lettres forme un mot
function checkWord() {
  const selectedWord = selectedCells.map(cell => cell.letter).join("");

  for (const wordObj of words) {
      if (!wordObj.found && wordObj.word === selectedWord) {
          wordObj.found = true;
          selectedCells.forEach(cell => {
              const cellElement = document.querySelector(
                  `[data-row='${cell.row}'][data-col='${cell.col}']`
              );
              cellElement.style.backgroundColor = "#0f0"; // Fond vert pour les mots trouvés
          });

          selectedCells = [];
          score++;
          scoreDisplay.textContent = score;

          if (words.every(w => w.found)) {
              setTimeout(() => alert("Félicitations ! Vous avez trouvé tous les mots !"), 200);
          }

          return;
      }
  }

  // Si le mot sélectionné ne correspond à rien, attendre plus de clics
  if (selectedCells.length > Math.max(...words.map(w => w.word.length))) {
      selectedCells.forEach(cell => {
          const cellElement = document.querySelector(
              `[data-row='${cell.row}'][data-col='${cell.col}']`
          );
          cellElement.classList.remove("selected");
          cellElement.style.backgroundColor = "";
      });
      selectedCells = [];
  }
}

// Réinitialiser le jeu
function resetGame() {
  score = 0;
  scoreDisplay.textContent = score;
  selectedCells = [];
  words.forEach(word => (word.found = false));
  generateGrid();
}

document.getElementById("reset").addEventListener("click", resetGame);

// Initialiser le jeu
generateGrid();
