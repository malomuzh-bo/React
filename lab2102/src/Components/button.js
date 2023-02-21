import React, { useState } from 'react';

export default function Button(props){
    const[value, changeValue] = useState(props.startVal, props.increment);

    const click = function(){
        
        changeValue(value + props.increment);
    }
    return(
        <>
            <h4>Value: {value}</h4>
            <h5>Increment: {props.increment}</h5>
            <button onClick={click}>Change value</button>
        </>
    )
}