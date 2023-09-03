/* *****************************************************************
EFFET DE SCROLL et POPUP (menu carte et concours)
***************************************************************** */
let playOnce = true;

window.addEventListener("scroll", () => {
  //faire un pourcentage de la scrollValue
  //valeur globale du body = document.body.offsetHeight
  //niveau du scroll = window.scrollY
  //taille de la fenetre = window.innerHeight

  let scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;

  if (scrollValue > 0.65) {
    containerCarte.style.opacity = 1; //rend visible l'élément
    containerCarte.style.transform = "none"; //
  }
  // Popup

  if (scrollValue > 0.9 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});

/* *****************************************************************
RECUPERATION DE LA VALEUR EMAIL
***************************************************************** */
function obtenirValeurEmail() {
  // Récupérez l'élément input par son ID
  let champEmail = document.getElementById("emailField");
  // Récupérez la valeur du champ email
  let valeurEmail = champEmail.value;

  // Utilisation d'une regex (expression régulière) pour valider l'adresse e-mail
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (regex.test(valeurEmail)) {
    // L'adresse e-mail est valide, vous pouvez la traiter ici
    console.log("Adresse e-mail valide : " + valeurEmail);
  } else {
    // L'adresse e-mail est invalide, affichez un message d'erreur ou effectuez une action appropriée
    alert(
      "Adresse e-mail invalide. Veuillez entrer une adresse e-mail valide."
    );
  }

  // Affichez la valeur dans la console (ou utilisez-la comme vous le souhaitez)
  console.log("Adresse e-mail : " + valeurEmail);
}
