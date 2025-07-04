let button = document.querySelector(".js_modal");
// on selectionne le lien qui va ouvrir ma modal.
const button_close = document.getElementsByClassName("close_modal");
let action = button.addEventListener("click", openModal);

let modal = null;

function openModal(e) {
  e.preventDefault(); // pour que le lien fo,ctionne convenablement . je l'ai trouvé pendant mes recherches .
  const target = document.querySelector(e.target.getAttribute("href"));
  // on lui dit dans la fonction qu'il doit aller chercher ce lien avec get attribute href.

  target.style.display = null; // quand on cliquera , il va enlever le display non que j'ai mise en html. et le display flex dans le css prendra le relai .Ce qui affichera le modal
  target.removeAttribute("aria-hidden");
  target.setAttribute("aria-modal", "true");
  // ce sont des attributs de accessibilité.

  modal = target;
  modal.addEventListener("click", close_modal);
  button_close.addEventListener("click", close_modal);
}

function close_modal(e) {
  e.preventDefault();
  modal.style.display = "none";
  //   modal.setAttribute("aria-hidden", true);
}
////////////////////

// on va faire le menu burger //

/* ici le but c'est de creer une fonction quand on onlick sur le logo burger il va afficher et les liens avec les classe*/

let x = document.querySelector(".icon"); // on recupere l'icone
let links = document.querySelector(".nav");
x.addEventListener("click", ouvrir_burger);
function ouvrir_burger() {
  links.classList.toggle("active");
}
