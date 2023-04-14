import React from 'react';
import TodoCard from './TodoCard';

const updateCompletedValue = (arr, id, value) => arr.map(item => {
  if (item.id === id) {
    return {
      ...item,
      completed: value,
    }
  }
  return item;
});

const TodoList = ({todos, setTodos}) => {
  let completedItems = [];
  let notCompletedItems = [];

  todos?.forEach(item => {
    if (item.completed) completedItems.push(item);
    else notCompletedItems.push(item);
  });

  const handleListClick = e => {
    e.preventDefault();
    if (e.target.className === 'todo__button--remove') {
      return setTodos(todos.filter(item => item.id !== Number(e.target.parentNode.id)));
    }
    if (e.target.parentNode.className === 'item todo--notcompleted') {
      return setTodos(updateCompletedValue(todos, Number(e.target.parentNode.id), true));
    }
    if (e.target.parentNode.className === 'item todo--completed') {
      return setTodos(updateCompletedValue(todos, Number(e.target.parentNode.id), false));
    }
  };

  return (
    <section className='todo--toggle-completed' onClick={handleListClick}>
      <div className='not-completed-items' id='todoList'>{notCompletedItems.map(item => <TodoCard item={item} />)}</div>
      <div className='completed-items'>{completedItems.map(item => (<TodoCard item={item} />))}</div>
    </section>
  );
};

export default TodoList;