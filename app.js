/*exercise 1*/
// let a = 1;
// let b = 5;
// console.log(`-----------avant inversion-----------`);
// console.log(`
//             A : ${a}
//             B : ${b}
//             `);
// let c = a;
// a = b;
// b = c;
// console.log(`-----------apres inversion-----------`);
// console.log(`
//             A : ${a}
//             B : ${b}
//             `);

/*exercise 2*/
// let nom = 'toto';
// let age = 30;
// let homme = true;
// const sexe = homme? 'Homme': 'femme';
// console.log(`
// Nom : ${nom}
// Age : ${age}
// Sexe : ${sexe}`);

/*exercise 3*/
// const userValue = +prompt('saisir la puissance voulue?');
// const puissanceValeurUser = Math.pow(2, userValue);
// console.log(`2 a la puissance ${userValue} = ${puissanceValeurUser}`);

/**exercise 4-trop facile */

/**exercise 5*/
// const userValue = +prompt('Quel table de multiplication voulez-vous afficher?');
// let text = '';
// for(let i = 1; i < 11; i++) {
//     text+= `${userValue} * ${i} = ${userValue * i} \n`;
// }
// console.log(text);

/**exercise 6*/
// let userInput = prompt('veillez saisir un nombre!');
// while(isNaN(+userInput)) {
//     userInput = prompt('veillez recommencer la saisir vous devez saisir un nombre!')
// }
// console.log(`le chiffre saisi est ${+userInput}`);

/**exercise 7 */
// const moduloDeTrois = valeure => {
//     if(valeure % 3 === 0) {
//         return `le resultat de ${valeure} / 3 = ${valeure / 3}`;
//     }
//     return `le chiffre ${valeure} n'est pas divisible par 3`;
// }
// console.log(moduloDeTrois(123));
// console.log(moduloDeTrois(20));

/**exercise 8-trop facile */

/**exercise 9-trop facile */

/**exercise 10*/
// const personnage = {};
// const nom = prompt('Quel est votre nom?');
// personnage.nom = nom;
// const age = +prompt('Quel est votre nom?');
// personnage.age = age;
// console.log(personnage);

/**exercise 11*/
// const div = document.querySelector('div');
//       div.innerText = 'Bonjour';

/**exercise 12 - trop facile*/

/**exercise 13*/
// const div = document.querySelector('div');
// const button = document.querySelector('button');
// let nbre = 1;
// button.addEventListener('click', () => {
//     div.innerText = 'Vous avez clique '+ nbre++ + ' fois';
// })

/**exercise 14*/
// const div = document.querySelector('div');
// const button = document.querySelector('button');
// let text = '';
// button.addEventListener('click', () => {
//     for(let i = 1; i < 11; i++) {
//         text += ` 3 * ${i} = ${3 * i} \n`
//     }
//     div.innerText = text;
// })

/**exercise 15*/
// const div = document.querySelector('div');
// const button = document.querySelector('button');
// let switchValeur = true;
// button.addEventListener('click', () => {
//     switchValeur? div.innerText = 'Pile': div.innerText = 'Face';
//     switchValeur = !switchValeur; 
// })

/**exercise 16*/
// const userInput = +prompt('entrer un nombre entre 0 et 20');
// let text = '';
// if(userInput < 7) {
//     text = 'Petit';
// } else if(userInput < 15) {
//     text = 'Moyen';
// } else if(userInput > 15) {
//     text = 'Grand';
// }
// console.log(text);

/**exercise 17*/
// let userInput = +prompt('saisir le chiffre 3');
// while(userInput !== 3) {
//      userInput = +prompt('Vous n\'avez pas saisi le bon chiffre');
// }
// console.log('Bravo, vous avez saisi le bon chiffre '+ userInput);

/**exercise 18*/
// let userInput = +prompt('Entrer un nombre');
// let incremente = 0;
// function cumul(valeur) {
//     if(incremente === 11) {
//         return 0;
//     } else {
//         console.log(`Etape ${incremente}: ${cumul(valeur + 1)}`)
//     }
// }
// let incremente = userInput;
// for(let i = 1; i < 11; i++) {
    
//     console.log(`Etape ${i} : ${incremente}`)
//     incremente += ++userInput;
// }

/**exercise 19*/
// let userInput = +prompt('Entrer un nombre');
// let etape = 0;
// function factorielle(valeur) {
//     if(valeur === 1) {
//         console.log(`Etape ${++etape} : ${valeur}`);
//         return 1
//     } else {
//         console.log(`Etape ${++etape} : ${valeur}`);
//         return valeur * factorielle(valeur - 1);
//     }
// }
// console.log(`Le resultat Factorielle de ${userInput} est: ${factorielle(userInput)}`);

/**exercise 20 - trop facile*/