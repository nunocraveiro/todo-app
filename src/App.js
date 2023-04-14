import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList.js';
import Current from './components/Current';
import TimeSelector from './components/TimeSelector';
import Adder from './components/Adder';

window.onbeforeunload = () => localStorage.clear();

const App = () => {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: todos.length === 0 ? 0 : todos[todos.length-1].id+1,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      completed: false
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    titleRef.current.value = '';
    descriptionRef.current.value = '';
  };

  return (
    <div className="App">
      <Current todos={todos} setTodos={setTodos}/>
      <TimeSelector/>
      <Adder/>
      {/* <section>
        <h2 className="app-name">Register New ToDo</h2>
        <form>
          <p>Title</p>
          <input className='titleInput' type="text" id="txtTodoItemToAdd" ref={titleRef} />
          <p>Description</p>
          <input className='descriptionInput' type="text" data-testid="txtTodoItemDescription" ref={descriptionRef} />
          <button className='add' id="btnAddTodo" onClick={handleAddTodo}>Add</button>
        </form>
      </section>
      <TodoList todos={todos} setTodos={setTodos}/> */}
    </div>
  );
};

export default App;
