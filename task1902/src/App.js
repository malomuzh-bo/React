// import logo from './logo.svg';
import './App.css';
import Info from './Components/info'
import BookInfo from './Components/bookDescription'
import Film from './Components/film';

function App() {
  let author = "William Shakespeare";
  let author_bio = "Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna, and twins Hamlet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlain's Men, later known as the King's Men. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeare's private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs and whether the works attributed to him were written by others."
  
  let book = "Romeo And Juliet";
  let book_bio = "Is a tragedy written by William Shakespeare early in his career about the romance between two Italian youths from feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays. Today, the title characters are regarded as archetypal young lovers."
  
  let arr = {
    title: "actors",
    actors: [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie",
      "Matthew McConaughey",
      "Kyle Chandler",
      "Rob Reiner",
      "Jon Favreau",
      "Jean Dujardin"
    ]
  }
  let filmName = "The Wolf of Wall Street";
  let years = "2013";
  let producer = "Martin Scorsese";
  let studio = "Paramount Pictures";
  return (
    <div>

      <Info authorName = {author} bio = {author_bio} />
      <BookInfo bookName = {book} info = {book_bio} />
      <hr/>

      <Film arr = {arr} name = {filmName} years = {years} producer_name = {producer} studio = {studio} />
    </div>
  );
}

export default App;
