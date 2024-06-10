import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewUserForm = () => {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
};

const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/');
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div>
            <h2 className="text-xl font-semibold my-2">Informações do Usuário</h2>
            <div className="mt-2 text-gray-600 space-y-2">
            <label>
                Nome:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="name" value={user.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="email" value={user.email} onChange={handleChange} />
            </label>
            <label>
                Telefone:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="phone" value={user.phone} onChange={handleChange} />
            </label>
            </div>
        </div>
        <div>
            <h2 className="text-xl font-semibold my-2">Informações de Endereço</h2>
            <div className="mt-2 text-gray-600 space-y-2">
            <label>
                Rua:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="street" value={user.address.street} onChange={handleChange} />
            </label>
            <label>
                Complemento:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="suite" value={user.address.suite} onChange={handleChange} />
            </label>
            <label>
                Cidade:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="city" value={user.address.city} onChange={handleChange} />
            </label>
            <label>
                Código Postal:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="zipcode" value={user.address.zipcode} onChange={handleChange} />
            </label>
            </div>
        </div>
        <div>
            <h2 className="text-xl font-semibold my-2">Informações da Companhia</h2>
            <div className="mt-2 text-gray-600 space-y-2">
            <label>
                Nome da companhia:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="name" value={user.company.name} onChange={handleChange} />
            </label>
            <label>
                Bordão:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="catchphrase" value={user.company.catchPhrase} onChange={handleChange} />
            </label>
            <label>
                BS:
                <input className="block w-full mt-1 rounded-md shadow mb-2 py-1" type="text" name="bs" value={user.company.bs} onChange={handleChange} />
            </label>
            </div>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 rounded-md bg-indigo-600 text-white mr-2" onClick={handleSubmit}>Cadastrar Novo Usuário</button>
        <button className="mt-4 px-4 py-2 rounded-md bg-red-600 text-white" onClick={handleCancel}>Cancelar</button>
        </form>
    </div>
  );
};

export default NewUserForm;