import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/apiServices';
import Map from '../Map/Map';
import UserList from '../UserList/UserList';
import { User } from '../../models/types';
import { Link } from 'react-router-dom';

const Main = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    getUsers();
  }, []);

  const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFilter(event.target.value);
  };

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="relative overflow-hidden h-screen">
      <div className='absolute top-0 right-0 flex flex-row items-center space-x-20 p-4 z-10'>
        <div>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Filtrar usuários..."
            className="form-input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div className='text-right'>
          <Link to="/create-user" className="inline-block px-4 py-2 border border-blue-500 bg-blue-500 text-white text-center rounded hover:bg-blue-700">Novo Usuário</Link>
        </div>
      </div>
      <div className="absolute inset-0">
        <Map users={filteredUsers} />
      </div>
      <div className="absolute top-16 right-0 w-1/4 h-screen overflow-auto bg-white bg-opacity-75">
        <UserList users={filteredUsers} />
      </div>
    </div>
);
};
export default Main;