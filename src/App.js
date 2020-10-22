import React from 'react';
import './App.css';
import Git from './pages/github/github'
import Apidragon from './pages/api-dragon/api-dragon'
import Footer from './pages/footer/footer'


function App() {
  return (
    <div className="git App">
      {/* <Git></Git> */}
      <Apidragon></Apidragon>
      <Footer></Footer>
    </div>
  );
}

export default App;
