import logo from "./logo.svg";
import "./App.css";
import TernaryOperator from "./Components/ternary-operator.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ES6 Ternary Operator</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-ternary-operator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        <TernaryOperator />
      </header>
    </div>
  );
}

export default App;
