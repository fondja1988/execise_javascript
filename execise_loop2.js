// addition et multiplication des n premiers nombres
function additionDesPremierNombres() {
    let userInput;
    let txt = `Veillez saisir votre chiffre`;
    do {
        userInput = +prompt(txt);
        txt = `Veillez saisir un chiffre valide.`
    } while(isNaN(userInput) || userInput < 0)
    let somme = 0;
   for(let i = 1; i <= userInput; i++) {
    somme += i;
    console.log(`step ${i} : Total : ${somme}`);
}
console.log(`L'addition des ${userInput} premiers nombres est ${somme}`);
}

function multiplicationDesPremiersNombres() {
    let produit = 1;
    let userInput;
    let txt = `Veillez saisir votre chiffre?`;
    do {
        userInput = +prompt(txt);
        txt = `Veillez saisir un chiffre valide.`
    } while(isNaN(userInput) || userInput < 0)

    for(let i = 1; i <= userInput; i++) {
     produit *= i;
     console.log(`step ${i} : Total : ${produit}`);
 }
 console.log(`La multiplication des ${userInput} premiers nombres est ${produit}`);
}

function demande() {
    let userInput;
    do{
         userInput = +prompt(`
                    Quel est votre choix ? 
                    1/ Addition des n premiers nombres
                    2/ Multiplication des n premiers nombres
                    3/ Quitter
                    NB: Les resultats sont visibles dans la console.`);
    } while( userInput !== 3 && userInput !== 1 && userInput !== 2)
    return userInput;
}

function reponse() {
    let userChoice = demande();
    do {
        switch(userChoice) {
            case 3:
                console.log(`A+`);
            break;
            case 1:
                additionDesPremierNombres();
                userChoice = demande();
            break;
            case 2:
                multiplicationDesPremiersNombres();
                userChoice = demande();
            break;
        }
    } while( userChoice !== 3)
}
reponse();