import React, {Component} from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
     nombre: ""
    };
    this.verCambio = this.verCambio.bind(this);
  }
  verCambio(event) {
    this.setState({nombre: event.target.value});
  }

  render() {
    return (
    <div className="App">
      <div className="contenedor">
        <form>
          <label>Ingresá tu nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Gastón"
            value={this.state.nombre} 
            onChange={this.verCambio}
          />
        </form>
        <h3>Tu nombre es: {this.state.nombre}</h3>
      </div>
    </div>
    );
  }
}

export default Form;