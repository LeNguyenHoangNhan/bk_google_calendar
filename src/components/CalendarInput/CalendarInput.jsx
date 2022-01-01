import React from 'react';
import './CalendarInput.css';
function CalendarInputField(props) {
    return <textarea rows="5" type='text' value={props.value} onChange={props.onChange} className='calendar-input' placeholder="CO2011	Mô hình hóa toán học..." wrap="soft"></textarea>
}

export default CalendarInputField;