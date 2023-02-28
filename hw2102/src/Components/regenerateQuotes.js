import React, { useState } from 'react'

export default function Quote(props){
    const quotes = props.arr;
    const [randQuote, setRandQuote] = useState("");
    const[prevId, setPrevId] = useState(-1);
    const changeQuote = (prevId) => {
        let ind = 0;
        do {
            ind = Math.floor(Math.random() * (quotes.length - 1));
        } while (ind === prevId);
        setRandQuote(quotes[ind]);
        setPrevId(ind);
    }

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