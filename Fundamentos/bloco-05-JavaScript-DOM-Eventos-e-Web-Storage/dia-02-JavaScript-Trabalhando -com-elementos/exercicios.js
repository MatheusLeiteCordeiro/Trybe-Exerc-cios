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

// 6.
let newSection2 = document.createElement('section2');
newSection2.className = 'rigth-content';
newMain.appendChild(newSection2);

// 7.
let newImg = document.createElement('img');
newImg.className = 'small-image';
newImg.src = 'https://picsum.photos/200'
newSection1.appendChild(newImg);

// 8.
let lista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let newlU = document.createElement('ul');
for (let i=0; i<lista.length; i++) {
   let newLi = document.createElement('li');
   newLi.innerText = lista[i];
   newlU.appendChild(newLi);
};
newSection2.appendChild(newlU);

// 9.
let newH3_1 = document.createElement('h3'); 
let newH3_2 = document.createElement('h3'); 
let newH3_3 = document.createElement('h3'); 
newMain.appendChild(newH3_1);
newMain.appendChild(newH3_2);
newMain.appendChild(newH3_3);

// 10.
newH1.className = 'title';

// 11.
newH3_1.className = 'description';
newH3_2.className = 'description';
newH3_3.className = 'description';

// 12.
newMain.removeChild(newSection1);

// 13.
newSection2.style.marginLeft = '50%';
newSection2.innerText = 'centro'

console.log(container);



