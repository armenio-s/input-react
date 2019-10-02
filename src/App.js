import React, {Component} from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
     nombre: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({nombre: event.target.value});
  }

  render() {
    return (
    <div className="contenedor">
      <form>
        <label>Ingresá tu nombre</label>
        <input
          type="text"
          name="nombre"
          value={this.state.nombre} 
          onChange={this.handleChange}
        />
      </form>
      <div className="ver-nombre">
      <h3>Tu nombre es: {this.state.nombre}</h3>
    </div>
    </div>
    );
  }
}

export default Form;