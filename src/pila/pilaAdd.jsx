import React, { useState } from "react";
import UiPila from "../components/uiPila";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula

function PilaAdd() {
  const [pila, setPila] = useState([4, 3, 2, 1]);
  const [pila2, setPila2] = useState([]);
  const [pila3, setPila3] = useState([]);

  const popElemento = () => {
    if (pila.length === 0) return; // No hay elementos para sacar

    const primerElemento = pila[0]; // Obtener el primer elemento de la pila
    const nuevaPila = pila.slice(1); // Quitar el primer elemento de la pila original
    setPila(nuevaPila);

    // Agregar el primer elemento a la segunda pila
    // Usamos unshift() para que el último elemento de la primera pila se convierta en el primer elemento de la segunda pila
    setPila2([primerElemento, ...pila2]);
  };
  const popElementoFinal = () => {
    if (pila2.length === 0) return; // No hay elementos para sacar

    const primerElemento = pila2[0]; // Obtener el primer elemento de la pila
    const nuevaPila = pila2.slice(1); // Quitar el primer elemento de la pila original
    setPila2(nuevaPila);

    // Agregar el primer elemento a la segunda pila
    // Usamos unshift() para que el último elemento de la primera pila se convierta en el primer elemento de la segunda pila
    setPila3([primerElemento, ...pila3]);
  };
  function pushElemento() {
    const valor = document.getElementById("input").value;
    setPila([valor, ...pila]);

    console.log(valor);
    console.log("after and before");
    console.log(pila);
    document.getElementById("input").value = "";
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-2  bg-white rounded-md ">
        <section className="border grid gap-8 border-zinc-200 rounded-md shadow-md p-4">
          <h1 className="">
            1.- Escriba una rutina que reciba una Pila P de números enteros y
            mueva sus elementos a una nueva Pila, pero manteniendo el orden de
            salida de los mismos. Al finalizar la Pila P no debe contener
            elementos.
          </h1>
        
            <input
              id="input"
              type="text"
              className="border px-4 h-12 border-gray-300 rounded-md py-1  focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Ingrese un elemento"
            />
            <button
              onClick={pushElemento}
              className="bg-blue-500 rounded-md px-4 h-12 text-white py-2"
              type="submit"
            >
              Push
            </button>
     
        </section>
        <section className=" md:col-span-2 border border-zinc-200 rounded-md shadow-md p-4">
          <h1 className="text-xl">Pilas </h1>
          <div className="grid   grid-cols-3 border min-h-80 gap-8">
        
              <div className="border-l-4 border-b-4 border-r-4 min-h-80 border-blue-500 w-24 p-1 flex flex-col gap-2 ">
                {pila.map((item, index) => (
                  <UiPila key={index} item={item} />
                ))}
              </div>
           

            
              <div className="border-l-4 border-b-4 border-r-4 min-h-80 border-blue-500 w-24 p-1 flex flex-col gap-2">
                {pila2.map((item, index) => (
                  <UiPila key={index} item={item} />
                ))}
              </div>

            

            <div className="border-l-4 border-b-4 border-r-4 min-h-80 border-blue-500 w-24 p-1 flex flex-col gap-2">
              {pila3.map((item, index) => (
                <UiPila key={index} item={item} />
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-3 border  gap-8">
          <button
                onClick={popElemento}
                className="bg-green-500 rounded-md h-fit w-fit px-4 py-2"
              >
                Pop
              </button>

              <button
                onClick={popElementoFinal}
                className="bg-green-500 rounded-md h-fit w-fit px-4 py-2"
              >
                Pop
              </button>
          
            <button></button>
            
          </div>
        </section>
        <section className="md:col-span-3 bg-gray-800 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md">
          <details>
            <summary className="text-lg font-bold mt-4">
              Ver el codigo fuente en JavaScript
            </summary>
            <pre>
              <code>
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {`

              `}
                </SyntaxHighlighter>
              </code>
            </pre>
          </details>
        </section>
      </div>
   
    </>
  );
}

export default PilaAdd;
