import React from "react";

import {Pais} from "../types/Pais";
import {SelectorPais} from "./SelectorPais";

interface Props {
  paisSeleccionado: Pais;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-azul-claro header_col pl-3 pr-3">
        <h1 className="header_title">SI ARGENTINA FUERA COMO...</h1>
        <SelectorPais cambiarPais={props.handleSelect} />
      </div>

      <div className="bg-azul-oscuro header_col pl-3 pr-3">
        <h1 className="header_title">INFLACIÓN ÚLTIMOS 20 AÑOS:</h1>
        <div className="bg-white flex text-center w-4/5 mx-auto p-2 rounded-full">
          <div className="flex mx-auto">
            <img
              className="rounded-full w-6 h-6 mr-2"
              alt="bandera"
              src={props.paisSeleccionado.img}
            ></img>
            <h1 className="text-black mr-1 font-medium">
              {props.paisSeleccionado.nombre}:
            </h1>
            <h1 className="text-red-600 font-bold">
              +{props.paisSeleccionado.inflacion}%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
