import React, { useState } from "react";
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
const ListaTwo = () => {
  // Valores iniciales de las listas
  const valoresLista1 = [1, 3, 5,6];
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
    <div>
      <h1>Unión de Listas Enlazadas Ordenadas</h1>
      <div>
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
      </div>
      <div>
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
      </div>
      <button onClick={handleUnion} className="bg-blue-500 text-white px-4 py-2 rounded-md my-2">Unir Listas</button>
      {resultado && (
        <div>
          <h2>Lista Resultante:</h2>
          <div className="flex flex-wrap gap-2">
            {resultado.obtenerValores().map((valor, index) => (
              <div key={index} className="flex items-center">
                <UiNodo valor={valor} />
                {index < resultado.obtenerValores().length - 1 && <UiPuntero />}
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
  );
};

export default ListaTwo;
