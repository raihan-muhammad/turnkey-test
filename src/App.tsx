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
    const req: Response = await getData(`/?results=20`);
    const res: any = await req.json();
    setUsersData(res.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Turnkey Test - Raihan Muhammad</h1>
      {usersData?.map((user, i) => (
        <div key={`user-${i}`}>{user.name.first}</div>
      ))}
    </div>
  );
}

export default App;
