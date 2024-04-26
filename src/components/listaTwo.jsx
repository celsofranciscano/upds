import React, { useState, useEffect } from "react";
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

  // Método recursivo para buscar un elemento en la lista
  buscarElementoRecursivo(nodo, x) {
    if (!nodo) {
      return null; // Caso base: si el nodo es nulo, no se encontró el elemento
    } else if (nodo.valor === x) {
      return nodo; // Caso base: si el valor del nodo actual es igual a x, se encontró el elemento
    } else {
      return this.buscarElementoRecursivo(nodo.siguiente, x); // Llamada recursiva con el siguiente nodo
    }
  }

  buscarElemento(x) {
    return this.buscarElementoRecursivo(this.primerNodo, x);
  }
}

// Componente ListaBusqueda
const ListaTwo = () => {
  const [lista, setLista] = useState(new ListaEnlazada());
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [resultado, setResultado] = useState(null);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false); // Estado para verificar si se ha realizado una búsqueda

  useEffect(() => {
    // Agregar valores a la lista enlazada del 1 al 10
    const nuevaLista = new ListaEnlazada();
    for (let i = 1; i <= 10; i++) {
      nuevaLista.agregar(i);
    }
    setLista(nuevaLista);
  }, []);

  const handleChangeValorBusqueda = (event) => {
    setValorBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valor = parseInt(valorBusqueda, 10);
    const nodoEncontrado = lista.buscarElemento(valor);
    setResultado(nodoEncontrado);
    setBusquedaRealizada(true); // Marcar que se ha realizado una búsqueda
  };

  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <h1 className=" ">
          {" "}
          Escriba un método recursivo que realice la búsqueda de un elemento (x)
          en una lista simplemente enlazada (q). el método debe devolver un
          apuntador al nodo que contiene el elemento (x) o NULL si no lo
          encuentra.
        </h1>
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            className="border  border-gray-300 rounded-md py-1  focus:outline-none focus:ring-2 focus:ring-blue-200"
            type="number"
            value={valorBusqueda}
            onChange={handleChangeValorBusqueda}
            placeholder="Ingrese el elemento a buscar"
          />
          <button
            className="bg-blue-500 rounded-md px-4 text-white py-2"
            type="submit"
          >
            Buscar
          </button>
        </form>

        <p>Mensaje de la busqueda:</p>

        {resultado && (
          <div className="flex gap-8 items-center">
            <p className="text-white bg-blue-500 rounded-md px-4 w-fit">
              Elemento encontrado:
            </p>
            <div className="flex">
              <UiNodo valor={resultado.valor} />
              <UiPuntero />
            </div>
          </div>
        )}
        {busquedaRealizada && resultado === null && (
          <p className="text-white bg-red-500 rounded-md px-4 w-fit">
            Elemento no encontrado
          </p>
        )}
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1>Lista Enlazada ordenada de 1-10 </h1>
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
// Definición de la clase Nodo
class Nodo {
  constructor(valor) {
    this.valor = valor; // Asigna el valor proporcionado al nodo
    this.siguiente = null; // Inicializa el puntero al siguiente nodo como nulo
  }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
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

  // Método para buscar un elemento en la lista de forma recursiva
  buscarElementoRecursivo(nodo, x) {
    if (!nodo) {
      return null; // Caso base: si el nodo es nulo, no se encontró el elemento
    } else if (nodo.valor === x) {
      return nodo; // Caso base: si el valor del nodo actual es igual a x, se encontró el elemento
    } else {
      return this.buscarElementoRecursivo(nodo.siguiente, x); // Llamada recursiva con el siguiente nodo
    }
  }

  // Método público para buscar un elemento en la lista
  buscarElemento(x) {
    return this.buscarElementoRecursivo(this.primerNodo, x); // Inicia la búsqueda desde el primer nodo
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

export default ListaTwo;
