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
        fetch('https://api.github.com/users/mdo')
        .then( response => response.json() )
        .then( data => {this.setState({user: data})} );

        fetch('https://api.github.com/users/mdo/repos')
        .then( response => response.json() )
        .then( data => {this.setState({repo: data})} );
    }

    render(){
        let {user, repo} =this.state;
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-12 border">
                            <p className="titulo">Meu GitHub Infos</p>
                        <div className="card bg-card">
                            Foto Do Perfil:<img className="circle-photo" src={user.avatar_url}></img> <br/>
                            login:@{user.login} <br/>
                            Localização:{user.location} <br/>
                            Seguidores:{user.followers} <br/>
                            Seguindo:{user.following} <br/>
                            <p>Twitter:<a href="https://twitter.com/mdo"> @{user.twitter_username}</a></p> <br/>
                        </div>
                    </div>
                    <div className="col-md-9 col-12 border">
                    {repo.map(
                        repositorio => 
                            <div className="card bg-card">
                                Nome Do Repositorio: {repositorio.name} <br/>
                                Descrição: {repositorio.description}    <br/>
                                Link do Repositório: <a href={repositorio.html_url}>Clique Aqui</a>
                            </div>
                            
                        )}
                    </div>
               </div>
            </div>



        
        </>
    }
}

export default Github;