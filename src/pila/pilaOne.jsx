import React, { useState } from "react";
import UiPila from "../components/uiPila";

function PilaOne() {
  const [pila, setPila] = useState([6, 5, 4, 3, 2, 1]);
  const [pila2, setPila2] = useState([]);

  const popElemento = () => {
    if (pila.length === 0) return; // No hay elementos para sacar

    const primerElemento = pila[0]; // Obtener el primer elemento de la pila
    const nuevaPila = pila.slice(1); // Quitar el primer elemento de la pila original
    setPila(nuevaPila);

    // Agregar el primer elemento a la segunda pila
    // Usamos unshift() para que el último elemento de la primera pila se convierta en el primer elemento de la segunda pila
    setPila2([primerElemento, ...pila2]);
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="border-l-4 border-b-4 border-r-4 border-blue-500 w-fit p-1 grid gap-2">
        {pila.map((item, index) => (
          <UiPila key={index} item={item} />
        ))}
      </div>

      <button onClick={popElemento} className="bg-blue-500 rounded-md h-fit w-fit px-4 py-2">
        pop - Sacar el primer elemento de la pila a otra pila
      </button>

      <div className="border-l-4 border-b-4 border-r-4 border-blue-500 w-fit p-1 grid gap-2">
        {pila2.map((item, index) => (
          <UiPila key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default PilaOne;
