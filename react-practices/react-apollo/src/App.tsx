import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id,
        attributes {
          name
        }
      }
    }
  }
`;

const ADD_CATEGORY = gql`
  mutation addCategory {
    createCategory(data: { name: "Indonesia" }) {
      data {
        id,
        attributes {
          name
        }
      }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const renderContent = () => {
    if (loading) {
      return "Loading..."
    }

    if (error) {
      return "Oops!"
    }

    const handleSubmit = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const add = useQuery(ADD_CATEGORY);

      console.log(add);
    }

    return (
      <div style={{ display: "flex", gap: "10px", color: "white", marginTop: "20px", fontSize: "14px" }}>
        {data.categories.data.map((item: any) => (
          <span>{item.attributes.name}</span>
        ))}
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleSubmit}>Add category</button>
        {renderContent()}
      </header>
    </div>
  );
}

export default App;
