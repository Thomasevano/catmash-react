import React from 'react';
import catsData from '../data/cats.json';

export default {
  getCats() {
    let cats;
    if(localStorage.getItem('cats') === null) {
      cats = localStorage.setItem('cats', JSON.stringify(catsData));
    }
    else {
      cats = JSON.parse(localStorage.getItem('cats'));
    }

    return cats;
  },
  voteCats(allCats, cat) {
    localStorage.setItem('cats', JSON.stringify(allCats), JSON.stringify(cat))
  }
}
