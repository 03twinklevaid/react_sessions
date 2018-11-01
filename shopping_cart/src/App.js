import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <header>
            <Header/>
        </header>
      </div>
    );
  }
}

export default App;
