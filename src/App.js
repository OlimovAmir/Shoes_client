
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import MenuSection from './components/header/menuSection/MenuSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div>
        <MenuSection/>
      </div>
    </div>
  );
}

export default App;
