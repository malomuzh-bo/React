import React, { useState } from 'react'

export default function Button(props){
    const btnClick = () => { props.onClickAction(props.bgCol, props.textCol); };
    return(
        <>
            <button className='Button' onClick={btnClick} style = {{backgroundColor: props.bgCol, color: props.textCol}}>Color: {props.bgCol}</button>
        </>
    );
}