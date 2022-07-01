 // let moment = require("moment");

// let meuNascimento = moment('21122003', 'DDMMYYYY');
// let fromNaw = meuNascimento.fromNow();

// console.log('Nasci há: ' + fromNaw);

// cheet('a b', function () {
//     alert('EASTER EEEEEEGGG!!!!')
// });

let button = document.getElementById('nao-clicar');

let myModal =  new bootstrap.Modal(document.getElementById('myModal'));

button.addEventListener('click', function (event) {
    event.preventDefault();
    myModal.show();
});