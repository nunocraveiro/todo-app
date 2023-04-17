import './TimeSelector.css';
import { addLeftZero, convertMonth, getYearArray, monthSwitchUp, monthSwitchDown } from '../helper-functions';

const TimeSelector = ({selectedDate, setSelectedDate}) => {
    const daySelectorHandler = e => {
        if (e.currentTarget.innerHTML.includes('up')) {
            setSelectedDate(prevDate => ({
                ...prevDate, 
                weekDay: prevDate.weekDay === 6 ? 0 : prevDate.weekDay+1,
                day: monthSwitchUp(prevDate.day, prevDate.month) ? 1 : prevDate.day+1,
                month: monthSwitchUp(prevDate.day, prevDate.month) ? prevDate.month+1 : prevDate.month,
                year: prevDate.month === 12 && prevDate.day === 31 ? prevDate.year+1 : prevDate.year
            }));
        }
        if (e.currentTarget.innerHTML.includes('down')) {
            setSelectedDate(prevDate => ({
                ...prevDate, 
                weekDay: prevDate.weekDay === 0 ? 6 : prevDate.weekDay-1,
                day: monthSwitchDown(prevDate.day, prevDate.month) ? monthSwitchDown(prevDate.day, prevDate.month) : prevDate.day-1,
                month: !monthSwitchDown(prevDate.day, prevDate.month) ? prevDate.month : prevDate.month-1,
                year: prevDate.month === 1 && prevDate.day === 1 ? prevDate.year-1 : prevDate.year
            }));
        }
    }

    const monthSelectorHandler = e => {
        if (e.currentTarget.innerHTML.includes('up')) {
            setSelectedDate(prevDate => ({
                ...prevDate,
                month: prevDate.month === 12 ? 1 : prevDate.month+1,
                year: prevDate.month === 12 ? prevDate.year+1 : prevDate.year
            }));
        }
        if (e.currentTarget.innerHTML.includes('down')) {
            setSelectedDate(prevDate => ({
                ...prevDate,
                month: prevDate.month === 1 ? 12 : prevDate.month-1,
                year: prevDate.month === 1 ? prevDate.year-1 : prevDate.year
            }));
        }
    }

    const yearSelectorHandler = e => {
        if (e.currentTarget.innerHTML.includes('up')) {
            setSelectedDate(prevDate => ({
                ...prevDate,
                year: prevDate.year+1
            }));
        }
        if (e.currentTarget.innerHTML.includes('down')) {
            setSelectedDate(prevDate => ({
                ...prevDate,
                year: prevDate.year-1
            }));
        }
    }

    return (
        <div className='time-selector'>
            <div className='day'>
                <span className="material-symbols-outlined arrow" onClick={daySelectorHandler}>keyboard_arrow_up</span>
                <p>{addLeftZero(selectedDate.day)}</p>
                <span className="material-symbols-outlined arrow" onClick={daySelectorHandler}>keyboard_arrow_down</span>
            </div>
            <div className='month'>
                <span className="material-symbols-outlined arrow" onClick={monthSelectorHandler}>keyboard_arrow_up</span>
                <p>{convertMonth(selectedDate.month)}</p>
                <span className="material-symbols-outlined arrow" onClick={monthSelectorHandler}>keyboard_arrow_down</span>
            </div>
            <div className='year-container'>
                <span className="material-symbols-outlined arrow" onClick={yearSelectorHandler}>keyboard_arrow_up</span>
                <div className='year'>
                    {getYearArray(selectedDate.year).map(el => <p>{el}</p>)}
                </div>
                <span className="material-symbols-outlined arrow" onClick={yearSelectorHandler}>keyboard_arrow_down</span>
            </div>
        </div>
    )
}

export default TimeSelector;