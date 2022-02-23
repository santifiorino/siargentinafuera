import React from "react";
import {Producto} from "../types/Producto";

interface Props {
  producto: Producto;
}

interface State {
  mostrarPrecioOriginal: boolean;
}

class ProductoTsx extends React.Component<Props, State> {
  state: State = {
    mostrarPrecioOriginal: false,
  };

  cambiarPrecio = () =>
    this.setState({
      mostrarPrecioOriginal: !this.state.mostrarPrecioOriginal,
    });

  render() {
    const precio = !this.state.mostrarPrecioOriginal ? (
      <h1 className="text-azul-oscuro font-black text-2xl">
        ${this.props.producto.precio_imaginario}
      </h1>
    ) : (
      <h1 className="text-red-800 font-black text-2xl">
        ${this.props.producto.precio_2022}
      </h1>
    );

    let textoBoton: string;
    let claseBoton: string;
    let claseCard: string;
    let claseNombre: string;

    if (!this.state.mostrarPrecioOriginal) {
      textoBoton = "VER PRECIO REAL";
      claseBoton = "bg-azul-oscuro boton-precio";
      claseCard = "border-azul-oscuro producto-card";
      claseNombre = "text-azul-oscuro font-bold";
    } else {
      textoBoton = "VER PRECIO FALSO";
      claseBoton = "bg-red-800 boton-precio";
      claseCard = "border-red-800 producto-card";
      claseNombre = "text-red-800 font-bold";
    }

    return (
      <div className={claseCard}>
        <img
          className="rounded-3xl"
          src={this.props.producto.img}
          alt="producto"
        />
        {precio}
        <h1 className={claseNombre}>{this.props.producto.nombre}</h1>
        <button className={claseBoton} onClick={this.cambiarPrecio}>
          {textoBoton}
        </button>
      </div>
    );
  }
}

export default ProductoTsx;
