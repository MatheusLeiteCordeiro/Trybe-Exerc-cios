const chef = 'chefao'

const objeto = {
    nome: 'Matheus',
    idade: 18
}

const arrowFunction =  nome => nome === `${chef}` ? `Bem vindo, chef` : `Bem vindo ${objeto.nome}`;

console.log(arrowFunction('matheus'));;

