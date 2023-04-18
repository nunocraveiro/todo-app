import './Todo.css';
import { useRef } from 'react';


const Todo = ({todo, setTodos, setCompletedTodos, totalReversedTodos, setAnimate}) => {
    const todoRef = useRef(null);

    const checkHandler = e => {
        if (todo.completed) {
            return;
        }
        todo.completed = true;
        todoRef.current.classList.add('collapse');
        todoRef.current.firstChild.classList.add('animate-check');
    }

    const deleteHandler = e => {
        if (!todo.completed) {
            return setTodos(prevTodos => prevTodos.filter(todoEl => todoEl.id !== todo.id));
        }
        return setCompletedTodos(prevCompletedTodos => prevCompletedTodos.filter(todoEl => todoEl.id !== todo.id));
    }

    const afterAnimation = () => {
        todoRef.current.firstChild.classList.remove('animate-check');
        setTodos(prevTodos => prevTodos.filter(todoEl => todoEl.id !== todo.id));
        setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, todo]);
        setAnimate(prevState => ({...prevState, completed: true}));
    }
    
    return (
        <div className={todo.completed ? `todo id${todo.id} completed` : `todo id${todo.id}`} style={{'--animation-order': totalReversedTodos.indexOf(todo)}} onTransitionEnd={afterAnimation} ref={todoRef}>
            <div className={todo.completed ? 'checkbox checked' : 'checkbox'} onClick={checkHandler}></div>
            <div className='todo-info'>
                <p className='todo-title'>{todo.title?.toUpperCase()}</p>
                {todo.description && <p className='todo-description'>{todo.description}</p>}
            </div>
            <span className="material-symbols-outlined delete" onClick={deleteHandler}>delete</span>
        </div>
    )
}

export default Todo;