import './TimeSelector.css';
import { addLeftZero, convertMonth, getYearArray } from '../helper-functions';

const TimeSelector = ({date}) => {
    return (
        <div className='time-selector'>
            <div className='day'>
                <span className="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <p>{addLeftZero(date.getDate())}</p>
                <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
            <div className='month'>
                <span className="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <p>{convertMonth(date.getMonth())}</p>
                <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
            <div className='year-container'>
                <span className="material-symbols-outlined arrow">keyboard_arrow_up</span>
                <div className='year'>
                    {getYearArray(date.getFullYear()).map(el => <p>{el}</p>)}
                </div>
                <span className="material-symbols-outlined arrow">keyboard_arrow_down</span>
            </div>
        </div>
    )
}

export default TimeSelector;