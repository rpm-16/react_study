import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('text');

  function increment(){
    setLikes( likes + 1 );
  }

  function decrement(){
    setLikes( likes - 1 );
  }

  return (
    <div className="App">
      <h1>{likes} {value}</h1>
      Приложение
      <input type='text' 
        value={value} 
        onChange = {event => setValue(event.target.value)}
        />
      <button onClick = {increment}> pls </button>
      <button onClick = {decrement}> minus </button>
    </div>
  );

}

export default App;
