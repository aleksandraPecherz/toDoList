import React from 'react'

const NavigationTextArea =(props) => ( 
    <div className="formElement content">
            <label htmlFor={props.name}>Content of task :</label>
            <textarea
              id={props.name}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.change}
            />
          </div>
)

export default NavigationTextArea 