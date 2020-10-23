import React, { Component } from 'react';
import { Modal, Button, From, ModalTitle, ModalBody, Form} from 'react-bootstrap'
import './api-dragon.css'

class Apidragon extends Component {
  constructor(){
    super();
    this.state = 
    {listDragons:[],
     showModal: false,
     showAlert: false};
  }

  componentDidMount(){
    this.getList();
  }

  getList(){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
    .then( response => response.json() )
    .then( data => {this.setState({listDragons: data})} );
  }

  onCreate(event){
    event.preventDefault();
    let form = event.target;


    const dragon = {
      name: form.elements.name.value,
      type: form.elements.type.value
    };
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

  handleModalClose(){
    this.setState({showModal: false})
  }

  handleModalOpen(){
    this.setState({showModal: true})
  }


render(){
    const {listDragons, showAlert, showModal} = this.state
      return <>
        <div className="container">
          <button onClick={() => this.handleModalOpen()} className="btn btn-success float-right mt-2">Criar</button>
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
        <Modal show={showModal} onHide={() => this.handleModalClose()}>
          <Modal.Header closeButton>
            <ModalTitle>Criar Dragão</ModalTitle>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.onCreate}>
              <Form.Group controlId="formName">
                 <Form.Label>Name</Form.Label>
                 <Form.Control type="text" name="name"/>
              </Form.Group>
              <Form.Group controlId="formType">
                 <Form.Label>Tipo</Form.Label>
                 <Form.Control type="text" name="type"/>
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleModalClose()}>
              Close 
            </Button>
          </Modal.Footer>
        </Modal>
  </>
  }
}



export default Apidragon;