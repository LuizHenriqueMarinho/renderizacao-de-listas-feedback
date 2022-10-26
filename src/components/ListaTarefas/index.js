import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./ListaFeita/styled";
import bin from "../../assets/bin.png";
import { ListaFeita } from "./ListaFeita/ListaFeita";


  export function ListaTarefas() {
    
    const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
    const [novaTarefa, setNovaTarefa] = useState("");
    const [listaFeita, setListaFeita] = useState([]);
  
    const onChangeTarefa = (event) => {
      setNovaTarefa(event.target.value);
    };
  
    const adicionaTarefa = () => {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    };
    const removeTarefa = (tarefa) => {
      const itemFeito = lista.filter((item) => item === tarefa);
      const listaFiltrada = lista.filter((item) => item !== tarefa);
      setLista(listaFiltrada);
      setListaFeita([...listaFeita, itemFeito])
      console.log(listaFeita)
      //return funcaoListaFeita
    };

    
    function digitou(e) 
    {
      if (e.keyCode == 13) {
        // AO PRESSIONAR A TECLA "ENTER"
        return adicionaTarefa() //Atençaõ! A sintaxe deve ser essa
      }
    }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={digitou}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaFeita
     listaFeita={listaFeita}
     setListaFeita={setListaFeita}
     />
    </ListaTarefasContainer>
    
  );
}
