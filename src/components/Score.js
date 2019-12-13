import React from 'react';
import Card from 'react-bootstrap/Card';
import Store from './Store';

function Score() {
  // Appel des chats depuis le local Storage
  const cats = Store.getCats()
  return (
    <div className="container">
      <div className="row">
          {cats.map(cat => 
            <div className="col-md-3 mt-2" key={cat.id}>
              <Card>
                <Card.Img variant="top" src={cat.url}/>
                <Card.Body>
                  <Card.Text>
                    <span>{cat.id}</span>
                    <br/>
                    <span className="score">{cat.score} <i className="fas fa-heart"></i></span>
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