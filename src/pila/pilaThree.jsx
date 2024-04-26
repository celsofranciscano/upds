import React, { useState } from "react";
import UiPila from "../components/uiPila";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor; // Asigna el valor pasado como parámetro al atributo "valor" del nodo
    this.siguiente = null; // Inicializa el puntero al siguiente nodo como null
  }
}

// Definición de la clase Pila
class Pila {
  constructor() {
    this.tope = null; // Inicializa la pila con el tope vacío
  }

  // Método para insertar un elemento en la pila
  push(valor) {
    const nuevoNodo = new Nodo(valor); // Crea un nuevo nodo con el valor dado
    if (!this.tope) {
      this.tope = nuevoNodo; // Si la pila está vacía, el nuevo nodo se convierte en el tope
    } else {
      nuevoNodo.siguiente = this.tope; // El nuevo nodo apunta al nodo actual del tope
      this.tope = nuevoNodo; // El nuevo nodo se convierte en el nuevo tope
    }
  }

  // Método para eliminar el elemento del tope de la pila y devolverlo
  pop() {
    if (!this.tope) {
      return null; // Si la pila está vacía, retorna null
    }
    const valorTope = this.tope.valor; // Almacena el valor del tope actual
    this.tope = this.tope.siguiente; // El nodo siguiente al tope actual se convierte en el nuevo tope
    return valorTope; // Retorna el valor del tope actual
  }
}

// Función para intercambiar elementos entre dos pilas manteniendo el orden de salida
function intercambiarPilas(P1, P2) {
  const pilaAux = new Pila(); // Creamos una pila auxiliar para el intercambio

  // Mientras haya elementos en P1, los desapilamos y los apilamos en la pila auxiliar
  while (P1.tope) {
    const elemento = P1.pop();
    pilaAux.push(elemento);
  }

  // Mientras haya elementos en la pila auxiliar, los desapilamos y los apilamos en P2
  while (pilaAux.tope) {
    const elemento = pilaAux.pop();
    P2.push(elemento);
  }

  // Mientras haya elementos en P2, los desapilamos y los apilamos en la pila auxiliar
  while (P2.tope) {
    const elemento = P2.pop();
    pilaAux.push(elemento);
  }

  // Mientras haya elementos en la pila auxiliar, los desapilamos y los apilamos en P1
  while (pilaAux.tope) {
    const elemento = pilaAux.pop();
    P1.push(elemento);
  }
}

function PilaThree() {
  const [pila, setPila] = useState([4, 3, 2, 1]);
  const [pila2, setPila2] = useState([14, 13, 12, 11]);


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

    // Agregar el primer elemento a la tercera pila
    // Usamos unshift() para que el primer elemento de la segunda pila se convierta en el tope de la tercera pila
    setPila((prevPila) => [primerElemento, ...prevPila]);
  };


  function intercambiar() {
    intercambiarPilas(pila, pila2);
    setPila([...pila2]);
    setPila2([...pila]);
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
        <section className="border grid gap-8 border-zinc-200 rounded-md shadow-md p-4">
          <h1 className="">
            3.- Escriba una rutina que reciba dos Pilas P1 y P2 de números
            enteros y proceda a intercambiar sus elementos, pero manteniendo
            el orden de salida de los elementos. Al finalizar la rutina, la
            Pila P1 tendrá los elementos de la Pila P2 y esta a su vez tendrá
            los elementos de la Pila P1.
          </h1>

          <button
            onClick={intercambiar}
            className="bg-yellow-500 rounded-md px-4 h-12 text-white py-2"
            type="button"
          >
            Intercambiar Pilas
          </button>
        </section>
        <section className=" border border-zinc-200 rounded-md shadow-md p-4">
          <div className="grid grid-cols-2 ">
          <h1 className="text-xl">Pila 1 </h1>
          <h1 className="text-xl">Pila 2</h1>
          </div>
          <div className="grid   grid-cols-2 border min-h-80 gap-8">
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

         
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-2 border  gap-8">
            <button
              onClick={popElemento}
              className="bg-green-500 rounded-md h-fit w-fit px-4 py-2"
            >
              Pop Pila 1
            </button>

            <button
              onClick={popElementoFinal}
              className="bg-green-500 rounded-md h-fit w-fit px-4 py-2"
            >
              Pop Pila 2
            </button>
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
// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor; // Asigna el valor pasado como parámetro al atributo "valor" del nodo
    this.siguiente = null; // Inicializa el puntero al siguiente nodo como null
  }
}

// Definición de la clase Pila
class Pila {
  constructor() {
    this.tope = null; // Inicializa la pila con el tope vacío
  }

  // Método para insertar un elemento en la pila
  push(valor) {
    const nuevoNodo = new Nodo(valor); // Crea un nuevo nodo con el valor dado
    if (!this.tope) {
      this.tope = nuevoNodo; // Si la pila está vacía, el nuevo nodo se convierte en el tope
    } else {
      nuevoNodo.siguiente = this.tope; // El nuevo nodo apunta al nodo actual del tope
      this.tope = nuevoNodo; // El nuevo nodo se convierte en el nuevo tope
    }
  }

  // Método para eliminar el elemento del tope de la pila y devolverlo
  pop() {
    if (!this.tope) {
      return null; // Si la pila está vacía, retorna null
    }
    const valorTope = this.tope.valor; // Almacena el valor del tope actual
    this.tope = this.tope.siguiente; // El nodo siguiente al tope actual se convierte en el nuevo tope
    return valorTope; // Retorna el valor del tope actual
  }
}

// Función para intercambiar elementos entre dos pilas manteniendo el orden de salida
function intercambiarPilas(P1, P2) {
  const pilaAux = new Pila(); // Creamos una pila auxiliar para el intercambio

  // Mientras haya elementos en P1, los desapilamos y los apilamos en la pila auxiliar
  while (P1.tope) {
    const elemento = P1.pop();
    pilaAux.push(elemento);
  }

  // Mientras haya elementos en la pila auxiliar, los desapilamos y los apilamos en P2
  while (pilaAux.tope) {
    const elemento = pilaAux.pop();
    P2.push(elemento);
  }

  // Mientras haya elementos en P2, los desapilamos y los apilamos en la pila auxiliar
  while (P2.tope) {
    const elemento = P2.pop();
    pilaAux.push(elemento);
  }

  // Mientras haya elementos en la pila auxiliar, los desapilamos y los apilamos en P1
  while (pilaAux.tope) {
    const elemento = pilaAux.pop();
    P1.push(elemento);
  }
}

function PilaThree() {
  const [pila, setPila] = useState([4, 3, 2, 1]);
  const [pila2, setPila2] = useState([14, 13, 12, 11]);


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

    // Agregar el primer elemento a la tercera pila
    // Usamos unshift() para que el primer elemento de la segunda pila se convierta en el tope de la tercera pila
    setPila((prevPila) => [primerElemento, ...prevPila]);
  };


  function intercambiar() {
    intercambiarPilas(pila, pila2);
    setPila([...pila2]);
    setPila2([...pila]);
  }

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

export default PilaThree;
