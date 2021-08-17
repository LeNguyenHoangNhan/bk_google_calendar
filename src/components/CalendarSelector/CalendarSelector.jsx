import React from 'react';

function CalendarSelector(props) {
    const selectors = props.classList.map((eachClass) =>
    <>
        <input type='checkbox' id={eachClass.name} name={eachClass.name} value={eachClass.name} />
        <label for={eachClass.name}>{eachClass.name}</label><br/>
    </>
    );

    return <>
        {selectors}
    </>;
}

export default CalendarSelector;