document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';

document.querySelector('#primeiroFilhoDoFilho').innerHTML = 'Filho do filho';

document.querySelector('#pai').lastElementChild.previousElementSibling.style.backgroundColor = 'black'

'black'
document.querySelector('#pai').lastElementChild.previousElementSibling.style.width = '500px'

'100px'
document.querySelector('#pai').lastElementChild.previousElementSibling.style.height = '200px'

'100px'

let lista = [
    1, 20, 3, 4, 5, 'gagaga'
];

for (let i in lista) {
    let itens = lista[i];
    let a = document.createElement('li');
    a.innerHTML = itens;
    a.className = 'itens-list'
    document.querySelector('#terceiroFilho').appendChild(a).style.color = 'white';
}

let y = document.querySelectorAll('.itens-list');
let t = document.querySelector('#terceiroFilho');

for (let i=0; i<y.length; i++) {
    let element = y[i];
    if (element.innerHTML.includes('gagaga')) {
        t.removeChild(element);
    }
};

