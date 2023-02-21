export default function Pet(props){
    return(
        <>
            <h2>{props.petName}</h2>
            <p>{props.age}</p>
            <p>{props.info}</p>
            <p>{props.food}</p>
        </>
    );
}