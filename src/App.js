import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Homeview from './scenes/home/Index';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Homeview />
      <Footer />
    </div>
  );
}

export default App;
