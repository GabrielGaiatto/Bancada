import React, { Component } from 'react';
import './github.css'

class Github extends Component{
    constructor(){
        super()
        this.state = {
            user: [], 
            repo: [],

        }
    }
    
    componentDidMount(){
        fetch('https://api.github.com/users/GabrielGaiatto')
        .then( response => response.json() )
        .then( data => {this.setState({user: data})} );

        fetch('https://api.github.com/users/GabrielGaiatto/repos')
        .then( response => response.json() )
        .then( data => {this.setState({repo: data})} );
    }

    render(){
        let {user, repo} =this.state;
        return <>
            <div className="row"></div>
                <div className="col-3 fundo">
                    <p>Meu GitHub Infos</p>
                    <p>
                        login:@{user.login} <br/>
                        Localização:{user.location} <br/>
                        Seguidores:{user.followers} <br/>
                        Seguindo:{user.following} <br/>
                        Foto Do Perfil:<img src={user.avatar_url}></img>
                    </p>
                </div>
                <div className="col-9 fundo">
                    {repo.map(
                        repositorio => 
                        <p>
                            Nome Do Repositorio: {repositorio.name}
                            Descrição: {repositorio.description}
                            Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                        </p>
                        
                    )}
                </div>



        
        </>
    }
}

export default Github;