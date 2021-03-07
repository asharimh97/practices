import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import { API_URL } from './constants';

const fetchPlanet = async () => {
  const planets = await fetch(`${API_URL}/planets/`);
  return planets.json();
}

function App() {
  const { isLoading, isError, isSuccess, data } = useQuery('getPlanets', fetchPlanet);

  if (isLoading) {
    return (<div>Loading...</div>);
  }

  if (isError) {
    return (<div>Error fetching</div>)
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
    </div>
  );
}

export default App;
