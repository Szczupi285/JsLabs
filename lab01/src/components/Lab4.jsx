import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddForm from './AddForm';
import EditForm from './EditForm';

function Lab4() {
  return (
    <div className="App">
      <h1>Lab 4</h1>
      <nav>
        <ul>
          <li>
            <Link className="btn btn-primary" to="/lab4/add">add</Link>
          </li>
          <li>
            <Link className="btn btn-primary"  to="/lab4/edit/1">edit(Example ID: 1)</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="add" element={<AddForm />} />
        <Route path="edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default Lab4;
