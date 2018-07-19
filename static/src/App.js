import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileInfoForm from './components/UserProfileInfoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfileInfoForm/>
      </div>
    );
  }
}

export default App;
