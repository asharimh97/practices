import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import Sembarang from "./Sembarang";
import request from "./services/request";
import { OMDB_URL } from "./utils/constants";

const fetchPlanet = async () => {
  return await request.get(OMDB_URL, { params: { s: "superman" } });
  // return await request.get(`${API_URL}/films`);
  // const planets = await fetch(`${API_URL}/planets/`);
  // return planets.json();
};

function App() {
  const { isLoading, isError, isSuccess, data } = useQuery(
    "getPlanets",
    fetchPlanet
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching</div>;
  }

  if (isSuccess) {
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sembarang />
    </div>
  );
}

export default App;
