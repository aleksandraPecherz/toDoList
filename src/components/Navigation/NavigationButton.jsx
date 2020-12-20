import React from 'react'

const NavigationButton =(props) => (
<button 
    className={props.className} 
    id = {props.id}
    onClick = {props.click}>
    <p className="navigationText">
        {props.text}
    </p>        
</button>
)

export default NavigationButton 