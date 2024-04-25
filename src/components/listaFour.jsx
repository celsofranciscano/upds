import React, { useState } from "react";
import UiNodo from "./uiNodo";
import UiPuntero from "./uiPuntero";

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
const ListaFour = () => {
  const [lista, setLista] = useState(() => {
    const nuevaLista = new ListaDobleEnlazada();
    nuevaLista.agregar(5);
    nuevaLista.agregar(3);
    nuevaLista.agregar(8);
    nuevaLista.agregar(1);
    nuevaLista.agregar(10);
    return nuevaLista;
  });

  const handleOrdenarLista = () => {
    const listaOrdenada = new ListaDobleEnlazada();
    listaOrdenada.primerNodo = lista.primerNodo;
    listaOrdenada.ordenarLista();
    setLista(listaOrdenada);
  };

  return (
    <div>
      <h1>Ordenar Lista Doblemente Enlazada</h1>
      <div>
        <h2>Lista Original:</h2>
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
      </div>
      <button onClick={handleOrdenarLista}>Ordenar Lista</button>
      <div>
        <h2>Lista Ordenada:</h2>
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
      </div>
    </div>
  );
};

export default ListaFour;
