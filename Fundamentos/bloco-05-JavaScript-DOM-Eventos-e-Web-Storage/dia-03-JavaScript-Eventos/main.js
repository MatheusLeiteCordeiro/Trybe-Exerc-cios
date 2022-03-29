const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const myWebpage = document.getElementById('my-spotrybefy');
const quadrado = document.getElementById('quadrado')

function mudaCorQuadrados() {
    quadrado.style.backgroundColor = input2.value;
}

input2.addEventListener('keyup', mudaCorQuadrados);

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
let ulElement = document.querySelector('ul')
let liElement = ulElement.children


function adicionaClasseTech() {
  for (let i=0; i<liElement.length; i++) {
    liElement[i].className = 'tech'
  }
}

secondLi.addEventListener('click', adicionaClasseTech);
thirdLi.addEventListener('click', adicionaClasseTech);



// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alterandoTexto() {
  firstLi.innerText = input.value;
}

input.addEventListener('keyup', alterandoTexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

function redirect() {
  window.location.href = 'https://codepen.io/johnatas-henrique/pen/jOEQQvZ';
}

myWebpage.addEventListener('dblclick', redirect);

// 4.1. Que tal redirecionar para seu portfólio?

// nao quero 

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function mudaCor() {
  myWebpage.style.color = 'red';
}

function mudaCor2() {
  myWebpage.style.color = 'white';
}

myWebpage.addEventListener('mouseover', mudaCor);
myWebpage.addEventListener('mouseout', mudaCor2);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.