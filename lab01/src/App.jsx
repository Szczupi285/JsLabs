import {data} from './lab1/module-data';
import PersonProfile from './lab1/PersonProfile';
import './App.css'

function App() {
  return (
    <div className="App">
      {data.map((person, index) => (
        <PersonProfile key={index} {...person} />
      ))}
    </div>
  );
}

export default App
