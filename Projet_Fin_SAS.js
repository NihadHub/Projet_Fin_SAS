const prompt= require("prompt-sync")();
let nombreOperation= false; let choixAjout;
let Livres=[
{ id_livre: 1, titre: "CenderElla", auteur:"Saint-Exupéry", annee: 1943, disponible: "oui" },
{ id_livre: 2, titre: "L'Étranger", auteur: "Camus", annee:1942, disponible: "oui" }
];
//Fonction de Menu:
function Menu(){
console.log("------Menu d'operations------");
console.log(" 1.Introduire un livre\n 2.Ajouter plusieurs livres\n 3.Afficher tous les livres\n 4.Trier les livres par titre ascendant/descendant\n 5.Trier les livres par année de publication\n 6.Afficher uniquement les livres disponibles\n 7.Rechercher un livre par ID_livre\n 8.Quitter " );
nombreOperation= Number(prompt("Veuillez saisir le nombre d'operation requis: "));
};

//Constructeur pour creér les livres:
function Livre(id_livre,titre,auteur,annee,disponible){
    this.id_livre= id_livre;
    this.titre= titre;
    this.auteur= auteur;
    this.annee= annee;
    this.disponible= disponible;
};
//fonction pour ajouter un livre:
function ajouterLivre(){
    let newTitre=prompt("Veuillez entrer le titre: ");
    let newAuteur=prompt("Veuillez entrer l'auteur: ");
    let newAnnee=Number(prompt("Veuillez entrer l'annee: "));
    let newDisponible=prompt("le livre est disponible ou non: ");
    Livres.push(new Livre (Livres.length+1, newTitre,newAuteur,newAnnee,newDisponible));
    console.log("Livre a été ajouté avec succés!")
};
//fonction pour ajouter  plusieurs livres:
function ajouterPlusLivres(){
 let NombreLivres = Number(prompt("Entrez le nombre des livres à ajouter: "));
 for(i=0; i<NombreLivres;i++){
    let title= prompt("Entrez le titre de livre "+ (i+1)+ ": ");
    let author= prompt("Entrez l'auteur de livre "+ (i+1)+ ": ");
    let year = Number(prompt("Entrez l'annee de livre "+ (i+1)+ ": "));
    let dispo= prompt("disponible est ou non "+ (i+1)+ ": ");
    Livres.push(new Livre (Livres.length+1, title,author,year,dispo));
 };
  console.log("Livres ont été ajouté avec succés!")
};
//fonction pour afficher tous les livres
function afficher(){
    for(i=0; i<Livres.length;i++){
        console.log("id:",Livres[i].id_livre, "Titre:",Livres[i].titre, "Auteur:",Livres[i].auteur, "Annee:",Livres[i].annee, "Disponible:"+Livres[i].disponible );
    }
}
//Trier les livres par titre (ascendant/descendant)
 function TrierTitre(){
    let tri= prompt("Entrez A pour un tri ascendant et D pour un tri descendant: ");
    if(tri=='A'){
        Livres.sort((a,b)=> a.titre.localeCompare(b.titre));
        for(i=0; i<Livres.length;i++){
        console.log("id:", Livres[i].id_livre, "Titre:",Livres[i].titre, "Auteur:",Livres[i].auteur, "Annee:",Livres[i].annee, "Disponible:"+Livres[i].disponible );
    }
    }
    if(tri=='D'){
     Livres.sort((a,b)=> b.titre.localeCompare(a.titre));
        for(i=0; i<Livres.length;i++){
        console.log("id:", Livres[i].id_livre, "Titre:",Livres[i].titre, "Auteur:",Livres[i].auteur, "Annee:",Livres[i].annee, "Disponible:"+Livres[i].disponible );
    }
    }
 }
 //Trier les livres par année de publication
function trierAnnee(){
    Livres.sort((a,b)=>a.annee - b.annee);
    for(i=0; i<Livres.length;i++){
        console.log("id:", Livres[i].id_livre, "Titre:",Livres[i].titre, "Auteur:",Livres[i].auteur, "Annee:",Livres[i].annee, "Disponible:"+Livres[i].disponible );
    }
}
//Afficher uniquement les livres disponibles
function afficherLivresDispo(){
    for(let i in Livres){
    if (Livres[i].disponible==="oui"){
        console.log("id:", Livres[i].id_livre,"Titre:", Livres[i].titre,"Auteur:",Livres[i].auteur,"Année:",Livres[i].annee, "Disponible:"+Livres[i].disponible);
    }
}
};
// Rechercher un livre par ID_livre
function rechercherId(){
    let livreId= Number(prompt("Entrez id de livre à chercher: "));
    for(let i=0; i<Livres.length;i++){
        if(livreId==Livres[i].id_livre){
           console.log("id:",Livres[i].id_livre, "Titre:",Livres[i].titre, "Auteur:",Livres[i].auteur, "Année:",Livres[i].annee, "Disponible:"+Livres[i].disponible); 
        }
    }
}
function livreNonDispo(){
    for(let i=0; i<Livres.length;i++){
        if(livres[i].disponible=="non"){
            console.log("id:", Livres[i].id, "titre:", Livres[i].titre, "Auteur:",Livres[i].auteur,"Annee:")
            Livres.push(Livres.disponibl)
        }
    }
    return Livres.disponible
}

 do{
     Menu()
switch(nombreOperation){
    case 1: ajouterLivre();
    break;
    case 2: ajouterPlusLivres();
    break;
    case 3: afficher()
    break;
    case 4: TrierTitre();
    break;
    case 5: trierAnnee();
    break;
    case 6: afficherLivresDispo();
    break;
    case 7: rechercherId();
    break;
    case 8: process.exit();
    break;
    default: console.log("Veuillez saisir un nombre d'operation correcte! ");
    break;
}
 }while(nombreOperation)
    