import React, { useState, useRef } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import TodoContext from './context/TodoContext';
import ButtonTab from './components/ButtonTab';

function App() {
  /**
   * Active tabs contains of "all", "completed", and "deleted"
   */
  const [activeTab, setActiveTab] = useState("all");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const contextItem = {
    todos,
    setTodos
  };

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: generateId(),
      todo: inputRef.current.value,
      status: "added"
    };

    setTodos([].concat(todos, newTodo));

    inputRef.current.value = "";
  };
  
  const completedTodos = todos.filter(td => td.status === "completed");
  const deletedTodos = todos.filter(td => td.status === "deleted");

  return (
    <TodoContext.Provider value={contextItem}>
      <div className="container">
        <h1>To Do ...</h1>
        <InputTodo 
          data-test="input-todo" 
          ref={inputRef} 
          placeholder="Input to do here" 
          onSubmit={handleAddTodo} 
        />
        <ButtonTab background="#e9faf1" color="#000" onClick={() => setActiveTab("all")}>
          All ({todos.length})
        </ButtonTab>
        <ButtonTab background="#22c971" color="#fff" onClick={() => setActiveTab("completed")}>
          Completed ({completedTodos.length})
        </ButtonTab>
        <ButtonTab background="#fd727d" color="#fd4f5d" onClick={() => setActiveTab("deleted")}>
          Deleted ({deletedTodos.length})
        </ButtonTab>
        
        <ListTodos display={activeTab} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
