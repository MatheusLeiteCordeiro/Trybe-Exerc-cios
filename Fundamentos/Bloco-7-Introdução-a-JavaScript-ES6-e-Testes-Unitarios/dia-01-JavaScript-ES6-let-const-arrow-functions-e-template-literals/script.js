const person = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const clone = Object.assign(person, lastName)

  clone.name = 'holyshit'

  console.log(clone);
  console.log(person);

  