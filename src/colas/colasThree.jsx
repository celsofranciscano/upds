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

function ColasThree() {
  const [colaOne, setColaOne] = useState(new Cola());
  const [colaTwo, setColaTwo] = useState(new Cola());

  // Inicializar las colas con algunos elementos
  useState(() => {
    const colaInicialOne = new Cola();
    colaInicialOne.encolar(4);
    colaInicialOne.encolar(3);
    colaInicialOne.encolar(2);
    colaInicialOne.encolar(1);
    setColaOne(colaInicialOne);

    const colaInicialTwo = new Cola();
    colaInicialTwo.encolar(8);
    colaInicialTwo.encolar(7);
    colaInicialTwo.encolar(6);
    colaInicialTwo.encolar(5);
    setColaTwo(colaInicialTwo);
  }, []);

  // Función para intercambiar los elementos de las colas
  const intercambiarColas = () => {
    // Crear colas temporales para intercambiar elementos
    const colaTemporalOne = new Cola();
    const colaTemporalTwo = new Cola();

    // Transferir elementos de colaOne a colaTemporalTwo
    while (!colaOne.estaVacia()) {
      colaTemporalTwo.encolar(colaOne.desencolar());
    }

    // Transferir elementos de colaTwo a colaTemporalOne
    while (!colaTwo.estaVacia()) {
      colaTemporalOne.encolar(colaTwo.desencolar());
    }

    // Actualizar el estado con las colas temporales intercambiadas
    setColaOne(colaTemporalOne);
    setColaTwo(colaTemporalTwo);
  };

  return (
    <div className="grid md:grid-cols-2 gap-2 bg-white rounded-md">
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <h1 className="">
        3.- Escriba una rutina que reciba dos Colas C1 y C2 de números enteros y proceda a intercambiar sus elementos, pero manteniendo el orden de salida de los mismos. Al finalizar la rutina, la Cola C1 tendrá los elementos de la Cola C2 y esta a su vez tendrá los elementos de la Cola C1.
        </h1>
        <button
          onClick={intercambiarColas}
          className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md mt-4"
        >
          Intercambiar Colas en el mismo orden
        </button>
      </section>
      <section className="border border-zinc-200 rounded-md shadow-md p-4">
        <div>
          <h2>Cola 1:</h2>
          <div className="border-t-4 border-b-4 border-blue-500 min-h-12 min-w-12 w-fit flex flex-wrap gap-4 p-1">
            {colaOne.elementos.map((item, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h2>Cola 2:</h2>
          <div className="border-t-4 border-b-4 border-blue-500 min-h-12 min-w-12 w-fit flex flex-wrap gap-4 p-1">
            {colaTwo.elementos.map((item, index) => (
              <button
                key={index}
                className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
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
  
  function ColasThree() {
    const [colaOne, setColaOne] = useState(new Cola()); // Estado para la primera cola, inicializada como una nueva instancia de la clase Cola
    const [colaTwo, setColaTwo] = useState(new Cola()); // Estado para la segunda cola, inicializada como una nueva instancia de la clase Cola
  
    // Inicializar las colas con algunos elementos
    useState(() => {
      const colaInicialOne = new Cola(); // Crea una nueva instancia de la clase Cola para la primera cola
      colaInicialOne.encolar(4); // Añade elementos a la cola inicial
      colaInicialOne.encolar(3);
      colaInicialOne.encolar(2);
      colaInicialOne.encolar(1);
      setColaOne(colaInicialOne); // Actualiza el estado de la primera cola con la cola inicializada
  
      const colaInicialTwo = new Cola(); // Crea una nueva instancia de la clase Cola para la segunda cola
      colaInicialTwo.encolar(8); // Añade elementos a la cola inicial
      colaInicialTwo.encolar(7);
      colaInicialTwo.encolar(6);
      colaInicialTwo.encolar(5);
      setColaTwo(colaInicialTwo); // Actualiza el estado de la segunda cola con la cola inicializada
    }, []); // El efecto se ejecuta solo una vez al montar el componente, ya que el array de dependencias está vacío
  
    // Función para intercambiar los elementos de las colas
    const intercambiarColas = () => {
      // Crear colas temporales para intercambiar elementos
      const colaTemporalOne = new Cola(); // Crea una nueva instancia de la clase Cola para la cola temporal de la primera cola
      const colaTemporalTwo = new Cola(); // Crea una nueva instancia de la clase Cola para la cola temporal de la segunda cola
  
      // Transferir elementos de colaOne a colaTemporalTwo
      while (!colaOne.estaVacia()) {
        colaTemporalTwo.encolar(colaOne.desencolar()); // Desencola elementos de la primera cola y los encola en la cola temporal de la segunda cola
      }
  
      // Transferir elementos de colaTwo a colaTemporalOne
      while (!colaTwo.estaVacia()) {
        colaTemporalOne.encolar(colaTwo.desencolar()); // Desencola elementos de la segunda cola y los encola en la cola temporal de la primera cola
      }
  
      // Actualizar el estado con las colas temporales intercambiadas
      setColaOne(colaTemporalOne); // Actualiza el estado de la primera cola con la cola temporal de la primera cola
      setColaTwo(colaTemporalTwo); // Actualiza el estado de la segunda cola con la cola temporal de la segunda cola
    };
  }
    
              `}
                  </SyntaxHighlighter>
                </code>
              </pre>
    
          </details>
        </section>    </div>
  );
}

export default ColasThree;
