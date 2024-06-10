import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/apiServices';
import Map from '../Map/Map';
import UserList from '../UserList/UserList';

const Main = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
      };
  
      getUsers();
    }, []);
  
    return (
      <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0">
          <Map users={users} />
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-screen overflow-auto bg-white bg-opacity-75">
          <UserList users={users} />
        </div>
      </div>
    );
};
export default Main;