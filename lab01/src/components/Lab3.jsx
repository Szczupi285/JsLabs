// components/Lab3.js

import '../App.css';
import { data } from '../lab1/module-data';
import FlexContainer from './FlexContainer';
import { Row, Col } from 'react-bootstrap';

function Lab3() {
  return (
    <div className="App">
      <h1>Lab 3</h1>
          <FlexContainer data={data} />
    </div>
  );
}

export default Lab3;