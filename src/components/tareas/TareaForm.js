import React, { Component } from "react";

//import Equipo from "../equipos/Equipo";
//import CategoriasCombo from "../CategoriasCombo";
//import PilotosCombo from "../pilotos/PilotosCombo";

import categoriasData from "../../data/categorias.json";
import pilotosData from "../../data/pilotos.json";

export default class TareasForm extends Component {
  /*
  state = {
    circuito: this.props.circuito,
    categoria: "MotoGP",
    piloto: 0,
    posicion: 0
  };

  constructor(props) {
    super(props);

    this.cambio = this.cambio.bind(this);
    this.filtrar = this.props.filtrar.bind(this);
    this.publicar = this.publicar.bind(this);
  }

  cambio = event => {
    if (event.target.name === "categoria") {
      //this.filtrar(event.target.value);
    }

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  publicar = event => {
    event.preventDefault();
    this.props.addTarea(this.state);
    this.setState({
      circuito: 0,
      categoria: "Moto2",
      piloto: 0,
      posicion: 0
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Equipo equipo={this.props.circuito} />
        </div>

        <div className="col-8">
          <form onSubmit={this.publicar}>
            <div className="form-group">
              <CategoriasCombo
                data={categoriasData}
                value={this.props.categoria}
                cambio={this.cambio}
              />
            </div>

            <div className="form-group">
              <PilotosCombo
                categoria={this.state.categoria}
                value={this.state.piloto}
                cambio={this.cambio}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="posicion"
                className="form-control"
                placeholder="Posición"
                onChange={this.cambio}
                value={this.state.posicion}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Publicar
            </button>
          </form>
        </div>
      </div>
    );
  }
*/

  state = {
    categorias: categoriasData,
    categoria: "MotoGP",
    pilotos: [],
    piloto: "",
    posicion: 0,
    loading: false
  };

  async componentDidMount() {
    this.cargaPilotos(this.state.categoria);
  }

  cambio = event => {
    const categoria = event.target.value;

    this.cargaPilotos(categoria);
  };

  cargaPilotos = value => {
    this.setState(
      {
        categoria: value,
        loading: true
      },
      () => {
        const data = pilotosData.filter(
          piloto => piloto.equipo.categoria === this.state.categoria
        );
        this.setState({
          pilotos: data,
          loading: false
        });
      }
    );
  };

  publicar = event => {
    event.preventDefault();
    this.props.addTarea(
      this.state.categoria,
      this.state.piloto,
      this.state.posicion
    );
    this.setState({
      categoria: "MotoGP",
      pilotos: [],
      piloto: "",
      posicion: 0,
      loading: false
    });
    this.cargaPilotos(this.state.categoria);
  };

  render() {
    return (
      !this.state.loading && (
        <div className="row">
          <div className="col-4">
            <Equipo equipo={this.props.circuito} />
          </div>

          <div className="col-8">
            <div className="form-group">
              <select
                name="categoria"
                className="form-control"
                onChange={this.cambio}
                defaultValue={this.state.categoria}
              >
                {this.state.categorias.map(element => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <select name="piloto" className="form-control">
                {this.state.pilotos.map(element => (
                  <option value={element.id} key={element.id}>
                    {element.nombre} {element.apellido}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="posicion"
                className="form-control"
                placeholder="Posición"
                onChange={this.cambio}
                value={this.state.posicion}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Publicar
            </button>
          </div>
        </div>
      )
    );
  }
}
