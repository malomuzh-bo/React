export default function Film(props) {
    return(
        <>
            <h2>{props.name} ({props.years})</h2>
            <img style = {{width: "200px"}} src = "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png" alt = "poster" />
            <p><b>Producer:</b> {props.producer_name}</p>
            <h4>Actors:</h4>
            <ul>
                {props.arr.actors.map((q)=><li>{q}</li>)}
            </ul>
            <p><b>Studio:</b> {props.studio}</p>
        </>
    );
}