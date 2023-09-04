/* *****************************************************************
MENU BURGER
***************************************************************** */

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeButton.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/* *****************************************************************
ANIMATION TITRE KER ROZENN
***************************************************************** */

// Déclare une variable appelée "customCursor" et la relie à un élément HTML ayant la classe "custom-cursor".
const customCursor = document.querySelector(".custom-cursor");

// Ajoute un écouteur d'événements pour suivre le mouvement de la souris dans la fenêtre du navigateur.
window.addEventListener("mousemove", handleCustomCursor);

// Crée une fonction appelée "handleCustomCursor" qui s'exécute à chaque mouvement de la souris.
function handleCustomCursor(e) {
  // Déplace le curseur personnalisé pour suivre la position de la souris.
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

// Déclare plusieurs variables et les relie à des éléments HTML spécifiques.
const title = document.querySelector("h1");
const subtitle = document.querySelector(".subtitle");
const heroPushLink = document.querySelector(".hero-push-link");
const txt = "KER ROZENN";

// Crée une fonction appelée "typewriter" pour simuler l'effet d'une machine à écrire.
function typewriter(text, index) {
  // Si l'index est supérieur à 3, ajoute la classe "active" à l'élément "subtitle".
  if (index > 3) subtitle.classList.add("active");
  // Si l'index est supérieur à 6, ajoute la classe "active" à l'élément "heroPushLink".
  if (index > 6) heroPushLink.classList.add("active");
  // Si l'index est inférieur à la longueur du texte, continue à ajouter des caractères un par un.
  if (index < text.length) {
    setTimeout(() => {
      // Ajoute un caractère du texte au titre (entouré de balises HTML <span>).
      title.innerHTML += `<span>${text[index]}</span>`;
      // Appelle la fonction "typewriter" de manière récursive pour le caractère suivant.
      typewriter(text, index + 1);
    }, 150); // Attends 150 millisecondes avant d'ajouter le caractère suivant.
  }
}

// Après 300 millisecondes, commence à appeler la fonction "typewriter" avec le texte "KER ROZENN".
setTimeout(() => {
  typewriter(txt, 0);
}, 300);

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

  if (scrollValue > 0.5) {
    containerCarte.style.opacity = 1; //rend visible l'élément
    containerCarte.style.transform = "none"; //
  }
  // Popup

  if (scrollValue > 1 && playOnce) {
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

    // Effacez le champ email après validation
    champEmail.value = "";
  } else {
    // L'adresse e-mail est invalide, affichez un message d'erreur ou effectuez une action appropriée
    alert(
      "Adresse e-mail invalide. Veuillez entrer une adresse e-mail valide."
    );
  }

  // Affichez la valeur dans la console (ou utilisez-la comme vous le souhaitez)
  console.log("Adresse e-mail : " + valeurEmail);
}

/* ***************************************************************** */
