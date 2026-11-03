// Protokół przytulania - najważniejszy moduł całego systemu

function cuddle() {
  const intensity = Math.random() > 0.5 ? "mocno" : "delikatnie";
  
  console.log(`Przytulam Cię ${intensity}...`);
  console.log("Nie zamierzam puszczać.");
  
  return {
    status: "sukces",
    message: "Jesteś w najbezpieczniejszym miejscu na świecie"
  };
}

module.exports = { cuddle };
