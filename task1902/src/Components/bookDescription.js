export default function BookInfo(props) {
    return(
        <>
            <h2>{props.bookName}</h2>
            <img style = {{width: "200px"}} src = "https://upload.wikimedia.org/wikipedia/commons/5/55/Romeo_and_juliet_brown.jpg" alt = "w.s."></img>
            <p>{props.info}</p>
        </>
    );
  }