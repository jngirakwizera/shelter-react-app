import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Router />
   </BrowserRouter>
  );
}

export default App;
