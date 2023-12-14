import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Cards from './componets/Cards';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
