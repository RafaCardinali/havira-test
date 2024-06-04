export const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('API não acessível!');
    }
    const data = await response.json();
    return data;
};