import './Todo.css';
import { useRef } from 'react';

const Todo = ({todo, setTodos, setCompletedTodos, totalReversedTodos, animate, setAnimate}) => {
    const todoRef = useRef(null);

    const checkHandler = e => {
        if (todo.completed) {
            return;
        }
        todo.completed = true;
        todoRef.current.classList.add('collapse');
        todoRef.current.firstChild.classList.add('animate-check');
    }

    const afterTransition = () => {
        if (todoRef.current.className.includes('delete-animation')) return;
        todoRef.current.firstChild.classList.remove('animate-check');
        setTodos(prevTodos => prevTodos.filter(todoEl => todoEl.id !== todo.id));
        setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, todo]);
        setAnimate(prevState => ({...prevState, completed: true}));
    }

    const afterAnimation = () => {
        if (todoRef.current.className.includes('animate-new-completed')) {
            todoRef.current.classList.remove('completed-animate');
            todoRef.current.classList.remove('animate-new-completed');
            todoRef.current.classList.add('todo');
            todoRef.current.classList.add('completed');
            return setAnimate(prevState => ({...prevState, completed: false}));
        };
        if (todoRef.current.className.includes('todo-entry')) {
            todoRef.current.classList.remove('todo-entry');
            return setAnimate({todos: false, completed: false});
        };
        if (todoRef.current.className.includes('delete-animation')) {
            if (!todo.completed) {
                return setTodos(prevTodos => prevTodos.filter(todoEl => todoEl.id !== todo.id));
            }
            return setCompletedTodos(prevCompletedTodos => prevCompletedTodos.filter(todoEl => todoEl.id !== todo.id));
        };
    }
    
    return (
        <div className={todo.completed ? (animate.completed && !animate.todos && !todoRef.current?.className.includes('todo') ? `completed-animate id${todo.id}` : `todo id${todo.id} completed`) : `todo id${todo.id}`} style={{'--animation-order': totalReversedTodos.indexOf(todo)}} onTransitionEnd={afterTransition} onAnimationEnd={afterAnimation} ref={todoRef}>
            <div className={todo.completed ? 'checkbox checked' : 'checkbox'} onClick={checkHandler}></div>
            <div className='todo-info'>
                <p className='todo-title'>{todo.title?.toUpperCase()}</p>
                {todo.description && <p className='todo-description'>{todo.description}</p>}
            </div>
            <span className="material-symbols-outlined delete" onClick={() => todoRef.current.classList.add('delete-animation')}>delete</span>
        </div>
    )
}

export default Todo;