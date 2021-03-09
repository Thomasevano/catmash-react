import React from 'react';
import Header from './components/Header'
import Routes from './components/Routes'
import Store from './components/Store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  Store.getCats()
  return (
    <div className="App">
    <Header/>
    <Routes/>
    </div>
  );
}

export default App;
