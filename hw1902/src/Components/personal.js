export default function Bio(props){
    return(
        <>
            <h3>{props.name}'s bio:</h3>
            <br/>
            <p>Number: {props.number}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.city}</p>
            <p>Experience: {props.exper}</p>
            <p>Skills: {props.skills}</p>
            <img style={{width: "200px"}} src = {props.path} alt = "me" />
        </>
    );
}