import logo from './logo.svg';
import './App.css';
import Bio from './Components/personal-info';
import Cities from './Components/cities';

const cities = [
  {
    name: 'New York',
    info: 'The largest city in the United States, known for its skyscrapers, cultural landmarks, and diverse neighborhoods.',
  },
  {
    name: 'Los Angeles',
    info: 'The second-largest city in the United States, known for its sunny weather, entertainment industry, and beaches.',
  }
]

function App() {
  return (
    <div>
      <Bio />
      <hr />
      <Cities cities = {cities} />
    </div>
  );
}

export default App;
