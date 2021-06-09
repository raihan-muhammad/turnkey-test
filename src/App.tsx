import { useEffect, useState } from 'react';
import './App.css';
import { getData } from './helpers/api';

// Membuat Interface untuk memastikan data users sesuai dengan yang di inginkan
interface Users {
  name: {
    first: string;
    last: string;
  };

  phone: string;
  email: string;
  location: {
    country: string;
  };
  picture: {
    thumbnail: string;
  };
}

function App() {
  const [usersData, setUsersData] = useState<Users[]>([]);

  const getUsers = async () => {
    const data = await getData(`/?results=20`);
    setUsersData(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Turnkey Test - Raihan Muhammad</h1>
      {usersData?.map((user, i) => (
        <div key={`user-${i}`}>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.location.country}</p>
          <img src={user.picture.thumbnail} alt={user.name.first} />
        </div>
      ))}
    </div>
  );
}

export default App;
