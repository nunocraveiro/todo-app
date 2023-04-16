import './Adder.css';
import { useRef } from 'react';

const Adder = ({todos, setTodos}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleAddTodo = e => {
        e.preventDefault();
        if (titleRef.current.value === '') return;
        const newTodo = {
          id: todos.length === 0 ? 0 : todos[todos.length-1].id+1,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          completed: false
        };
        // setTodos(prevTodos => [...prevTodos, newTodo]);
        setTodos(prevTodos => [...prevTodos, newTodo]);
        titleRef.current.value = '';
        descriptionRef.current.value = '';
    };

    return (
        <div className='adder'>
            <textarea className='new-title input' placeholder="TITLE..." spellCheck='false' maxLength='50' ref={titleRef}></textarea>
            <textarea className='new-body input' type="text" placeholder="add something more..." spellCheck='false' maxLength='175' ref={descriptionRef}></textarea>
            <button className='add-btn' onClick={handleAddTodo}>+</button>
        </div>
    )
}

export default Adder;