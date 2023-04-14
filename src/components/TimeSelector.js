import './TimeSelector.css';

const TimeSelector = () => {
    return (
        <div className='time-selector'>
            <div className='day'>
                <span class="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <p>16</p>
                <span class="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
            <div className='month'>
                <span class="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <p>APR</p>
                <span class="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
            <div className='year-container'>
                <span class="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <div className='year'>    
                    <p>2</p>
                    <p>0</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <span class="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
        </div>
    )
}

export default TimeSelector;