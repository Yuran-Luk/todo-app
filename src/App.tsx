import './App.scss';
import ItemsList from './components/ItemsList';
import ListControls from './components/ListControls';
import TodoAdd from './components/TodoAdd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>mindbox todo app</h1> 
      </header>
      <TodoAdd/>
      <ItemsList />
      <ListControls />
    </div>
  );
}

export default App;
