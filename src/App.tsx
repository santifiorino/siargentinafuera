import React from "react";
import "./App.css";

import {Pais} from "./types/Pais";
import {Producto} from "./types/Producto";

import {Info} from "./components/Info";
import {Header} from "./components/Header";
import {Productos} from "./components/Productos";
import {Footer} from "./components/Footer";

import {paises} from "./data/Paises.js";
import {productos} from "./data/Productos.js";
import {footerInfo} from "./data/FooterInfo";

interface State {
  paisSeleccionado: Pais;
  listaProductos: Producto[];
}

class App extends React.Component {
  state: State = {
    listaProductos: productos,
    paisSeleccionado: paises[0],
  };

  componentDidMount() {
    this.cambiarPais(paises[0]);
  }

  handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nuevoPais: Pais = paises.filter(
      (pais) => pais.nombre === event.target.value
    )[0];
    this.cambiarPais(nuevoPais);
  };

  cambiarPais = (paisNuevo: Pais) => {
    let productosActualizados = this.state.listaProductos;
    for (let i of this.state.listaProductos) {
      i.precio_imaginario = Number(
        (i.precio_2002 * (1 + paisNuevo.inflacion / 100)).toFixed(2)
      );
    }

    this.setState({
      paisSeleccionado: paisNuevo,
      listaProductos: productosActualizados,
    });
  };

  render() {
    return (
      <div className="App">
        <Info
          texto={
            <p>
              Tienda imaginaria en la que podés observar cuánto valdrían ciertos
              productos si la inflación Argentina en los últimos 20 años fuera
              igual a la de otros países.
            </p>
          }
        />
        <Header
          paisSeleccionado={this.state.paisSeleccionado}
          handleSelect={this.handleSelect}
        ></Header>
        <Productos listaProductos={this.state.listaProductos} />
        <Info texto={footerInfo} />
        <Footer />
      </div>
    );
  }
}

export default App;
