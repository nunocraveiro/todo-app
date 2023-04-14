import './TodoCard.css';
import React from 'react';

const TodoCard = props => {
  if (props.item.completed) {
    return (
      <div className='item todo--completed' data-testid="todoItem" id={props.item.id}>
        <h2 className='title'>{props.item.title}</h2>
        <p className='description'>{props.item.description}</p>
        <button className="todo__button--remove">Remove</button>
      </div>
    );
  };
  
  return (
    <div className='item todo--notcompleted' data-testid="todoItem" id={props.item.id}>
      <h2 className='title'>{props.item.title}</h2>
      <p className='description'>{props.item.description}</p>
    </div>
  );
};

export default TodoCard;