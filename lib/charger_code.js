// Récupération de l'élément "textarea"

export function DisplayInput() {
    var textarea = document.getElementById("codearea");

// Accès au contenu de la balise "textarea"
    var content = textarea.value;

// Affichage du contenu dans la console
  console.log(content);
}
