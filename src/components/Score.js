import React from 'react';
import Card from 'react-bootstrap/Card';
import cats from '../data/cats.json'

const Score = () => {
  return (
    <div className="container">
      <div className="row">
          {cats.map(cat => 
            <div className="col-md-3 mt-2">
              <Card key={cat.id}>
                <Card.Img variant="top" src={cat.url}/>
                <Card.Body>
                  <Card.Text>
                    <p>{cat.id}</p>
                    <br/>
                    <p className="score">{cat.score} <i className="fas fa-heart"></i></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          )}
      </div>
    </div>
  )
}

export default Score