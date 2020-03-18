//Agregando elementos al DOM sin React

// const element = document.createElement('h1')
// element.innerText = 'Hello Platzi';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello Guiselle!!</h1>;
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')

const name = 'Guiss';
// const element = React.createElement('h1', {}, `Hola soy ${name}`);
const jsx = <h1>Hola soy {name}</h1>

const container = document.getElementById('app');

ReactDOM.render(jsx, container);