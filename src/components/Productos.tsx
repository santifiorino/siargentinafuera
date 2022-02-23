import React from "react";

import ProductoTsx from "./ProductoTsx";

import {Producto} from "../types/Producto";

interface Props {
  listaProductos: Producto[];
}

export const Productos: React.FC<Props> = (props) => {
  return (
    <div className="lg:max-w-5xl mx-auto p-5 text-center">
      <h1 className="text-azul-oscuro font-black text-4xl mt-3">TIENDA</h1>
      <h1 className="text-azul-oscuro font-medium mb-8">
        (Precios en pesos argentinos)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center mx-auto mb-8">
        {props.listaProductos.map((producto) => (
          <ProductoTsx key={producto.nombre} producto={producto} />
        ))}
      </div>
    </div>
  );
};
