//exercise 1
const tab = [3, 5, 10, 12];
function demande() {
    let userInput;
    do{
         userInput = +prompt(`
                    Quel est votre choix ? 
                    1/ Ajouter un chiffre
                    2/ Afficher le tableau
                    3/ Quitter
                    NB: Les resultats sont visibles dans la console.`);
    } while( userInput !== 3 && userInput !== 1 && userInput !== 2)
    return userInput;
}

function afficherTableau() {
        tab.sort((a, b) => a - b)
        console.log(tab);
    }

function ajouterChiffre() {
    let valeur;
    do {
        valeur = +prompt(`Quel chiffre voulez-vous ajouter?`);
    } while(isNaN(valeur))
 tab.push(valeur);
}

function reponse() {
    let userChoice = demande();
    do {
        switch(userChoice) {
            case 3:
                console.log(`A+`);
            break;
            case 1:
                ajouterChiffre();
                userChoice = demande();
            break;
            case 2:
                afficherTableau();
                userChoice = demande();
            break;
        }
    } while( userChoice !== 3)
}
reponse();