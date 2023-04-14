import './Adder.css';

const Adder = () => {
    return (
        <div className='adder'>
            <textarea className='new-title input' placeholder="TITLE" spellCheck='false' maxlength='66'></textarea>
            <textarea className='new-body input' type="text" placeholder="add something more..." maxlength='180'></textarea>
        </div>
    )
}

export default Adder;