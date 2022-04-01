let button = document.getElementById('button');
let input = document.getElementById('input-text')
let areaDeTexto = document.getElementById('area-de-texto')

function adicionandoTexto(event) {
    event.preventDefault();
    areaDeTexto.value = input.value;
}

button.addEventListener('click', adicionandoTexto);

// SELETORES
const INPUT_TEXT = document.querySelector("#input-texto2");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function implementandoPrevent(event) {
    event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', implementandoPrevent)
HREF_LINK.addEventListener('click', implementandoPrevent)
INPUT_TEXT.addEventListener('keypress', implementandoPrevent)