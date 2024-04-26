import React, { useState } from "react";
import UiNodo from "./uiNodo";
import UiPuntero from "./uiPuntero";

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

// Función para unir dos listas enlazadas ordenadas
function unirListasOrdenadas(lista1, lista2) {
  const nuevaLista = new ListaEnlazada();
  let nodo1 = lista1.primerNodo;
  let nodo2 = lista2.primerNodo;

  while (nodo1 && nodo2) {
    if (nodo1.valor < nodo2.valor) {
      nuevaLista.agregar(nodo1.valor);
      nodo1 = nodo1.siguiente;
    } else {
      nuevaLista.agregar(nodo2.valor);
      nodo2 = nodo2.siguiente;
    }
  }

  // Agregar los nodos restantes de lista1
  while (nodo1) {
    nuevaLista.agregar(nodo1.valor);
    nodo1 = nodo1.siguiente;
  }

  // Agregar los nodos restantes de lista2
  while (nodo2) {
    nuevaLista.agregar(nodo2.valor);
    nodo2 = nodo2.siguiente;
  }

  return nuevaLista;
}

// Componente ListaUnida
const ListaOne = () => {
  // Valores iniciales de las listas
  const valoresLista1 = [1, 3, 5];
  const valoresLista2 = [2, 4, 6];

  // Crear listas enlazadas con los valores iniciales
  const lista1Inicial = new ListaEnlazada();
  const lista2Inicial = new ListaEnlazada();

  valoresLista1.forEach((valor) => lista1Inicial.agregar(valor));
  valoresLista2.forEach((valor) => lista2Inicial.agregar(valor));

  const [lista1] = useState(lista1Inicial);
  const [lista2] = useState(lista2Inicial);
  const [resultado, setResultado] = useState(null);

  const handleUnion = () => {
    const nuevaLista = unirListasOrdenadas(lista1, lista2);
    setResultado(nuevaLista);
  };

  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="">
          Implementar una función que tenga como parámetros dos listas de
          enteros ordenados de menor a mayor y que devuelva una nueva lista como
          unión de ambas con sus elementos ordenados de la misma forma.
        </h1>

        <button
          onClick={handleUnion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md my-2"
        >
          Unir Listas
        </button>
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h2>Lista 1:</h2>
        <div className="flex flex-wrap gap-2">
          {lista1.obtenerValores().map((valor, index) => (
            <div key={index} className="flex items-center">
              <UiNodo valor={valor} />
              {index < lista1.obtenerValores().length - 1 && <UiPuntero />}
              {index === lista1.obtenerValores().length - 1 && (
                <div className="flex items-center">
                  <UiPuntero />
                  <span className="text-sm text-gray-600">null</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2>Lista 2:</h2>
        <div className="flex flex-wrap gap-2">
          {lista2.obtenerValores().map((valor, index) => (
            <div key={index} className="flex items-center">
              <UiNodo valor={valor} />
              {index < lista2.obtenerValores().length - 1 && <UiPuntero />}
              {index === lista2.obtenerValores().length - 1 && (
                <div className="flex items-center">
                  <UiPuntero />
                  <span className="text-sm text-gray-600">null</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <h2>Union de ambas Listas</h2>
        <div className="flex flex-wrap gap-2">
          {resultado && (
            <div>
              <h2>Lista Resultante:</h2>
              <div className="flex flex-wrap gap-2">
                {resultado.obtenerValores().map((valor, index) => (
                  <div key={index} className="flex items-center">
                    <UiNodo valor={valor} />
                    {index < resultado.obtenerValores().length - 1 && (
                      <UiPuntero />
                    )}
                    {index === resultado.obtenerValores().length - 1 && (
                      <div className="flex items-center">
                        <UiPuntero />
                        <span className="text-sm text-gray-600">null</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
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
// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor; // Valor del nodo
    this.siguiente = null; // Puntero al siguiente nodo
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
  constructor() {
    this.primerNodo = null; // Puntero al primer nodo de la lista
  }

  // Método para agregar un valor a la lista
  agregar(valor) {
    const nuevoNodo = new Nodo(valor); // Crear un nuevo nodo con el valor proporcionado
    if (!this.primerNodo) {
      this.primerNodo = nuevoNodo; // Si la lista está vacía, el nuevo nodo se convierte en el primer nodo
    } else {
      let nodoActual = this.primerNodo;
      while (nodoActual.siguiente) {
        nodoActual = nodoActual.siguiente; // Recorrer la lista hasta encontrar el último nodo
      }
      nodoActual.siguiente = nuevoNodo; // Establecer el siguiente nodo del último nodo como el nuevo nodo
    }
  }

  // Método para obtener los valores de la lista
  obtenerValores() {
    const valores = [];
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      valores.push(nodoActual.valor); // Agregar el valor del nodo actual al array de valores
      nodoActual = nodoActual.siguiente; // Mover al siguiente nodo
    }
    return valores; // Devolver los valores de la lista
  }
}

// Función para unir dos listas enlazadas ordenadas
function unirListasOrdenadas(lista1, lista2) {
  const nuevaLista = new ListaEnlazada(); // Crear una nueva lista enlazada
  let nodo1 = lista1.primerNodo; // Iniciar desde el primer nodo de la primera lista
  let nodo2 = lista2.primerNodo; // Iniciar desde el primer nodo de la segunda lista

  while (nodo1 && nodo2) {
    if (nodo1.valor < nodo2.valor) {
      nuevaLista.agregar(nodo1.valor); // Agregar el valor del nodo1 a la nueva lista
      nodo1 = nodo1.siguiente; // Mover al siguiente nodo en la primera lista
    } else {
      nuevaLista.agregar(nodo2.valor); // Agregar el valor del nodo2 a la nueva lista
      nodo2 = nodo2.siguiente; // Mover al siguiente nodo en la segunda lista
    }
  }

  // Agregar los nodos restantes de la primera lista
  while (nodo1) {
    nuevaLista.agregar(nodo1.valor);
    nodo1 = nodo1.siguiente;
  }

  // Agregar los nodos restantes de la segunda lista
  while (nodo2) {
    nuevaLista.agregar(nodo2.valor);
    nodo2 = nodo2.siguiente;
  }

  return nuevaLista; // Devolver la nueva lista unida y ordenada
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

export default ListaOne;
