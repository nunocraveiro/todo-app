import './Adder.css';
import { useRef } from 'react';
import { formatDate } from '../helper-functions';

const Adder = ({totalNumTodos, setTodos, selectedDate, setAnimate}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleAddTodo = () => {
        if (titleRef.current.value === '') return;
        const newTodo = {
          id: totalNumTodos === 0 ? 0 : totalNumTodos,
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          date: formatDate(selectedDate.day, selectedDate.month, selectedDate.year),
          completed: false
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setAnimate(prevState => ({...prevState, todos: true}));
        titleRef.current.value = '';
        descriptionRef.current.value = '';
    };

    return (
        <div className='adder'>
            <textarea className='new-title input' placeholder="TITLE..." spellCheck='false' maxLength='43' ref={titleRef}></textarea>
            <textarea className='new-body input' type="text" placeholder="add something more..." spellCheck='false' maxLength='65' ref={descriptionRef}></textarea>
            <button className='add-btn' onClick={handleAddTodo} onTransitionEnd={e => e.currentTarget.classList.remove('click-animate')}>ADD +</button>
        </div>
    )
}

export default Adder;