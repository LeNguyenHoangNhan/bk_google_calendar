import React from 'react';
import './CalendarSelector.css';
function CalendarSelector(props) {
    const selectors = props.classList.map((eachClass, index) => {
        return <div key={eachClass.signature} class="class-item_wrapper">
            <input id={eachClass.signature} type='checkbox' name={eachClass.name} value={eachClass.signature} onChange={props.changeHandler} checked={eachClass.selected} className="class-selector_checkbox" />
            <label htmlFor={eachClass.signature} className='class-selector_label'>
                {eachClass.name}
            </label>
            <br />
        </div>
    }
    );

    return <div class={props.classList.length > 0 ? "calendar-selector_wrapper" : "calendar-selector_wrapper-empty"} >
        {selectors}
    </ div>;
}

export default CalendarSelector;