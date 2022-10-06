import './App.css';
import CreateNewPost from './components/CreateNewThread/CreateNewPost';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <CreateNewPost idThreat={1} />
    </div>
  );
}

export default App;
