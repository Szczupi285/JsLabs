import {data} from '../data/module-data.js';
import PersonProfile from '../components/PersonProfile';
import '../App.css'

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
