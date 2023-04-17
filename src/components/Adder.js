import './Adder.css';
import { useRef } from 'react';
import { formatDate } from '../helper-functions';

const Adder = ({totalNumTodos, setTodos, selectedDate}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleAddTodo = e => {
        e.preventDefault();
        if (titleRef.current.value === '') return;
        const newTodo = {
          id: totalNumTodos === 0 ? 0 : totalNumTodos,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          date: formatDate(selectedDate.day, selectedDate.month, selectedDate.year),
          added: false,
          completed: false
        };
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