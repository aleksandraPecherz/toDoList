import React from 'react'
const minDate = new Date().toISOString().slice(0, 10);
const maxDate = "31.12." + new Date().toISOString().slice(0, 4);

const NavigationInput =(props) => ( 
    <div className={"formElement " + props.name}>
        <label htmlFor={props.name}>{props.name === 'beginDate'? "begin date :":"expected end date :"}</label>
        <input
            type="date"
            id={props.name}
            value={props.date}
            min={minDate}
            max={maxDate}
            onChange={props.handleDate}
        ></input>
    </div>
)

export default NavigationInput 

