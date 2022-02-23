import React from "react";

interface Props {
  texto: any;
}

export const Info: React.FC<Props> = (props) => {
  return (
    <div className="bg-azul-mas-claro p-4 flex justify-center text-justify font-medium mx-auto">
      <div className="lg:max-w-5xl">{props.texto}</div>
    </div>
  );
};
