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

// const stopPropagation = function (e) {
//   e.stopPropagation();
// };
// button_close.addEventListener("click", stopPropagation);
