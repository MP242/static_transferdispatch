import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homeview from './scenes/home/Index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Homeview />

    </div>
  );
}

export default App;
