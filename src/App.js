import './App.css';
import { useState, useEffect } from 'react';
import Current from './components/Current';
import TimeSelector from './components/TimeSelector';
import Adder from './components/Adder';
import { formatDate } from './helper-functions';

window.onbeforeunload = () => localStorage.clear();

const App = () => {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState({weekDay: date.getDay(), day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()});
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
    {id: 0, title: 'go to ada and get bounties', description: '', date: '18042023', completed: false}, 
    {id: 1, title: 'do flawless lake of shadows', description: '', date: '18042023', completed: false}, 
    {id: 2, title: 'finish thunderlord catalyst', description: '', date: '18042023', completed: false},
    {id: 3, title: 'go to ada and get bounties', description: '', date: '19042023', completed: false}, 
    {id: 4, title: 'do flawless lake of shadows', description: '', date: '19042023', completed: false}, 
    {id: 5, title: 'finish thunderlord catalyst', description: '', date: '19042023', completed: false}
  ]);
  // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const [completedTodos, setCompletedTodos] = useState(localStorage.getItem('completedTodos') ? JSON.parse(localStorage.getItem('completedTodos')) : []);
  const [animate, setAnimate] = useState({todos: false, completed: false});
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <div className="App">
      <Current
        selectedDate={selectedDate} 
        todos={todos.filter(todo => todo.date === formatDate(selectedDate.day, selectedDate.month, selectedDate.year))} 
        setTodos={setTodos}
        completedTodos={completedTodos.filter(todo => todo.date === formatDate(selectedDate.day, selectedDate.month, selectedDate.year))}
        setCompletedTodos={setCompletedTodos}
        animate={animate}
        setAnimate={setAnimate}
      />
      <TimeSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <Adder totalNumTodos={todos.length+completedTodos.length} setTodos={setTodos} selectedDate={selectedDate} setAnimate={setAnimate}/>
    </div>
  );
};

export default App;
