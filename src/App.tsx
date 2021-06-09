import { Provider } from 'react-redux';
import { store } from './redux/store';
import ListUsers from './components/ListUsers';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-center my-4">Turnkey Test - Raihan Muhammad</h1>
        <ListUsers />
      </div>
    </Provider>
  );
}

export default App;
