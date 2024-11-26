import React, { useContext, useState } from 'react';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';

const Lab4Add = () => {
  const { dispatch } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    height: '',
    rating: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add',
      payload: formData,
    });
    navigate('/lab4');

    // Czyszczenie formularza po wysłaniu
    setFormData({
      name: '',
      surname: '',
      height: '',
      rating: '',
    });    
  };

  return (
    <div>
      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <input
            className="input-style"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength="30"
            required
          />
        </div>

        <div className="form-group">
          <label>Surname:</label>
          <input
            className="input-style"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            maxLength="30"
            required
          />
        </div>

        <div className="form-group">
          <label>Height:</label>
          <input
            className="input-style"
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <input
            className="input-style"
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Lab4Add;