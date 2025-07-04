//// Modal d'un activités

// je vais selectionner l'element qui va ouvrir mon modal
let btn = document.querySelector(".ouvrir_modal");

// je selectionne aussi le modal
let modal_box = document.getElementById("mon_modal");

// je selectionne l'element qui va fermer mon modal
let fermer_modal = document.querySelector(".fermer_modal");

// je vais faire la foction pour que quand on appuie sur le boutton , le modal s'ouvre . pour je vais faire apparaitre la section du modal que j'ai mise en none par defaut dans mon CSS .

btn.addEventListener("click", ouvrir_modal);
function ouvrir_modal() {
  modal_box.style.display = "block ";
}

// de même pour la fermetture du modal , je vais recuperer mon button et quand on appuie dessus il va remettre le display à none

fermer_modal.addEventListener("click", hide_le_modal);
function hide_le_modal() {
  modal_box.style.display = "none";
}
