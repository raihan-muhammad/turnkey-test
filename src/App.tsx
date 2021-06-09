import { useState } from 'react';
import './App.css';

// Membuat Interface untuk memastikan data users sesuai dengan yang di inginkan
interface Users {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  country: string;
  picture: string;
}

function App() {
  const [users, setUsers] = useState<Users[]>();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Turnkey Test - Raihan Muhammad</h1>
      </header>
    </div>
  );
}

export default App;
