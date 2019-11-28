import React from 'react';
import cats from '../data/cats.json';
import './Vote.css';

const Vote = () => {

  let leftCat = cats[getRandomCat()];
  let rightCat = cats[getRandomCat()];

  function getRandomCat() {
    const randomCat = Math.floor(Math.random() * Math.floor(cats.length));
    return randomCat; 
  }

  function showRandomCat(cat) {
     return (
    <div>
      <img src={cat.url} alt="cute cat" key={cat.id}></img>
      <p className="score">{cat.score} <i className="fas fa-heart"></i></p>
    </div>
    )
  }

  function handleClick() {
  }

  return (
    <div className="votecontainer">
      <div className="votecat leftcat">
        {showRandomCat(leftCat)}
      </div>
      <div className="votecat rightcat">
        {showRandomCat(rightCat)}
      </div>
    </div>
  )
}

export default Vote