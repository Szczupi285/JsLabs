import React from 'react';



const PersonProfile = ({ id, name, surname, height }) => {
  return (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <p className="card-text">ID: {id}</p>
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Surname: {surname}</p>
        <p className="card-text">Height: {height}</p>
      </div>
    </div>
  );
};

export default PersonProfile;