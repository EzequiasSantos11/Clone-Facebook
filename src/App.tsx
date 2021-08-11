import Header from './Components/Header';
import Home from './Pages/Home';
import NavBarLeft from './Components/NavBarLeft';
import NavBarRight from './Components/NavBarRight';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header/>
      <Home/>
      <NavBarLeft/>
      <NavBarRight/>
    </div>
  );
}

export default App;
