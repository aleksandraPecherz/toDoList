import React from 'react'

const NavigationSelect =(props) => ( 
    <div className="formElement priority">
            <label htmlFor={props.name}>{props.text} :</label>
            <select
              id={props.name}
              value={props.value}
              onChange={props.change}
            >
              <option>low</option>
              <option>normal</option>
              <option>high</option>
            </select>
            <br />
          </div>
)

export default NavigationSelect 