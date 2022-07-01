let h = document.querySelector('#header-container');

h.style.backgroundColor = 'green';

let u_i = document.querySelectorAll(".emergency-tasks h3");

for (let i=0; i<u_i.length; i++) {

    u_i[i].style.backgroundColor = 'blue';
}

let n_u_i = document.querySelectorAll(".no-emergency-tasks h3");

for (let i=0; i<n_u_i.length; i++) {

    n_u_i[i].style.backgroundColor = 'black';
}

let f = document.getElementsByTagName('footer')[0];
f.style.backgroundColor = 'black';

let s1 = document.querySelectorAll('section')[0];
s1.style.backgroundColor = 'red'

let s2 = document.querySelectorAll('section')[1];
s2.style.backgroundColor = 'yellow'

