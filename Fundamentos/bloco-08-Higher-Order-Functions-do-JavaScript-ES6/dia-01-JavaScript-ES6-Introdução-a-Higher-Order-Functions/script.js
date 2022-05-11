const functionn = (nome_completo) => {
    const obj = {nome: nome_completo, email:`${nome_completo.replace(' ', '-').toLowerCase()}@trybe.com`};
    
  return obj;
}

const newEmployees = (callbeck) => {
    const employees = {
      id1: callbeck('Pedroza Piton'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callbeck('Pedroza Piton'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callbeck('Pedroza Piton'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(functionn))
