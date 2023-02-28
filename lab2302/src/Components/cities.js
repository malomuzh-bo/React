export default function Cities(props){
    return(
        <>
            <h3>Cities:</h3>
            {props.cities.map(q => (<p key = {q.name}>{q.name}: {q.info}</p>))}
        </>
    );
}