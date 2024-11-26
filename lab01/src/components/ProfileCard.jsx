import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import AppContext from '../data/AppContext';

const ProfileCard = ({ id, name, surname, height, rating }) => {
    const { dispatch } = useContext(AppContext);

    const handleUpdate = () => {
        dispatch({ type: 'UPDATE_RATING', payload: { id, rating: rating + 1 } });
    };

    return (
        <Card style={{ width: '18rem' }} className="m-1">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>ID: {id}</Card.Text>
                <Card.Text>Surname: {surname}</Card.Text>
                <Card.Text>Height: {height}</Card.Text>
                <Card.Text>Rating: {rating}</Card.Text>
                <Button variant="primary" onClick={handleUpdate}>
                    Update Rating
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;