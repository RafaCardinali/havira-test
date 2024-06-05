import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/apiServices';
import Map from './components/Map/Map';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div>
      <Map users={users} />
    </div>
  );
};

export default App;
