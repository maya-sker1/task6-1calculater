import './App.css';
import { useState } from 'react';


function App() {
  const [total , setTotal]=useState('0');

  const handleClick = (e) =>{
    setTotal(total.concat(e.target.name));
  }

  const clear = () => {
    setTotal ("");
  }

  function delet() {
    setTotal(total.slice(0,-1))
  }

  const equal = () => {
    try{
      setTotal (eval(total).toString());
    }catch{
      setTotal("Error");
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <form>
          <input type='text' value={total}/>
          
        </form>

        <div className='board'>
          <button onClick={clear} className='color'>C</button>
          <button onClick={delet} className='color'> del</button>
          <button name='/' className='color'>/</button>
          <button name='*' className='color'>*</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button name='-' onClick={handleClick} className='color'>-</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button name='+' onClick={handleClick} className='color'>+</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button onClick={equal} id='equal'>=</button>
          <button name='0' onClick={handleClick} id='zero'>0</button>
          <button name='0' onClick={handleClick}>.</button>

        </div>
      </div>

      
    </div>
  );
}

export default App;
