import "./App.css";
import logo from "./logo.svg";
import useRootStore from "./store/rootStore";

function App() {
  const count = useRootStore((state) => state.count);
  const increment = useRootStore((state) => state.increment);

  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to React!</h3>
        <p>Current count: {count}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a className="App-link" href="#" onClick={increment}>
          Add count!
        </a>
      </article>
    </div>
  );
}

export default App;
