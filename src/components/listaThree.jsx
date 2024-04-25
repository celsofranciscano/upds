import React, { useState, useEffect } from "react";
import UiNodo from "./uiNodo";
import UiPuntero from "./uiPuntero";

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
const ListaThree = () => {
  const [lista, setLista] = useState(new ListaEnlazada());
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [resultado, setResultado] = useState(null);

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
  };

  return (
    <div>
      <h1>Búsqueda de Elemento en Lista Enlazada (Recursiva)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={valorBusqueda}
          onChange={handleChangeValorBusqueda}
          placeholder="Ingrese el elemento a buscar"
        />
        <button type="submit">Buscar</button>
      </form>
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
      {resultado && (
        <div>
          <h2>Resultado:</h2>
          <p>Elemento encontrado: {resultado.valor}</p>
        </div>
      )}
      {!resultado && resultado !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>Elemento no encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ListaThree;
