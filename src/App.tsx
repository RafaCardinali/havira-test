import React, { useEffect }from 'react';
import { fetchUsers } from './services/apiServices';
import './App.css';

function App() {
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      console.log(data);
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
