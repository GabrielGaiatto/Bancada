import React, { Component } from 'react';

class Apidragon extends Component {
  constructor(){
    super();
    this.state = 
    {listDragons:[],
     dragon:{},
     id_dragon:0};
  }

  componentDidMount(){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
    .then( response => response.json() )
    .then( data => {this.setState({listDragons: data})} );
  }

  getList(){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
    .then( response => response.json() )
    .then( data => {this.setState({listDragons: data})} );
  }

  onCreate(){
    const dragon = {name: 'Rayquaza', type: 'Lendario'};
    const request = {
      method: 'POST',
      headers: {'Content-type': 'aplication/json'},
      body: JSON.stringify(dragon)
    }
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', request)
    .then(response => response.json())
    .then(response2 => this.getList())
  }

  onEdit(id){
    console.log('Edit:'+id)
  }

  onDelete(id){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'+id, {method: 'DELETE'})
    .then(response => response.json())
    .then(response2 => this.getList()) 
  }


render(){
    const {listDragons} = this.state
      return <>
        <div className="container">
          <button onClick={() => this.onCreate()} className="btn btn-success float-right mt-2">Criar</button>
          <div className="row">
            <div className="col">
                <table className="table">
                  <thead className="fundo">
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Tipo</th>
                      <th>Data</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody className="fundo">
                  {listDragons.map(
                dragon => 
                    <tr>
                      <td>{dragon.id}</td>
                      <td>{dragon.name}</td>
                      <td>{dragon.type}</td>
                      <td>{dragon.createdAt}</td>
                      <td>
                        <button onClick={() => this.onDelete(dragon.id)} className="btn btn-danger ml-1">Deletar</button>
                        <button onClick={() => this.onEdit(dragon.id)} className="btn btn-primary ml-1">Editar</button>
                      </td>
                    </tr>
                  )}
                  </tbody>
                </table>



              

            </div>
          </div>
        </div>
  </>
  }
}



export default Apidragon;