import './Todo.css';
import { useRef } from 'react';

const Todo = ({todo, setTodos, setCompletedTodos}) => {
    const todoRef = useRef(null);

    const checkHandler = e => {
        if (e.currentTarget.parentElement.className.includes(todo.id)) {
            todoRef.current.classList.add('collapse');
            e.currentTarget.classList.add('animate-check');
        };
        todo.completed = true;
        setTimeout(() => {
            setTodos(prevTodos => prevTodos.filter(todoEl => todoEl.id !== todo.id));
            setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, todo]);
            todoRef.current.firstChild.classList.remove('animate-check');
        }, 400);
    }

    return (
        <div className={todo.completed ? (todo.added ? `todo id${todo.id} completed show` : `todo id${todo.id} completed`) : `todo id${todo.id}`} ref={todoRef}>
            <div className={todo.completed ? 'checkbox checked' : 'checkbox'} onClick={checkHandler}></div>
            <div className='todo-info'>
                <p className='todo-title'>{todo.title?.toUpperCase()}</p>
                {todo.description && <p className='todo-description'>{todo.description}</p>}
            </div>
        </div>
    )
}

export default Todo;