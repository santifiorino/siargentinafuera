import React from "react";
import {paises} from "../data/Paises.js";

interface Props {
  cambiarPais: (event: any) => void;
}

export const SelectorPais: React.FC<Props> = (props) => {
  const optionsPaises = paises.map((pais) => (
    <option key={pais.nombre} value={pais.nombre}>
      {pais.nombre}
    </option>
  ));

  return (
    <div>
      <select
        className="w-4/5 h-10 rounded-full pl-5 text-center font-medium"
        onChange={props.cambiarPais}
      >
        {optionsPaises}
      </select>
    </div>
  );
};
