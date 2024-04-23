import ListaOne from "./components/listaOne";
import Menu from "./components/menu";

function App() {
  return (
    <div>
      <Menu />
      <div className="grid gap-8 px-4 md:px-12 pt-20 ">
        <header className="font-bold">Listas enlazadas</header>
        <details className="rounded-md bg-blue-200 pb-4 px-4">
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Listas enlazadas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Listas enlazadas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Listas enlazadas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Pilas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Pilas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Pilas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 1 Colas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 2 Colas
          </summary>

          <ListaOne />
        </details>
        <details>
          <summary className="text-lg font-bold mt-4">
            Ejercicio Nº 3 Colas
          </summary>

          <ListaOne />
        </details>
      </div>
    </div>
  );
}

export default App;
