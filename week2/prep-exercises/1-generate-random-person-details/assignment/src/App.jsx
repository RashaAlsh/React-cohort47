import './App.css';
import PersonController from './components/PersonController.js';
import Person from './components/Person.js';
import NewPersonButton from './components/NewPersonButton.js';

function App() {
  const { personData, getNewPerson } = PersonController();

  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Random Person Info</h1>
        <Person personData={personData} />
        <NewPersonButton onClick={getNewPerson} />
      </header>
    </div>
  );
}

export default App;
