//Agregando elementos al DOM sin React

// const element = document.createElement('h1')
// element.innerText = 'Hello Platzi';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello Guiselle!!</h1>;
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')

// const element = React.createElement('h1', {}, `Hola soy ${name}`);

//Diferencias entre jsx y React.createElement
const name = 'Guiselle';
const jsx = (
  <div>
    <h1>Hola soy {name}</h1>
    <p>Soy Desarrolladora Web</p>
  </div>
);


const element = React.createElement(
  'div',
  {},
  '',
  React.createElement('h1', {}, 'Hola soy Guiselle'),
  React.createElement('p', {}, 'Soy Desarrolladora Web')
);
const container = document.getElementById('app');

ReactDOM.render(jsx, container);