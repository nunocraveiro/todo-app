import './App.css';
import { useState, useEffect } from 'react';
import Current from './components/Current';
import TimeSelector from './components/TimeSelector';
import Adder from './components/Adder';

window.onbeforeunload = () => localStorage.clear();

const App = () => {
  // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {notCompleted: [], completed: []});
  // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {notCompleted: [{id: 0, title: 'go to ada and get bounties', description: '', completed: false}, {id: 1, title: 'do flawless lake of shadows', description: '', completed: false}, {id: 2, title: 'finish thunderlord catalyst', description: '', completed: false}], completed: []});
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [{id: 0, title: 'go to ada and get bounties', description: '', completed: false, added: false}, {id: 1, title: 'do flawless lake of shadows', description: '', completed: false, added: false}, {id: 2, title: 'finish thunderlord catalyst', description: '', completed: false, added: false}]);
  const [completedTodos, setCompletedTodos] = useState(localStorage.getItem('completedTodos') ? JSON.parse(localStorage.getItem('completedTodos')) : []);
  const date = new Date();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <div className="App">
      <Current date={date} todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
      <TimeSelector date={date}/>
      <Adder todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
