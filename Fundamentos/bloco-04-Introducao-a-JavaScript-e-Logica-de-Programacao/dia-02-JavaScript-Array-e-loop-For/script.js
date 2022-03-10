
//let array = [1 , 2, "caça", 4.9]
// array[4] = "aaa"
// array.push("push")

// console.log("itens: ", "| " + array, "|", array.length)
// console.log("itens ordenados; ", "|", array.sort(), "|")
// console.log(array[5])

// let x = [];

// for (let i=0; i<array.length; i++) {
//     x.push(array[i]);
// }

// console.log(x);

// let tasks = ['comer', 'beber', 'dançar', 'caca']
// tasks.unshift('jogar')
// tasks.pop()
// tasks.shift()
// console.log(tasks)
// let index = tasks.indexOf('beber')
// console.log(index)

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// let x = 0;
// for (let result of names) {
//     x++;
//     console.log(x + '.' + result)
// }

// EXERCICIOS

// let numbers = [5, 9, 3, 19, 70, 45, 100, 2, 4, 35, 27, 21];

// 1.

// for (let result of numbers) {
//     console.log(result);
// }

// 2.

// let x = 0
// for (let i=0; i<numbers.length; i++) {
//     x = x + numbers[i];
// }
// console.log(x)

// 3.

// let x = 0
// for (let i=0; i<numbers.length; i++) {
//     x = x + numbers[i];
// }
// let y = (x/numbers.length);
// console.log(y);

// 4.

// let x = 0
// for(let i=0; i<numbers.length; i++) {
//     x = x + numbers[i];
// }
// let y = (x/numbers.length);

// if(y > 20) {
//     console.log('maior q 20')
// }else {
//     console.log('menor ou igual q 20')
// }

// 5.

// let maior = 0;
// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i] > maior ) {
//         maior = numbers[i];
//     }
// }

// console.log(maior);

// 6.

// let nImpares = 0;
// for(let i=0; i<numbers.length; i++) {

//    if(numbers[i] % 2 != 0) { 
//         nImpares++
//     }
// }

// if(nImpares === 0) {
//     console.log('nenhum valor ímpar encontrado');
// }else {
//     console.log(nImpares)
// }

// 7.

// let menor = numbers[0];

// for(let f=0; f<numbers.length; f++) {
//     if(numbers[f] < menor){
//        menor = numbers[f];     
//     }
//  }

//  console.log(menor)

// 8.

// l = [];
// let x = 0
// for(let i=0; i<25; i++) {
//     x++;
//     l.push(x);
// }

// console.log(l);

// 9.


// l = [];
// let x = 0
// for(let i=0; i<25; i++) {
//     x++;
//     y = x/2
//     l.push(y);
// }

// console.log(l);

// Bônus

// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }

//   console.log(array)

 