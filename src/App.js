import logo from './logo.svg';
import './App.css';
import './components/simpsons/Simpsons'
import Simpson from './components/simpson/Simpson'
import SimpsonArray from './components/characters/Characters'



const hello = 'hello'
function App() {
  return (
      <div>
    <h1>{hello}</h1>

    <Simpson arg={SimpsonArray} />

        <Simpson arg={SimpsonArray}/>


        <Simpson arg={SimpsonArray}/>


        <Simpson arg={SimpsonArray}/>

        <Simpson arg={SimpsonArray}/>

        <Simpson arg={SimpsonArray}/>



      </div>

  );
}
export default App