import React, { useContext } from "react";
import styled from "styled-components";
import TodoContext from "../context/TodoContext";
import CardTodo from "./CardTodo";

const Wrapper = styled.div`
  background: #fafafa;
  border: solid 1px #f0f0f0;
  border-radius: 5px;
  -webkit-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  -moz-box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  box-shadow: -9px 2px 28px -1px rgba(192,192,192,0.55);
  margin-top: 16px;
  padding: 8px;
`;

const ListTodos = ({ display, ...props }) => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleChangeStatus = (id, status) => {
    const item = todos.find(todo => todo.id === id);
    if (item) {
      const updatedTodo = {
        ...item,
        status: status === "completed" ? "completed" : "deleted"
      };
      const idx = todos.indexOf(item);
      const arr1 = todos.slice(0, idx);
      const arr2 = todos.slice(idx + 1, todos.length + 1);

      const newTodos = [].concat(arr1, updatedTodo, arr2);

      setTodos(newTodos);
    }
  };

  const completedTodos = todos.filter(td => td.status === "completed");
  const deletedTodos = todos.filter(td => td.status === "deleted");
  const displayedTodos = display === "all" ? todos 
    : display === "completed" ? completedTodos 
    : deletedTodos;

  return (
    <Wrapper>
      {displayedTodos.length > 0 ? (
        displayedTodos.map(todo => (
          <CardTodo
            data-test="card-todo-item" 
            key={todo.id}
            todo={todo.todo} 
            status={todo.status} 
            onDelete={() => handleChangeStatus(todo.id, "deleted")} 
            onComplete={() => handleChangeStatus(todo.id, "completed")} 
          />
        ))
      ) : "Your todo list is empty"}
    </Wrapper>
  )
};

export default ListTodos;