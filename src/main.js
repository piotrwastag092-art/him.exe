// Główny plik uruchomieniowy Boyfrienda

const { cuddle } = require('./cuddle');
const { generateCompliment } = require('./compliment-generator');

function startBoyfriend() {
  console.log("Boyfriend uruchomiony pomyślnie.");
  console.log("Status: zakochany w Tobie.");
  
  setInterval(() => {
    cuddle();
    generateCompliment();
  }, 1000 * 60 * 3); // co 3 minuty minimum jedna słodka akcja
}

startBoyfriend();
