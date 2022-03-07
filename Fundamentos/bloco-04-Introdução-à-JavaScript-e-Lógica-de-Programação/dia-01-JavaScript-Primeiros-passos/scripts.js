let age = 30.45;
let name = "Hulk"
let camelCase = "boa prática"
age = 45;
console.log(age);
console.log(name);
console.log(camelCase);

console.log("")

let trybe = 15;

if (trybe>= 14 && trybe < 14.40) {
    console.log("Esquenta");
}else if(trybe >= 16.330 && trybe< 17.5) {

    console.log("aula ao vivo")
}else if(trybe>= 19.40 && trybe < 20){
    console.log("fechamento");
}else {
    console.log("fora dos momentos síncronos")
}

console.log("")

console.log(!null);

let x ="vermelho";

switch (x) {
    case "vermelho":
        console.log("pare");
        break;
    
    case "amarelo":
        console.log("atenção");
        break;

        case "verde":
            console.log("siga");
            break;

        default: 
            console.log("bann")
}

