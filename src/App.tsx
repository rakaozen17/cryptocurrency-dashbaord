import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/Sidebar';
import Overview from './Pages/Overview/Overview';

function App() {
  return (
    <div className="App">
       <Header />
       <Sidebar />
       <Overview /> 
    </div>
  );
}

export default App;
