// let site = {
//     'backgroud-color': 'gray',
//     width: 300,
//     hight: 100,
//     borders: {
//         bordertop: 20,
//         borderbottom: 20,
//         borderleft: 10,
//         borderrigth: 10
//     }
// };

// console.log('cor = ' + site['backgroud-color'] + ';' + ' largura = ' + site['width'] + ';' + ' altura = ' + site.hight)

// site['margin'] = 50;

// console.log(site.borders.bordertop)
// console.log(site['borders']['borderbottom'])

// let array = [
//     {
//         propriedade: 'valor',
//         subobjeto: {
//             subpropriedade: 'subvalor',
//             1: 'número'
//         }
//     },
//  1, 2, 3, 4, 5
// ];

// // console.log(array)
// console.log(array[0]['subobjeto'].subpropriedade)

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(car[index]);
//   }

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let key in names) {
//       console.log('Olá ' + names[key]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let key in car) {
//       console.log(key + ': ' + car[key])
//   }

// function test(num1, num2) {
//     return num1 * num2;
// }

// console.log(test(1, 4));

// function lessThan(num1, num2) {
//     if(num1 < num2) {
//         return num1;
//     }else {
//         return num2;
//     }
// }

// console.log(lessThan(7, 2))

// for/in e for/of 

// 1, 2, 3, 4, 5

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// console.log('Bem vinda, ' + info.personagem);

// info['recorrente'] = 'sim';

// console.log(info);

// let info2 = {
//     personagem: 'Tio Patinhas' ,
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
//   };


//   for(key in info) {
//       for(key2 in info2) {
//       }
//       console.log(info[key], 'e', info2[key]);
// };

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro de ' + leitor.nome, leitor.sobrenome, 'se chama',  leitor.livrosFavoritos[0].titulo);

//   leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   };

//   console.log(leitor.nome, 'tem 2 livros favoritos:', leitor.livrosFavoritos[0].titulo, 'e', leitor.livrosFavoritos[1].titulo);


// Funções

// 1.

// function eOuNaoE(word) {
//     let wordContrarie = '';
//     for(i=word.length -1; i>=0; i--) {
//         wordContrarie += word[i];
//     }
//     if(word === wordContrarie) {
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(eOuNaoE('desaniimado'))

// 2.

// function indiceMenor(array) {
//     let menor = array[0];
//     let indice = 0;
//     for( i in array) {
//         if(array[i] > menor) {
//             menor = array[i]
//             indice = i;
//         }        
//     }
//     return indice;
// }

// console.log(indiceMenor([10, -10, 50, -100, -400, -2, 3]));

// 3.

// function indiceMenor(array) {
//     let menor = array[0];
//     let indice = 0;
//     for( i in array) {
//         if(array[i] <= menor) {
//             menor = array[i]
//             indice = i;
//         }        
//     }
//     return indice;
// }

// console.log(indiceMenor([-10, -100, -400, -2, 3]));

// 4.


