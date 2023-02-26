import logo from './logo.svg';
import './App.css';
import SelfServicePage from './components/SelfServicePage/SelfServicePage.component';
import NavBar from './components/NavBar/NavBar.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SelfServicePage />
      Stock take app
    
    </div>
  );
}

export default App;
