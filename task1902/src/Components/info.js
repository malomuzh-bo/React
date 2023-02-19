export default function Info(props){
    return(
        <>
            <h2>{props.authorName}</h2>
            <img style = {{width: "200px"}} src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/800px-Shakespeare.jpg" alt = "w.s."></img>
            <p>{props.bio}</p>
        </>
    );
  }