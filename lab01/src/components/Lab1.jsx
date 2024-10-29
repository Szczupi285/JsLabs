import {data} from '../lab1/module-data';
import PersonProfile from './PersonProfile';
import '../App.css'

function Lab1() {
  return (
    <div className="App">
      {data.map((person, index) => (
        <PersonProfile key={index} {...person} />
      ))}
    </div>
  );
}

export default Lab1;