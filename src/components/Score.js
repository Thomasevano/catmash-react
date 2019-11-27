import React from 'react';
import Card from 'react-bootstrap/Card';
import cats from '../data/cats.json'

const Score = () => {
    return (
      <div>
        {cats.map(cat => 
        <Card key={cat.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cat.url}/>
          <Card.Body>
            <Card.Text>Score: {cat.score}</Card.Text>
          </Card.Body>
        </Card>
        )}
      </div>
      
    )
}

export default Score