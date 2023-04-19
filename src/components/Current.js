import './Current.css';
import Todo from './Todo';
import { useRef, useState, useEffect } from 'react';
import { addLeftZero, getWeekDay } from '../helper-functions';

const Current = ({selectedDate, todos, setTodos, completedTodos, setCompletedTodos, animate, setAnimate}) => {
    const todoListRef = useRef(null);
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
        todoListRef.current.classList.add('list-show');
        if (animate.todos && animate.completed) {
            Array.from(todoListRef.current.children).forEach(node => {
                if (node.className === 'todo-list') return;
                node.classList.add('todo-entry');
            });
            return Array.from(completedTodosRef.current.children).forEach(node => {
                node.classList.add('todo-entry');
            })
        }
        if (todos.length > 0 && animate.todos) {
            completedTodosRef.current.previousSibling.classList.add('animate-new-todo');
            return setAnimate(prevState => ({...prevState, todos: false}));
        }
        if (completedTodos.length > 0 && animate.completed && completedTodosRef.current.lastChild.className.includes('animate')) {
            return completedTodosRef.current.lastChild.classList.add('animate-new-completed');
        }
    }, [animate])

    window.onload = () => {
        todoListRef.current.classList.add('list-show');
    }
    
    return (
        <div className='current'>
            <div className='current-header row'>
                <h2 className='week-day title'>{getWeekDay(selectedDate.weekDay).toUpperCase()}</h2>
                <h2 className='num-completed'>{completedTodos.length}/{completedTodos.length+todos.length} completed</h2>
            </div>
            <div className='todo-list' ref={todoListRef}>
                {searchActive ? filteredTodos.map(todo => <Todo todo={todo} setTodos={setFilteredTodos} setCompletedTodos={setFilteredCompletedTodos} totalReversedTodos={todos.concat(completedTodos).reverse()} animate={animate} setAnimate={setAnimate}/>)
                : todos && todos.map(todo => <Todo todo={todo} setTodos={setTodos} setCompletedTodos={setCompletedTodos} totalReversedTodos={todos.concat(completedTodos).reverse()} animate={animate} setAnimate={setAnimate}/>)}
                <div className='todo-list-complete' ref={completedTodosRef}>
                    {searchActive ? filteredCompletedTodos.map(todo => <Todo todo={todo} setTodos={setFilteredTodos} setCompletedTodos={setFilteredCompletedTodos} totalReversedTodos={todos.concat(completedTodos).reverse()} animate={animate} setAnimate={setAnimate}/>)
                    : completedTodos && completedTodos.map(todo => <Todo todo={todo} setTodos={setTodos} setCompletedTodos={setCompletedTodos} totalReversedTodos={todos.concat(completedTodos).reverse()} animate={animate} setAnimate={setAnimate}/>)}
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