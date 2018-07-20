import React, { Component } from 'react';
import './App.css';
import UserProfileInfoForm from './components/UserProfileInfoForm';
// import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProfileInfoForm />
      </div>
    );
  }
}

export default App;
