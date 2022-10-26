import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaFeita

  } from "./styled";

// import bin from "../../assets/bin.png";


  export function ListaFeita(props) {
  return (
    // <ListaTarefasContainer>
    <div>
      <ListaContainer>
        <ul>
        {props.listaFeita.map((tarefa) => {
            return (
              <TarefaFeita key={props.index}>
                <p>{tarefa}</p>
              </TarefaFeita>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      </div>
    // </ListaTarefasContainer>
  );
}
