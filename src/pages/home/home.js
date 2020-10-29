import React, {Component} from 'react';
import "./home.css"
import Magras from '../../img/magras.png'
import Shaco from '../../img/shaco.png'
import Jajax from '../../img/jajax.png'
import Darius from '../../img/darius.png'
import Apreender from '../../img/apreender.png'
import Dizimar from '../../img/dizimar.png'
import Hemorragia from '../../img/hemorragia.png'
import Mutilador from '../../img/mutilador.png'
import Guilhotina from '../../img/guilhotina-de-noxus.png'
import Bebedeira from '../../img/bebedeira.png'
import Barrigada from '../../img/barrigada.png'
import HappyHour from '../../img/happy-hour.png'
import Barril from '../../img/barril.png'
import Ult from '../../img/barril-explosivo.png' 
import Poder from '../../img/poder.png'
import Salto from '../../img/salto.png'
import Energizar from '../../img/energizar.png'
import ContraAtaque from '../../img/contra-ataque.png'
import Investida from '../../img/investida.png'
import Alucinações from '../../img/alucinacoes.png'
import Apunhalar from '../../img/apunhalar.png'
import Box from '../../img/caixinha.png'
import Enganar from '../../img/enganar.png'
import Faca from '../../img/faca.png'


class Home extends Component{
    render(){
        return (
            <div className="home pb-2">
                <p className="titulo container col-1">LoL Wiki</p>
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
                    <div className="row text-center infos mt-5">
                        <div className="col-md-5 mr-md-5 borda">
                            <h3 className="gragas">Gragas</h3>
                            <h5>Passiva: HappyHour <img className="habilidades" src={HappyHour}></img></h5>
                            <h5>Q: Barril <img className="habilidades" src={Barril}></img></h5>
                            <h5>W: Bebedeira <img className="habilidades" src={Bebedeira}></img></h5>
                            <h5>E: Barrigada <img className="habilidades" src={Barrigada}></img></h5>
                            <h5>R: Barril Explosivo <img className="habilidades" src={Ult}></img></h5>
                        </div>
                        <div className="col-md-5 mr-md-5 borda">
                            <h3 className="darius">Darius</h3>
                            <h5>Passiva: Hemorragia <img className="habilidades" src={Hemorragia}></img></h5>
                            <h5>Q: Dizimar <img className="habilidades" src={Dizimar}></img></h5>
                            <h5>W: Ataque Mutilador <img className="habilidades" src={Mutilador}></img></h5>
                            <h5>E: Apreender <img className="habilidades" src={Apreender}></img></h5>
                            <h5>R: Guilhotina De Noxus <img className="habilidades" src={Guilhotina}></img></h5>
                        </div>
                        <div className="col-md-5 mr-md-5 borda">
                            <h3 className="jax">Jax</h3>
                            <h5>Passiva: Investida Implacável <img className=" habilidades" src={Investida}></img></h5>
                            <h5>Q: Salto Ataquante <img className="habilidades" src={Salto}></img></h5>
                            <h5>W: Energizar <img className="habilidades" src={Energizar}></img></h5>
                            <h5>E: Contra-Ataque <img className=" habilidades" src={ContraAtaque}></img></h5>
                            <h5>R: Poder Do Grão-Mestre <img className="habilidades" src={Poder}></img></h5>
                        </div>
                        <div className="col-md-5 mr-md-5 borda">
                            <h3 className="shaco">Shaco</h3>
                            <h5>Passiva: Apunhalar <img className="habilidades" src={Apunhalar}></img></h5>
                            <h5>Q: Enganar <img className="habilidades" src={Enganar}></img></h5>
                            <h5>W: Caixinha-Surpresa(Box) <img className="habilidades" src={Box}></img></h5>
                            <h5>E: Veneno de dois Gumes <img className="habilidades" src={Faca}></img></h5>
                            <h5>R: Alucinações <img className="habilidades" src={Alucinações}></img></h5>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;