import React from 'react';
import './App.css';
import Git from './pages/github/github'
import Apidragon from './pages/api-dragon/api-dragon'
import Footer from './pages/footer/footer'



function App() {
  return (
    <div className="git App">
      <header className="py-3 header">
        <nav className="container">
          <img></img>
          <a>GitHub</a>
        </nav>
        
      </header>
      <Git></Git>
      <Apidragon></Apidragon>
      <Footer></Footer>
    </div>
  );
}

export default App;
