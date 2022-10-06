import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { Pruebas } from './components/Pruebas/Pruebas';
import { RetrieveBannedWords } from './services/BannedWords/RetrieveBannedWords';

function App() {
  return (
    <div className="App">
      <Pruebas></Pruebas>
    </div>
  );
}

export default App;
