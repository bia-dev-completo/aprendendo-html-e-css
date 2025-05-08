const selectCustomTitle = document.getElementById("customTitle");
console.log("Título selecionado:", selectCustomTitle);

const selectButtons = document.getElementsByTagName("button");
console.log("Botões da página:", selectButtons);

const selectBoldTexts = document.getElementsByClassName("boldText");
console.log("Textos em bold:", selectBoldTexts);

const boldTexts = document.querySelector(".boldText");
console.log("Bold texts: ", boldTexts);

const allBoldTexts = document.querySelectorAll(".boldText");
console.log("All Bold texts: ", allBoldTexts);
