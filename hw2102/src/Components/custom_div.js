import React, { useState } from 'react'

export default function CustomDiv(props){
    return(
        <div className='customDiv' style={{backgroundColor: props.bgCol, color: props.textCol}}>
            You get what you give
        </div>
    );
}