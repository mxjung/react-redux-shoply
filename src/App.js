import React from 'react';
import './App.css';
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes />
    </div>
  );
}

export default App;
