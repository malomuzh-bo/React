import logo from './logo.svg';
import './App.css';
import Pet from './Components/pet';
import Bio from './Components/personal';

function App() {
  let name = "Bohdan";
  let number = "123456789";
  let email = "Bohdan";
  let city = "Bohdan";
  let experience = "Bohdan";
  let skill = "Bohdan";
  let path = "https://fsx1.itstep.org/api/v1/files/IrS_gy4eHggkW_sfbIEOwywdTqioTtUB"

  let petName = "Pet1";
  let petAge = "846 hours";
  let petInfo = "Lorem ipsum etc. etc.";
  let petFood = "Pet likes pineapples)";
  return (
    <div className="App">
      <Bio name = {name} number = {number} email = {email} city = {city} exper = {experience} skills = {skill} path = {path} />
      <hr/>
      <Pet petName = {petName} age = {petAge} info = {petInfo} food = {petFood} />
    </div>
  );
}

export default App;
