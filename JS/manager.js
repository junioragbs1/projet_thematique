let envoie = document.querySelector(".Button");
// je selectionne le button qu'on va appyer pour envoyer dans la session storage

// je recupère la valeur de l'input nom

function addInfos() {
  let entreNom = document.getElementById("Nom").value;
  let entrePrenom = document.getElementById("Prenom").value;
  let entreMail = document.getElementById("Email").value;
  let entreMsgs = document.getElementById("story").value;

  JSON.stringify(entreNom);
  JSON.stringify(entrePrenom);
  JSON.stringify(entreMail);
  JSON.stringify(entreMsgs);

  //1 convertir ce qu'on recois en string car le local ne prends en compte que les string .

  //2 L'ajouter au local storage
  sessionStorage.setItem("Nom", JSON.stringify(entreNom));
  sessionStorage.setItem("Prenom", JSON.stringify(entrePrenom));
  sessionStorage.setItem("Email", JSON.stringify(entreMail));
  sessionStorage.setItem("story", JSON.stringify(entreMsgs));

  // localStorage.setItem("la clé", JSON.stringify(entrePrenom));

  window.confirm("Vous confirmez ces informations ?");
  // avec cette ligne , elle va afficher une alerte pour demander une confirmation et avec "ok" les infos s'envoie à la sessionStorage

  console.log(window.sessionStorage);
}

envoie.addEventListener("click", addInfos);
