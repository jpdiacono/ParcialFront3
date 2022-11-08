import React, { useState } from 'react'
import Estatus from "./components/Estatus"
import Posteos from "./components/Posteos"

// El componente App es el padre de: ok
// - Estatus ok
// - Posteos ok
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [count, setCount] = useState(0)

  const aumentar = () => {
    setCount (count + 1)
  }

  return (
    <div className="App">
      <Estatus count={count}/>
      <Posteos aumentar={aumentar}/>
    </div>
  );
}

export default App;
