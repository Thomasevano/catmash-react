import React, { useState, useEffect } from 'react';
import './Vote.css';
import Store from './Store';

function Vote() {
  const [allCats, setAllCats] = useState(Store.getCats())
  const [leftCat, setLeftCat] = useState([])
  const [rightCat, setRightCat] = useState([])

  function randomCats(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomCat = array[randomNumber]
    return randomCat
    
  }

  useEffect(() => {
    setLeftCat(randomCats(allCats))
    setRightCat(randomCats(allCats))
  }, [allCats])

  function handleOnclickCat1() {
    leftCat.score = leftCat.score + 1
    Store.voteCats(allCats, leftCat)
    setRightCat(randomCats(allCats))
  }

  function handleOnclickCat2() {
    rightCat.score = rightCat.score + 1
    Store.voteCats( allCats, rightCat)
    setLeftCat(randomCats(allCats))
  }

  function showRandomCat(cat) {
    return (
      <div key={cat.id}>
        <img src={cat.url} alt="cute cat"></img>
        <p className="score">{cat.score} <i className="fas fa-heart"></i></p>
      </div>
    )
  }

  return (
    <div className="votecontainer">
      <div className="votecat leftcat" onClick={handleOnclickCat1}>
        {showRandomCat(leftCat)}
      </div>
      <div className="votecat rightcat" onClick={handleOnclickCat2}>
        {showRandomCat(rightCat)}
      </div>
    </div>
  )
}

export default Vote