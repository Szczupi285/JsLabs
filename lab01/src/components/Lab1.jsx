import React, { useContext } from 'react';
import AppContext from '../data/AppContext';

const Lab1 = () => {
    const { items } = useContext(AppContext);

    return (
        <div>
            <h1>Lab1 Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Lab1;