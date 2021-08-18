import React from 'react';

function CalendarSelector(props) {
    const selectors = props.classList.map((eachClass, index) => {
        return <React.Fragment key={eachClass.signature}>
            <input id={eachClass.signature} type='checkbox' name={eachClass.name} value={eachClass.signature} onChange={props.changeHandler} checked={eachClass.selected} />
            <label htmlFor={eachClass.signature} >
                {eachClass.name}
            </label>
            <br />
        </React.Fragment>
    }
    );

    return <>
        {selectors}
    </>;
}

export default CalendarSelector;