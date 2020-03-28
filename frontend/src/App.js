import React, { useState } from 'react'; //it's essential if you're using JSX in the file.

//importing the header component example to use in this file.
import Header from './Header';


//App component:
function App() {
  
  //const counter = useState(0); , or we can use destructuring..

  const [counter, setCounter] = useState(0);
  //we'll put the first array element in the counter var and the reference to the function that updates it in setCounter var.

  //useState returns an array: Array [value, valueUpdatingFunction]

  function increment(){
    //counter++;
    setCounter(counter + 1); //we can use the returned function to change the value of counter.

  }

  return (
    //<h1>Hello world!</h1>
    //we can use Components by writing them as tags.



    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>increment</button>
    </div>
    

  );
}

export default App;
