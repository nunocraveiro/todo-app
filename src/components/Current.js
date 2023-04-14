import './Current.css';

const Current = ({todos, setTodos}) => {
    const searchHandler = e => {
        // setSearchActive(true);
        if (e.currentTarget.value === '') {
            // setSearchActive(false)
            return setTodos(JSON.parse(localStorage.getItem('todos')));
        }
        return setTodos(todos.filter(todo => 
            todo.title.toLowerCase().includes(e.currentTarget.value.toLowerCase()) 
            || todo.description.toLowerCase().includes(e.currentTarget.value.toLowerCase())
        ));
    }

    return (
        <div className='current'>
            <div className='current-header row'>
                <h2 className='week-day title'>SUNDAY</h2>
                <h2 className='num-completed'>7/10 completed</h2>
            </div>
            <div className='todo-list'>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
            </div>
            <div className='current-footer row'>
                <input className='search' type="text" placeholder="SEARCH" onChange={searchHandler}/>
                <h2 className='date title'>16.04.23</h2>
            </div>
        </div>
    )
}

export default Current;