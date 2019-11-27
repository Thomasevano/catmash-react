import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Score from './components/Score'
import Header from './components/Header'
import Routes from './components/Routes'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const cats = [
  {
    id:1,
    score: 0,
    url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg"
  },
  {
    id:2,
    score: 0,
    url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg"
  },
  {
    id:3,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg"
  },
  {
    id:4,
    score: 0,
    url: "http://24.media.tumblr.com/tumblr_lzxok2e2kX1qgjltdo1_1280.jpg"
  },
  {
    id:5,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_m33r7lpy361qzi9p6o1_500.jpg"
  },
  {
    id:6,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_m2p6dxhxul1qdvz31o1_500.jpg"
  },
  {
    id:7,
    score: 0,
    url: "http://24.media.tumblr.com/tumblr_m1ku66jPWV1qze0hyo1_400.jpg"
  },
  {
    id:8,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_m4pwa9EXE41r6jd7fo1_500.jpg"
  },
  {
    id:9,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_m6x62cjEz31qk4s2co1_1280.jpg"
  },
  {
    id:10,
    score: 0,
    url: "http://25.media.tumblr.com/tumblr_lyj0y5tg4L1qbwemzo1_1280.jpg"
  },
]

function App() {
  // const [cats, setCats] = useState([]);

  // useEffect(() => { 
  //   const fetchCats = async() => {
  //     const response = await axios.get('../public/cats.json');
  //     setCats(response.data.images);
  //   }
  //   fetchCats();
  // }); 

  return (
    <div className="App">
    <Header/>
    <Routes/>
      {/* {cats.map(cat => 
      <Score key={cat.id} cat={cat}/>
      )} */}
    </div>
  );
}

export default App;
