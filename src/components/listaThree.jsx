import React, { useState } from "react";
import UiNodo from "./uiNodo";
import UiPuntero from "./uiPuntero";
import UiPunteroReverse from "./uiPunteroReverse";
import UiNodoReverse from "./uiNodoReverse";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.anterior = null; // Puntero al nodo anterior
    this.siguiente = null; // Puntero al siguiente nodo
  }
}

// Definición de la clase ListaDobleEnlazada
class ListaDobleEnlazada {
  constructor() {
    this.primerNodo = null; // Puntero al primer nodo de la lista
  }

  agregar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.primerNodo) {
      this.primerNodo = nuevoNodo;
    } else {
      let nodoActual = this.primerNodo;
      while (nodoActual.siguiente) {
        nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = nuevoNodo;
      nuevoNodo.anterior = nodoActual;
    }
  }

  obtenerValores() {
    const valores = [];
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      valores.push(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }
    return valores;
  }

  // Método para ordenar la lista doblemente enlazada
  ordenarLista() {
    let nodoActual = this.primerNodo;
    let temp = null;

    while (nodoActual != null) {
      let siguienteNodo = nodoActual.siguiente;
      while (siguienteNodo != null) {
        if (nodoActual.valor > siguienteNodo.valor) {
          temp = nodoActual.valor;
          nodoActual.valor = siguienteNodo.valor;
          siguienteNodo.valor = temp;
        }
        siguienteNodo = siguienteNodo.siguiente;
      }
      nodoActual = nodoActual.siguiente;
    }
  }
}

// Componente ListaOrdenada
const ListaThree = () => {
  const [ismessage, setMessage] = useState("Lista desordenada");
  const [isred, setRed] = useState("bg-red-500");
  const [lista, setLista] = useState(() => {
    const nuevaLista = new ListaDobleEnlazada();
    nuevaLista.agregar(5);
    nuevaLista.agregar(3);
    nuevaLista.agregar(8);
    nuevaLista.agregar(1);
    nuevaLista.agregar(9);

    return nuevaLista;
  });

  const handleOrdenarLista = () => {
    const listaOrdenada = new ListaDobleEnlazada();
    listaOrdenada.primerNodo = lista.primerNodo;
    listaOrdenada.ordenarLista();
    setLista(listaOrdenada);
    setMessage("Lista ordenada");
    setRed("bg-blue-500");
  };

  return (
    <div className="grid md:grid-cols-3 gap-2  bg-white rounded-md ">
      <section className=" border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <h1 className=" ">
          Escriba un método que reciba el apuntador al primer nodo de una lista
          doblemente enlazada y devuelva la lista ordenada.
        </h1>
        <button
          className="bg-blue-500 text-white px-4 py-2  rounded-md"
          onClick={handleOrdenarLista}
        >
          Ordenar Lista
        </button>
      </section>
      <section className=" grid gap-4 md:col-span-2 border border-zinc-200 rounded-md shadow-md p-4">
        <h1
          className={`${isred} w-fit rounded-md text-white px-4 h-8 font-bold`}
        >
          {ismessage}{" "}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">null</span>
          <span className=" font-bold text-gray-600">
            <svg
              className=" h-6 text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </span>

          {lista.obtenerValores().map((valor, index) => (
            <div key={index} className="flex items-center">
              <UiNodoReverse valor={valor} />
              {index < lista.obtenerValores().length - 1 && (
                <UiPunteroReverse />
              )}
              {index === lista.obtenerValores().length - 1 && (
                <div className="flex items-center">
                  <UiPuntero />
                  <span className="text-sm text-gray-600">null</span>
                </div>
              )}
            </div>
          ))}
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
    this.valor = valor; // Asigna el valor proporcionado al nodo
    this.anterior = null; // Inicializa el puntero al nodo anterior como nulo
    this.siguiente = null; // Inicializa el puntero al siguiente nodo como nulo
  }
}

// Definición de la clase ListaDobleEnlazada
class ListaDobleEnlazada {
  constructor() {
    this.primerNodo = null; // Inicializa el puntero al primer nodo de la lista como nulo
  }

  // Método para agregar un nuevo nodo a la lista
  agregar(valor) {
    const nuevoNodo = new Nodo(valor); // Crea un nuevo nodo con el valor proporcionado
    if (!this.primerNodo) {
      this.primerNodo = nuevoNodo; // Si la lista está vacía, el nuevo nodo se convierte en el primer nodo
    } else {
      let nodoActual = this.primerNodo;
      while (nodoActual.siguiente) {
        nodoActual = nodoActual.siguiente; // Recorre la lista hasta encontrar el último nodo
      }
      nodoActual.siguiente = nuevoNodo; // Establece el siguiente nodo del último nodo como el nuevo nodo
      nuevoNodo.anterior = nodoActual; // Establece el nodo actual como el nodo anterior del nuevo nodo
    }
  }

  // Método para obtener los valores de la lista en un array
  obtenerValores() {
    const valores = [];
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      valores.push(nodoActual.valor); // Agrega el valor del nodo actual al array de valores
      nodoActual = nodoActual.siguiente; // Mueve al siguiente nodo
    }
    return valores; // Devuelve los valores de la lista
  }

  // Método para ordenar la lista doblemente enlazada
  ordenarLista() {
    let nodoActual = this.primerNodo;
    let temp = null;

    while (nodoActual != null) {
      let siguienteNodo = nodoActual.siguiente;
      while (siguienteNodo != null) {
        if (nodoActual.valor > siguienteNodo.valor) {
          temp = nodoActual.valor;
          nodoActual.valor = siguienteNodo.valor; // Intercambia los valores de los nodos
          siguienteNodo.valor = temp;
        }
        siguienteNodo = siguienteNodo.siguiente; // Avanza al siguiente nodo
      }
      nodoActual = nodoActual.siguiente; // Avanza al siguiente nodo en la lista
    }
  }
}

// Componente ListaOrdenada
const ListaThree = () => {
  const [ismessage, setMessage] = useState("Lista desordenada"); // Estado para el mensaje de estado de la lista
  const [isred, setRed] = useState("bg-red-500"); // Estado para el color de fondo del mensaje
  const [lista, setLista] = useState(() => { // Estado para la lista doblemente enlazada
    const nuevaLista = new ListaDobleEnlazada();
    nuevaLista.agregar(5);
    nuevaLista.agregar(3);
    nuevaLista.agregar(8);
    nuevaLista.agregar(1);
    nuevaLista.agregar(9);

    return nuevaLista;
  });

  // Función para ordenar la lista
  const handleOrdenarLista = () => {
    const listaOrdenada = new ListaDobleEnlazada();
    listaOrdenada.primerNodo = lista.primerNodo;
    listaOrdenada.ordenarLista(); // Ordena la lista
    setLista(listaOrdenada); // Actualiza el estado de la lista
    setMessage("Lista ordenada"); // Actualiza el mensaje de estado
    setRed("bg-blue-500"); // Cambia el color de fondo del mensaje
  };

              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </details>
      </section>
    </div>
  );
};

export default ListaThree;
