import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Importamos el estilo Dracula


// Definir la clase Cola
class Cola {
  constructor() {
    this.elementos = [];
  }

  // Añadir un elemento al final de la cola
  encolar(elemento) {
    this.elementos.push(elemento);
  }

  // Eliminar y devolver el primer elemento de la cola
  desencolar() {
    if (this.estaVacia()) {
      return "La cola está vacía";
    }
    return this.elementos.shift();
  }

  // Verificar si la cola está vacía
  estaVacia() {
    return this.elementos.length === 0;
  }
}

// Definir la clase Pila
class Pila {
  constructor() {
    this.elementos = [];
  }

  // Añadir un elemento al final de la pila
  apilar(elemento) {
    this.elementos.push(elemento);
  }

  // Eliminar y devolver el último elemento de la pila
  desapilar() {
    if (this.estaVacia()) {
      return "La pila está vacía";
    }
    return this.elementos.pop();
  }

  // Verificar si la pila está vacía
  estaVacia() {
    return this.elementos.length === 0;
  }
}

function ColasTwo() {
  const [cola, setCola] = useState(new Cola());
  const [pila, setPila] = useState(new Pila());
  const [nuevoElemento, setNuevoElemento] = useState("");

  const agregarACola = () => {
    if (nuevoElemento !== "") {
      cola.encolar(nuevoElemento);
      setNuevoElemento("");
    }
  };

  const pasarAPila = () => {
    // Si la cola está vacía, no hay nada que pasar a la pila
    if (cola.estaVacia()) {
      return;
    }

    // Crear una nueva pila temporal para mantener los datos existentes en la pila
    const nuevaPilaTemporal = new Pila();

    // Transferir los elementos existentes en la pila a la pila temporal
    while (!pila.estaVacia()) {
      nuevaPilaTemporal.apilar(pila.desapilar());
    }

    // Extraer y apilar el primer elemento de la cola a la pila temporal
    const primerElemento = cola.desencolar();
    nuevaPilaTemporal.apilar(primerElemento);

    // Transferir los elementos de la pila temporal de regreso a la pila
    const nuevaPila = new Pila();
    while (!nuevaPilaTemporal.estaVacia()) {
      nuevaPila.apilar(nuevaPilaTemporal.desapilar());
    }

    // Actualizar el estado de la pila y la cola
    setPila(nuevaPila);
  };

  return (
    <div className="grid md:grid-cols-2 gap-2  bg-white rounded-md ">
      <section className="border grid gap-4 border-zinc-200 rounded-md shadow-md p-4">
        <h1 className=" ">
          2.- Escriba una rutina que reciba una Cola C de números enteros y
          mueva sus elementos a una nueva Pila, pero invirtiendo el orden de
          salida de los elementos. Al finalizar la Cola C no debe contener
          elementos.
        </h1>

        {/* Input y botón para agregar a la cola */}
        <div className="mt-4 flex gap-4">
          <input
            type="text"
            value={nuevoElemento}
            placeholder="Ingrese un elemento a la cola"
            onChange={(e) => setNuevoElemento(e.target.value)}
            className="border border-gray-400 px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
          />
          <button
            onClick={agregarACola}
            className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
          >
            Agregar a Cola
          </button>
        </div>
        <h1>Esto es la cola</h1>

        {/* Interfaz de Cola */}
        <div className="border-t-4 border-b-4 border-blue-500 min-h-12 min-w-12 w-fit flex flex-wrap gap-4 p-1">
          {cola.elementos
            .slice()
            .reverse()
            .map((item, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
              >
                {item}
              </button>
            ))}
        </div>

        {/* Botón para pasar uno por uno de la cola a la pila */}
        <button
          onClick={pasarAPila}
          className="mt-4 bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
        >
          Pasar a Pila
        </button>
      </section>
      <section className="border flex flex-col items-center border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="text-xl">PILA CON DATOS DE SALIDA INVERTIDO </h1>
        {/* Interfaz de Pila */}
        <div className="border-l-4 border-b-4 border-r-4 min-h-80 border-blue-500 w-24 p-1 flex flex-col gap-2 ">
          {pila.elementos.map((item, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
            >
              {item}
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
// Definir la clase Cola
class Cola {
  constructor() { // Constructor de la clase Cola
    this.elementos = []; // Inicializa un array para almacenar los elementos de la cola
  }

  // Método para añadir un elemento al final de la cola
  encolar(elemento) {
    this.elementos.push(elemento); // Agrega el elemento al final del array
  }

  // Método para eliminar y devolver el primer elemento de la cola
  desencolar() {
    if (this.estaVacia()) { // Verifica si la cola está vacía
      return "La cola está vacía"; // Retorna un mensaje si la cola está vacía
    }
    return this.elementos.shift(); // Elimina y devuelve el primer elemento del array
  }

  // Método para verificar si la cola está vacía
  estaVacia() {
    return this.elementos.length === 0; // Retorna true si el array de elementos está vacío, de lo contrario, retorna false
  }
}

// Definir la clase Pila
class Pila {
  constructor() { // Constructor de la clase Pila
    this.elementos = []; // Inicializa un array para almacenar los elementos de la pila
  }

  // Método para añadir un elemento al final de la pila
  apilar(elemento) {
    this.elementos.push(elemento); // Agrega el elemento al final del array
  }

  // Método para eliminar y devolver el último elemento de la pila
  desapilar() {
    if (this.estaVacia()) { // Verifica si la pila está vacía
      return "La pila está vacía"; // Retorna un mensaje si la pila está vacía
    }
    return this.elementos.pop(); // Elimina y devuelve el último elemento del array
  }

  // Método para verificar si la pila está vacía
  estaVacia() {
    return this.elementos.length === 0; // Retorna true si el array de elementos está vacío, de lo contrario, retorna false
  }
}

function ColasTwo() {
  const [cola, setCola] = useState(new Cola()); // Estado para la cola, inicializado como una nueva instancia de la clase Cola
  const [pila, setPila] = useState(new Pila()); // Estado para la pila, inicializado como una nueva instancia de la clase Pila
  const [nuevoElemento, setNuevoElemento] = useState(""); // Estado para el nuevo elemento a agregar a la cola

  // Función para agregar un elemento a la cola
  const agregarACola = () => {
    if (nuevoElemento !== "") { // Verifica si el nuevo elemento no está vacío
      cola.encolar(nuevoElemento); // Añade el nuevo elemento a la cola
      setNuevoElemento(""); // Reinicia el estado del nuevo elemento
    }
  };

  // Función para pasar elementos de la cola a la pila
  const pasarAPila = () => {
    // Si la cola está vacía, no hay nada que pasar a la pila
    if (cola.estaVacia()) {
      return;
    }

    // Crear una nueva pila temporal para mantener los datos existentes en la pila
    const nuevaPilaTemporal = new Pila();

    // Transferir los elementos existentes en la pila a la pila temporal
    while (!pila.estaVacia()) {
      nuevaPilaTemporal.apilar(pila.desapilar());
    }

    // Extraer y apilar el primer elemento de la cola a la pila temporal
    const primerElemento = cola.desencolar();
    nuevaPilaTemporal.apilar(primerElemento);

    // Transferir los elementos de la pila temporal de regreso a la pila
    const nuevaPila = new Pila();
    while (!nuevaPilaTemporal.estaVacia()) {
      nuevaPila.apilar(nuevaPilaTemporal.desapilar());
    }

    // Actualizar el estado de la pila y la cola
    setPila(nuevaPila);
  };
}
    
              `}
              </SyntaxHighlighter>
            </code>
          </pre>
        </details>
      </section>
    </div>
  );
}

export default ColasTwo;
