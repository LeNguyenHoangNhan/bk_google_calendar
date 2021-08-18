import React from 'react';
import './CalendarInput.css';
function CalendarInputField(props) {
    return <textarea type='text' value={props.value} onChange={props.onChange} className='calendar-input' placeholder="CO2011	Mô hình hóa toán học..."></textarea>
}

export default CalendarInputField;