import React, { Component } from "react";

import TareaForm from "./TareaForm";
import Tarea from "./Tarea";

class Tareas extends Component {
  cat = "MotoGP";

  state = {
    circuito: [],
    clasificaciones: [],
    filtro: []
  };

  async componentDidMount() {
    const { circuito } = this.props.match.params;

    const circuitoData = await this.obtenerCircuito(circuito);
    this.setState({ circuito: circuitoData });

    const clasificacionesData = await this.obtenerClasificaciones(circuito);
    this.setState({ clasificaciones: clasificacionesData });

    this.filtrar(this.cat);
  }

  obtenerCircuito = async circuito => {
    const res = await fetch(
      `http://localhost:8080/api/mostrarCircuito.php?id=${circuito}`
    );
    const data = await res.json();

    return data;
  };

  obtenerClasificaciones = async circuito => {
    const res = await fetch(
      `http://localhost:8080/api/obtenerClasifsPorCircuito.php?circuito=${circuito}`
    );
    const data = await res.json();

    return data;
  };

  filtrar = async categoria => {
    this.cat = categoria;

    const data = this.state.clasificaciones.filter(
      clasificacion => clasificacion.categoria === categoria
    );
    this.setState({ filtro: data });
  };

  addTarea = clasificacion => {
    const nuevaTarea = {
      circuito: clasificacion.circuito,
      categoria: clasificacion.circuito,
      piloto: clasificacion.circuito,
      posicion: clasificacion.circuito,
      id: this.state.clasificaciones.length
    };
    this.setState({ tareas: [...this.state.clasificaciones, nuevaTarea] });
  };

  deleteTarea = id => {
    const newTareas = this.state.clasificaciones.filter(
      element => element.id !== id
    );
    this.setState({ tareas: newTareas });
  };

  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <hr />
        <TareaForm
          addTarea={this.addTarea}
          circuito={this.state.circuito}
          categoria={this.cat}
          filtrar={this.filtrar}
        />
        <br />
        <br />
        <h1>{this.state.filtro.length} Clasificación</h1>
        {/*this.state.filtro.map(tarea => (
          <div className="row" key={tarea.id}>
            <div className="col-12">
              <Tarea tarea={tarea} deleteTarea={this.deleteTarea} />
            </div>
          </div>
        ))*/}
      </div>
    );
  }
}

export default Tareas;
