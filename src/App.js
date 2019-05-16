import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation' // importamos el componente
import Form from './components/Form' // importamos el componente
import {tareas} from './tareas.json' // importamos el json

class App extends Component {
  // estructura del constructor
  constructor(props){
    super(props);
    // nuestras tareas son un state que podremos modificar
    this.state = {
      tareas: tareas // el state tareas equivale a las tareas importadas.
    }
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  removeTarea(index) {
    this.setState({
      tareas: this.state.tareas.filter((e,i) => {
        return i !== index
      })
    })
  }

  render(){
    console.log(this.state.tareas) //Imprimimos el arreglo en la consola

    //Recorremos las tareas con un .map para darle aspecto a cada una
    const tareas = this.state.tareas.map((tarea, i) => {
      //cada una estará en un div que contiene su título
      return(

        <div className='col-md-4'>
          <div className='card mt-4'>
            <div className='card-header'>
              <h3>{tarea.titulo}</h3>
              <span className='badge badge-pill badge-danger ml-2'>
                {tarea.prioridad}
              </span>
            </div>
            <div className='card-body'>
              <p>{tarea.descripcion}</p>
              <p><mark>{tarea.responsable}</mark></p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-danger'
                      onClick={this.removeTarea.bind(this, i)}>
              Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
          <Navigation lengthTareas={this.state.tareas.length}/>

          <img src={logo} className="App-logo" alt="logo" />

          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <Form onAddTarea={this.handleAddTarea}/>
              </div>
              <div className="col-md-9">
                <div className="row">
                  {tareas}
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
