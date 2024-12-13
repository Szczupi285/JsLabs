import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data.js';

function Lab2() {
  const { id } = useParams();
  const profile = data.find(profile => profile.id === parseInt(id, 10));

  if (!id) return <p>No identifier provided.</p>;
  if (!data) return <p>No profile found for this identifier.</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Role: {data.role}</p>
    </div>
  );
}
export default Lab2;