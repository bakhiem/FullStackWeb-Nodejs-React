import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className='mt-3'></div>
        <Content/>
      </div>
    );
  }
}

export default App;
