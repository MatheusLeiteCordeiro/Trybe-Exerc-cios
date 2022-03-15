// 1.
let container = document.getElementById('body');
let newH1 = document.createElement('h1');
container.appendChild(newH1);
newH1.className = 'h1';
let h1 = document.getElementById('h1');
newH1.innerText = ' Exercício 5.2 - JavaScript DOM';

// 2.
let newMain = document.createElement('main');
newMain.className = 'main-content';
container.appendChild(newMain);

// 3.
let newSection = document.createElement('section');
newSection.className = 'center-content';
newMain.appendChild(newSection);

// 4.
let newP = document.createElement('p');
newSection.appendChild(newP).innerText = 'algum texto'

// 5.
let newSection1 = document.createElement('section1');
newSection1.className = 'left-content';
newMain.appendChild(newSection1);

console.log(container);

