import logo from './logo.svg';
import './App.css';
import { Admin } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')
function App() {
  return (
    <Admin dataProvider={jsonServerProvider} />
  );
}

export default App;
