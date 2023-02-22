import React, { useState } from 'react'

export default function Quote(props){
    const [index, changeId] = useState(props.number)

    const btnClick = function(){
        changeId(index);
    }
    return(
        <>
            <button onClick={btnClick}>Quote of the day:</button>
            <p>{props.arr[index]}</p>
        </>
    );
}