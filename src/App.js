import './App.css';
import { useState, useEffect } from 'react';
import Current from './components/Current';
import TimeSelector from './components/TimeSelector';
import Adder from './components/Adder';
import { formatDate } from './helper-functions';

window.onbeforeunload = () => localStorage.clear();

const App = () => {
  // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {notCompleted: [], completed: []});
  // const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {notCompleted: [{id: 0, title: 'go to ada and get bounties', description: '', completed: false}, {id: 1, title: 'do flawless lake of shadows', description: '', completed: false}, {id: 2, title: 'finish thunderlord catalyst', description: '', completed: false}], completed: []});
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState({weekDay: date.getDay(), day: date.getDate(), month: date.getMonth()+1, year: date.getFullYear()});
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [{id: 0, title: 'go to ada and get bounties', description: '', date: '17042023', animated: [true, false], completed: false}, {id: 1, title: 'do flawless lake of shadows', description: '', date: '17042023', animated: [true, false], completed: false}, {id: 2, title: 'finish thunderlord catalyst', description: '', date: '18042023', animated: [true, false], completed: false}]);
  const [completedTodos, setCompletedTodos] = useState(localStorage.getItem('completedTodos') ? JSON.parse(localStorage.getItem('completedTodos')) : []);
  
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
      />
      <TimeSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <Adder totalNumTodos={todos.length+completedTodos.length} setTodos={setTodos} selectedDate={selectedDate}/>
    </div>
  );
};

export default App;
