import { useEffect, useState } from "react";
import "./App.css";

import Card from "./componentes/Card";
import Navegacion from "./componentes/Navegacion";
Navegacion;
Card;

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setFiltered(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  const filtrarD = (text) => {
    const dataFiltered = data.filter(
      (element) => element.maxGuests >= parseInt(text)
    );

    return dataFiltered;
  };

  const manejador = (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    const resultfiltrado = filtrarD(text);
    setFiltered(resultfiltrado);
  };

  return (
    <>
      <div className="contenedor">
        <Navegacion fn={manejador}></Navegacion>
      </div>

      <main>
        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
        {filtered.map((el, i) => {
          return (
            <>
              <div key={i} className="tarjeta">
                <Card
                  link={el.photo}
                  title={el.title}
                  type={el.type}
                  camas={el.beds}
                  super={el.superHost}
                  rti={el.rating}
                ></Card>
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
