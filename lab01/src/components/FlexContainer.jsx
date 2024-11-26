import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';
import { Row, Col } from 'react-bootstrap';

function FlexContainer() {
    const { items, dispatch } = useContext(AppContext);

    const handleRate = (id) => {
        dispatch({ type: 'rate', payload: { id } });
    };

    const handleUpdate = (id) => {
        const newName = prompt("Enter new name:");
        const newSurname = prompt("Enter new surname:");
        const newHeight = prompt("Enter new height:");
        dispatch({
            type: 'update',
            payload: {
                id,
                data: {
                    name: newName || 'Unnamed',
                    surname: newSurname || 'Unknown',
                    height: newHeight || 'N/A',
                },
            },
        });
    };

    return (
        <div className="flex-container">
            <Row className="d-flex flex-wrap">
                {items.map((item) => (
                    <Col key={item.id} md={5} className="mb-3">
                        <div className="flex-item">
                            <h3>{item.name} {item.surname}</h3>
                            <p>Height: {item.height} cm</p>
                            <RatingBar rate={item.rating || 0} />
                            <button className='btn btn-primary' onClick={() => handleRate(item.id)}>Rate</button>
                            <button className='btn btn-primary' onClick={() => dispatch({ type: 'delete', payload: { id: item.id } })}>
                                Delete
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default FlexContainer;
