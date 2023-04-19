import './App.css';
import { useState, useEffect } from 'react';
import Current from './components/Current';
import TimeSelector from './components/TimeSelector';
import Adder from './components/Adder';
import { formatDate } from './helper-functions';

// window.onbeforeunload = () => localStorage.clear();

const App = () => {
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState({weekDay: date.getDay(), day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()});
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const [completedTodos, setCompletedTodos] = useState(localStorage.getItem('completedTodos') ? JSON.parse(localStorage.getItem('completedTodos')) : []);
  const [animate, setAnimate] = useState({todos: true, completed: true});
  
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
      <TimeSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} setAnimate={setAnimate}/>
      <Adder totalNumTodos={todos.length+completedTodos.length} setTodos={setTodos} selectedDate={selectedDate} setAnimate={setAnimate}/>
    </div>
  );
};

export default App;
