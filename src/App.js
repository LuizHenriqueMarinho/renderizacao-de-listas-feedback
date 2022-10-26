import { ListaTarefas } from "./components/ListaTarefas";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";


function App() {
 
  const funcaoListaFeita = (listaFeita) => {
    //listaFeita === true;
  }

  return (
    <div>
      <GlobalStyle />
     <ListaTarefas/>
     {/* {funcaoListaFeita} */}

    </div>
  );
}

export default App;
