import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const name = "digital innovation";

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const showEvent = (e) => {
    console.log("Evento clicado");
    console.log(e);
    alert(name);
  };

  const Button = <button onClick={showEvent}>Mostrar Eventos</button>;

  return (
    <div>
      <p>Digital Innovation</p>
      <p>Alysson Rychard</p>
      <input onChange={handleChange} />
      {Button}
    </div>
  );
};

export default App;

// function sum(a, b) {
//   return a + b;
// }

// function primeiroJSX() {
//   return (
//     <div className="teste">
//       Alysson Correia
//       <h1>Soma: {sum(10, 60)}</h1>
//     </div>
//   );
// }

// const App = () => {
//   return <div className="App">{primeiroJSX()}</div>;
// };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
