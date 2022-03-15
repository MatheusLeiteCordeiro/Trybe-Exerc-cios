let container = document.getElementById('first');

let newDiv = document.createElement('div');

newDiv.className = 'green circle small';

container.appendChild(newDiv);


let newDiv1 = document.createElement('div');
let newDiv2 = document.createElement('div');

newDiv1.className = 'Yellow circle small';
newDiv2.className = 'Red circle small';

container.appendChild(newDiv1);
container.appendChild(newDiv2);

console.log(container);

// forma otimizada

function creatDivElement(classes) {
    let newDiv = document.createElement('div');
    newDiv.className = classes;
    return newDiv;
}

container.appendChild(creatDivElement('Black circle small'));

// otimizando ainda mais 

function addElement(parent, child) {
    parent.appendChild(child);
}

addElement(container, creatDivElement('pink circle small'));

// mais ainda 

let features = ['green circle small', 'Yellow circle small', 'Red circle small', 'Black circle small', 'pink circle small', 'blue circle small']

for (let feature of features) {
    let element = creatDivElement(feature);
    addElement(container, element);
}