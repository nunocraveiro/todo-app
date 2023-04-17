import './Current.css';
import Todo from './Todo';
import { useRef, useState, useEffect } from 'react';
import { addLeftZero, getWeekDay } from '../helper-functions';

const Current = ({selectedDate, todos, setTodos, completedTodos, setCompletedTodos}) => {
    const completedTodosRef = useRef(null);
    const [searchActive, setSearchActive] = useState(false);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filteredCompletedTodos, setFilteredCompletedTodos] = useState([]);

    const searchHandler = e => {
        setSearchActive(true);
        if (e.currentTarget.value === '') {
            setSearchActive(false);
            setFilteredTodos([]);
            return setFilteredCompletedTodos([]);
        }
        setFilteredTodos(todos.filter(todo => 
            todo.title.toLowerCase().includes(e.currentTarget.value.toLowerCase()) 
            || todo.description.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ));
        return setFilteredCompletedTodos(completedTodos.filter(todo => 
            todo.title.toLowerCase().includes(e.currentTarget.value.toLowerCase()) 
            || todo.description.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ));
    }

    useEffect(() => {
        if (completedTodos.length > 0 && !searchActive && !completedTodos[completedTodos.length-1].added) {
            completedTodosRef.current.lastChild.classList.add('animate-new');
            completedTodos[completedTodos.length-1].added = true;
        }
    }, [completedTodos, searchActive])

    return (
        <div className='current'>
            <div className='current-header row'>
                <h2 className='week-day title'>{getWeekDay(selectedDate.weekDay).toUpperCase()}</h2>
                <h2 className='num-completed'>{completedTodos.length}/{completedTodos.length+todos.length} completed</h2>
            </div>
            <div className='todo-list'>
                {searchActive ? filteredTodos.map(todo => <Todo todo={todo} setTodos={setFilteredTodos} setCompletedTodos={setFilteredCompletedTodos}/>)
                : todos && todos.map(todo => <Todo todo={todo} setTodos={setTodos} setCompletedTodos={setCompletedTodos}/>)}
                <div className='todo-list-complete' ref={completedTodosRef}>
                    {searchActive ? filteredCompletedTodos.map(todo => <Todo todo={todo} setTodos={setFilteredTodos} setCompletedTodos={setFilteredCompletedTodos}/>)
                    : completedTodos && completedTodos.map(todo => <Todo todo={todo} setTodos={setTodos} setCompletedTodos={setCompletedTodos}/>)}
                </div>
            </div>
            <div className='current-footer row'>
                <input className='search' type="text" placeholder="SEARCH" onChange={searchHandler}/>
                <h2 className='date title'>{addLeftZero(selectedDate.day)}.{addLeftZero(selectedDate.month)}.{selectedDate.year}</h2>
            </div>
        </div>
    )
}

export default Current;