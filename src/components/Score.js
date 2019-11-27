import React from 'react';
import Card from 'react-bootstrap/Card';

const Score = ({cat}) => {
    return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={cat.url}/>
    <Card.Body>
      <Card.Text>Score: {cat.score}</Card.Text>
    </Card.Body>
  </Card>
    )
}

export default Score