// const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const reformNationality = ({firstName, nationality='Italian'}) => `${firstName} is ${nationality}`;


// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

console.log(reformNationality(person));