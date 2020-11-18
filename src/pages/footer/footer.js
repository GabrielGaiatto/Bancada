import React, {Component} from 'react';
import './footer.css';
import FB from '../../img/facebook-icon.png'
import TT from '../../img/twitter-icon.png'
import YT from '../../img/youtube-icon.png'
import WPP from '../../img/whatsapp-icon.png'
import DISC from '../../img/discord.png'
import INSTA from '../../img/instagram-icon.png'

class Footer extends Component{
    render(){
        return (
            <footer className="pt-4">
                <div className="container">


                        <p>Redes Sociais</p>
                    <div className="row img">
                        <div className="row">
                            <a href="https://www.facebook.com.br"><img src={FB}></img></a>
                            <a href="https://twitter.com/login?lang=pt"><img src={TT}></img></a>
                            <a href="https://www.youtube.com/"><img src={YT}></img></a>
                            <a href="https://web.whatsapp.com/"><img src={WPP}></img></a>
                            <a href="https://discord.com/"><img src={DISC}></img></a>
                            <a href="https://instagram.com.br"><img src={INSTA}></img></a>
                        </div>


                        <div className="col contato">
                            <p> Contato:<a href="tel:+555198809705">(51) 99880-9705</a> </p> 
                            <p> Email:<a href="mailto:contato@empresa.com.br">contato@empresa.com.br</a> </p>
                            
                        </div>
                        
                        <div className="col">
                            <p className="endereço ml-5">
                                Endereço: <br/> 
                                Avenida Açucena 432 <br/>
                                Bairro Moinhos de vento <br/>
                                Canoas 
                            </p>
                        </div>
                    </div>
                </div>
                <p className="copyright pb-2">Copyright@2020 - Gabriel Gaiatto</p>
            </footer>
        );
    }
}

export default Footer;