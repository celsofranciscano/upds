import ColasOne from "./colas/colasOne";
import ListaOne from "./components/listaOne";
import ListaThree from "./components/listaThree";
import ListaTwo from "./components/listaTwo";
import Menu from "./components/menu";
import PilaOne from "./pila/pilaOne";
import ListaAdd from "./components/listaAdd";
import PilaTwo from "./pila/pilaTwo";
import PilaThree from "./pila/pilaThree";
import ColasTwo from "./colas/colasTwo";
import ColasThree from "./colas/colasThree";

function App() {
  return (
    <div>
      <Menu />
      <div className="grid gap-8 px-4 md:px-12 pt-20 ">
        {/* <header className="font-bold">Listas enlazadas</header> */}

        {/* <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Listas enlazadas
          </summary>
          <ListaAdd />
        </details> */}
        <details open className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Listas enlazadas
          </summary>
          <ListaOne />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Listas enlazadas
          </summary>

          <ListaTwo />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Listas enlazadas
          </summary>
          <ListaThree />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Pilas
          </summary>

          <PilaOne />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Pilas
          </summary>

          <PilaTwo />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Pilas
          </summary>

          <PilaThree />
        </details>
        <details open  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Colas
          </summary>

          <ColasOne />
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Colas
          </summary>

          <ColasTwo/>
        </details>
        <details  className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Colas
          </summary>

          <ColasThree />
        </details>
      </div>
    </div>
  );
}

export default App;
