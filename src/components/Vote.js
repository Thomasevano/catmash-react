import React, { useState } from 'react';
import cats from '../data/cats.json';
import './Vote.css';

const Vote = () => {

  const [randomLeftCat, setRandomLeftCat] = useState(showRandomCat(cats[getRandomCat()]))
  const [randomRightCat, setRandomRightCat] = useState(showRandomCat(cats[getRandomCat()]))

  const handleClick = () =>
    setRandomLeftCat(cats[getRandomCat()]) + setRandomRightCat(cats[getRandomCat()])

  function getRandomCat() {
    const randomCat = Math.floor(Math.random() * Math.floor(cats.length));
    return randomCat; 
  }

  function showRandomCat(cat, handleClick) {
     return (
      <div key={cat.id} onClick={handleClick}>
        <img src={cat.url} alt="cute cat"></img>
        <p className="score">{cat.score} <i className="fas fa-heart"></i></p>
      </div>
    )
  }

  return (
    <div className="votecontainer">
      <div className="votecat leftcat">
        {showRandomCat(randomLeftCat, handleClick)}
      </div>
      <div className="votecat rightcat">
        {showRandomCat(randomRightCat, handleClick)}
      </div>
    </div>
  )
}

export default Vote