import logo from './logo.svg';
import './App.css';
import Button from './Components/button';

function App() {
  let start = 2;
  let start2 = -9;
  let start3 = -20;
  let inc = 8;
  let inc2 = -3;
  let inc3 = 17;
  return (
    <div className="App">
      <Button startVal = {start} increment = {inc} />
      <hr />
      <Button startVal = {start2} increment = {inc2} />
      <hr />
      <Button startVal = {start3} increment = {inc3} />
    </div>
  );
}

export default App;
