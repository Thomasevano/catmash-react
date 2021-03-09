import React, { useState, useEffect } from 'react';
import Store from './Store';

function Vote() {
  const [allCats, setAllCats] = useState(Store.getCats())
  const [duplicateCat, setDuplicateCat] = useState([])
  const [leftCat, setLeftCat] = useState([])
  const [rightCat, setRightCat] = useState([])

  function randomCats(array) {
    let randomNumber = Math.floor(Math.random() * array.length)
    let randomCat = array[randomNumber];
    if (duplicateCat.includes(randomCat)) {
      return randomCats(allCats)
    }
    else {
      return randomCat
    }
  }

  useEffect(() => {
    setLeftCat(randomCats(allCats))
    setRightCat(randomCats(allCats))
  }, [allCats])

  useEffect(() => {
    setDuplicateCat([duplicateCat, leftCat, rightCat])
  }, [leftCat, rightCat])

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
        <div className="cat-face">
          <img src={cat.url} alt="cute cat"></img>
        </div>
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