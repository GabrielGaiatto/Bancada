import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig';
import Git from './pages/github/github'
import Apidragon from './pages/api-dragon/api-dragon'
import Footer from './pages/footer/footer'
import DG from './img/dragao-icon.png'



function App() {
  return (
    <div className="git App">
      <header className="py-3 header">
        <nav className="nav-links navbar navbar-expand-md">
          <Link className='px-2' to='/home'>Home</Link>
          <Link className='px-2' to='/'>ApiDragon</Link> 
          <Link className='px-2' to='/github'>GitHub</Link>
        </nav>
      </header>
      {routesConfig.map(
        (value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}
          ></Route>
        }
        )}
        <Footer></Footer>
    </div>
  );
}

export default App;
