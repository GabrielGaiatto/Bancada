import React, {Component} from 'react';
import "./home.css"
import Magras from '../../img/magras.png'
import Shaco from '../../img/shaco.png'
import Jajax from '../../img/jajax.png'
import Darius from '../../img/darius.png'

class Home extends Component{
    render(){
        return (
            <div className="home pb-3">
                <p className="titulo">Lolzin</p>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img className="foto" src={Magras}></img>
                        </div>
                        <div className="col-3">
                            <img className="foto" src={Darius}></img>
                        </div>
                        <div  className="col-3">
                            <img className="foto" src={Jajax}></img>
                        </div>
                        <div className="col-3">
                            <img className="foto" src={Shaco}></img>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-5 mr-5 borda">
                            Infos 1
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                        </div>
                        <div className="col-5 ml-5 borda">
                            Infos 2
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                            <p>texto</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;