import React from 'react';
import { User } from '../../models/types';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="p-4">
      {users.map((user, index) => (
        <div key={index} className="flex mb-4 bg-gray-100 rounded-lg p-2">
          <div className="w-1/3 pr-4 overflow-auto break-words border-r border-gray-300">
            <h2 className="font-bold mb-2 text-lg uppercase">User</h2>
            <p className='my-1'><span className="font-semibold">Name:</span> {user.name}</p>
            <p className='my-1'><span className="font-semibold">Email:</span> {user.email}</p>
            <p className='my-1'><span className="font-semibold">Username:</span> {user.username}</p>
            <p className='my-1'><span className="font-semibold">Phone:</span> {user.phone}</p>
          </div>
          <div className="w-1/3 px-4 overflow-auto break-words border-r border-gray-300">
            <h2 className="font-bold mb-2 text-lg uppercase">Address</h2>
            <p className='my-1'><span className="font-semibold">Street:</span> {user.address.street}</p>
            <p className='my-1'><span className="font-semibold">Suite:</span> {user.address.suite}</p>
            <p className='my-1'><span className="font-semibold">City:</span> {user.address.city}</p>
            <p className='my-1'><span className="font-semibold">Zipcode:</span> {user.address.zipcode}</p>
          </div>
          <div className="w-1/3 pl-4 overflow-auto break-words">
            <h2 className="font-bold mb-2 text-lg uppercase">Company</h2>
            <p className='my-1'><span className="font-semibold">Name:</span> {user.company.name}</p>
            <p className='my-1'><span className="font-semibold">Catch Phrase:</span> {user.company.catchPhrase}</p>
            <p className='my-1'><span className="font-semibold">BS:</span> {user.company.bs}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;