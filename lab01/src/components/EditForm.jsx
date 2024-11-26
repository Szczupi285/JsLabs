import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';

function EditForm() {
  const { id } = useParams();
  const { items, dispatch } = useContext(AppContext);

  const user = items.find((item) => item.id === parseInt(id));
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('surname', user.surname);
      setValue('height', user.height);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    dispatch({
      type: 'update',
      payload: {
        id: parseInt(id),
        data: {
          name: data.name,
          surname: data.surname,
          height: data.height,
        },
      },
    });
    alert('User updated successfully!');
  };

  if (!user) {
    return <h2>No user found with the given ID.</h2>;
  }

  return (
    <div>
      <h1>Edit Object</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register('id')} value={id} />
        <label>
          Name:
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Minimum 2 characters' },
              maxLength: { value: 30, message: 'Maximum 30 characters' },
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </label>
        <br />
        <label>
          Surname:
          <input
            {...register('surname', {
              required: 'Surname is required',
              minLength: { value: 2, message: 'Minimum 2 characters' },
              maxLength: { value: 30, message: 'Maximum 30 characters' },
            })}
          />
          {errors.surname && <p className="error">{errors.surname.message}</p>}
        </label>
        <br />
        <label>
          Height (cm):
          <input
            type="number"
            {...register('height', {
              required: 'Height is required',
              min: { value: 50, message: 'Minimum 50 cm' },
              max: { value: 250, message: 'Maximum 250 cm' },
            })}
          />
          {errors.height && <p className="error">{errors.height.message}</p>}
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditForm;
