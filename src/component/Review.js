import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Review(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <button className="btn-primary">{props.rating}</button>
            </Card.Body>
        </Card>
    )
}
