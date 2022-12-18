import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Header />
       <Sidebar />
    </div>
  );
}

export default App;
