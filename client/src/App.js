import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/> 
      </div>
    );
  }
}

export default App;
