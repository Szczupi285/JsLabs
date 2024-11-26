import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';
import '../App.css';

function Lab2() {
  const { id } = useParams();
  const { items } = useContext(AppContext); // Get items from context

  const user = items.find(user => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="App">
        <h1>LAB2</h1>
        <br />
        <h2>NIE ZNALEZIONO OSOBY O TYM IDENTYFIKATORZE</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>LAB2</h1>
      <br />
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Height: {user.height} cm</p>
    </div>
  );
}

export default Lab2;
