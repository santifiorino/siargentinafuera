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
    let productosActualizados = this.state.listaProductos;
    for (let i of this.state.listaProductos) {
      i.precio_imaginario = Number(
        (i.precio_2002 * (1 + paises[0].inflacion / 100)).toFixed(2)
      );
    }
    this.setState({
      ...this.state,
      listaProductos: productosActualizados,
    });
  }

  cambiarPais = (event: any) => {
    let nuevoPais = paises.filter(
      (pais) => pais.nombre === event.target.value
    )[0];

    let productosActualizados = this.state.listaProductos;
    for (let i of this.state.listaProductos) {
      i.precio_imaginario = Number(
        (i.precio_2002 * (1 + nuevoPais.inflacion / 100)).toFixed(2)
      );
    }

    this.setState({
      paisSeleccionado: nuevoPais,
      listaProductos: productosActualizados,
    });
  };

  render() {
    return (
      <div className="App">
        <Info
          texto={
            <p>
              Tienda imaginaria en la que podés observar cuánto valdrian ciertos
              productos si la inflación Argentina en los últimos 20 años fuera
              igual a la de otros países.
            </p>
          }
        />
        <Header
          paisSeleccionado={this.state.paisSeleccionado}
          cambiarPais={this.cambiarPais}
        ></Header>
        <Productos listaProductos={this.state.listaProductos} />
        <Info texto={footerInfo} />
        <Footer />
      </div>
    );
  }
}

export default App;
