//Agregando elementos al DOM sin React

// const element = document.createElement('h1')
// element.innerText = 'Hello Platzi';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello Guiselle!!</h1>;

const container = document.getElementById('app');

//Recibe dos parámetros =  ReactDOM.render(__Que?, __Donde?)
ReactDOM.render(element, container);