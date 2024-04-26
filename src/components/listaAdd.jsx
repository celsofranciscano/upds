import React, { useState } from "react";
import UiPuntero from "./uiPuntero";
import UiNodo from "./uiNodo";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula

// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Puntero al siguiente nodo
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
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
}

const ListaAdd = () => {
  const [lista, setLista] = useState(new ListaEnlazada());
  const [nuevoValor, setNuevoValor] = useState("");

  const handleChange = (event) => {
    setNuevoValor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    lista.agregar(parseInt(nuevoValor, 10));
    setLista(lista);
    setNuevoValor("");
  };

  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl ">Operacion</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            className="bg-white focus:ring-indigo-500 rounded-md px-4 py-2 focus:outline-none"
            type="number"
            placeholder="Ingrese un nuevo dato para un nodo"
            value={nuevoValor}
            onChange={handleChange}
          />
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-2"
            type="submit"
          >
            Agregar
          </button>
        </form>
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl">Lista Enlazada </h1>

        <div className="flex flex-wrap gap-2">
          {lista.obtenerValores().map((valor, index) => (
            <div key={index} className="flex items-center">
              <UiNodo valor={valor} />
              {index < lista.obtenerValores().length - 1 && <UiPuntero />}
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
      <section className="md:col-span-2 bg-gray-800 border px-4 pb-4 text-white border-zinc-200 rounded-md shadow-md">
        <details>
          <summary className="text-lg font-bold mt-4">
            Ver el codigo fuente en JavaScript
          </summary>
          <pre>
            <code>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {`

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Puntero al siguiente nodo
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
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
}
            
            
            `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </details>
      </section>
    </div>
  );
};

export default ListaAdd;
