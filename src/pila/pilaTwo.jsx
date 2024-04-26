import React, { useState } from "react";
import UiPila from "../components/uiPila";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Puntero al siguiente nodo
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

  // Método para mover elementos de la pila a una nueva pila manteniendo el orden de salida
  moverElementos() {
    const nuevaPila = new Pila(); // Crea una nueva pila
    while (this.tope) {
      const elemento = this.pop(); // Extrae el elemento del tope de la pila actual
      nuevaPila.push(elemento); // Inserta el elemento en la nueva pila
    }
    return nuevaPila; // Retorna la nueva pila con los elementos movidos
  }
}

function PilaTwo() {
  const [pila, setPila] = useState([4, 3, 2, 1]);
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



  function pushElemento() {
    const valor = document.getElementById("input2").value;

    setPila([valor, ...pila]);

    document.getElementById("input2").value = "";
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
        <section className="border grid gap-8 border-zinc-200 rounded-md shadow-md p-4">
          <h1 className="">
          Escriba una rutina que reciba una Pila P de números enteros y mueva sus elementos a una nueva Pila, pero invirtiendo el orden de salida de los mismos. Al finalizar la Pila P no debe contener elementos
          </h1>

          <input
            id="input2"
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


        <section className="  border border-zinc-200 rounded-md shadow-md p-4">
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

          
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-3 border  gap-8">
            <button
              onClick={popElemento}
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

  // Método para mover elementos de la pila a una nueva pila manteniendo el orden de salida
  moverElementos() {
    const nuevaPila = new Pila(); // Crea una nueva pila
    while (this.tope) {
      const elemento = this.pop(); // Extrae el elemento del tope de la pila actual
      nuevaPila.push(elemento); // Inserta el elemento en la nueva pila
    }
    return nuevaPila; // Retorna la nueva pila con los elementos movidos
  }
}

function PilaTwo() {
  const [pila, setPila] = useState([4, 3, 2, 1]); // Estado para la primera pila
  const [pila2, setPila2] = useState([]); // Estado para la segunda pila

  const popElemento = () => {
    if (pila.length === 0) return; // No hay elementos para sacar

    const primerElemento = pila[0]; // Obtener el primer elemento de la pila
    const nuevaPila = pila.slice(1); // Quitar el primer elemento de la pila original
    setPila(nuevaPila);

    // Agregar el primer elemento a la segunda pila
    // Usamos unshift() para que el último elemento de la primera pila se convierta en el primer elemento de la segunda pila
    setPila2([primerElemento, ...pila2]);
  };

  function pushElemento() {
    const valor = document.getElementById("input2").value;

    setPila([valor, ...pila]); // Agrega un elemento a la primera pila

    document.getElementById("input2").value = ""; // Limpia el campo de entrada
  }
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

export default PilaTwo;
