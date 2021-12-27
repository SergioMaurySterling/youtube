import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Card from './components/Card';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <Card />
    </div>
  );
}

export default App;
