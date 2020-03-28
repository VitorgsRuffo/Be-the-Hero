import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//React Component: is a function that returns HTML. It'll be created because there's a piece of code that repeats a lot in the code and we wanna reuse it.
//(it sho//uld start with a capital letter)

//JSX (JavaScript XML): HTML inside JS.

//Property: it's like the HTML attributes but is for React Components. we can assing them to the react component and access them using the props obj passed to the Component function.
  //<Header title="Ola" />  

  //<Header title="Hello">
  //  World!
  //</Header>


//State: special type of variable.
