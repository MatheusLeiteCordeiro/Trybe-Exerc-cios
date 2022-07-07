const quadrado = document.getElementById('quadrado');
const buttonChange = document.getElementById('button');
const buttonRestart = document.getElementById('buttonRestart');
const ellipsis = document.createElement('p');

quadrado.appendChild(ellipsis);

const changeColor = () => {
    quadrado.style.backgroundColor = 'white';
};

const restartColor = () => {
    quadrado.style.backgroundColor = 'black';
    ellipsis.innerHTML = ''
}

const timedChange = () => {
    
    setTimeout(() => {
        changeColor();
    }, 1000);

    if (quadrado.style.backgroundColor = 'black') {
        ellipsis.innerHTML = '...'
    };

}

buttonChange.addEventListener('click', timedChange);
buttonRestart.addEventListener('click', restartColor);
