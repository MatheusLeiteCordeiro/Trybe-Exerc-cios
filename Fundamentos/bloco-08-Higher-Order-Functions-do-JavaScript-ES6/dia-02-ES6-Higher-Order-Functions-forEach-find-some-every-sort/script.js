const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const functionn = () => {
  // let array = [];
  // people.forEach((element) => array.push(element.age));
  // array.sort((a, b) => b - a);
  people.sort((x, y) => y.age - x.age)
  console.log(people)
}

functionn();


// console.log(Object.values(people)[0].age)