import React from "react";
import './App.css';
import { TodoCounter } from "./TodoCounter";
import VideoInput from "./VideoInput";
import { Table } from "./Table";
import { CreateTodoButton } from "./CreateTodoButton";
import { Canvas } from "./Canvas";


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <Canvas />
      <VideoInput  />
      <Table  />
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
