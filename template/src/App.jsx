import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const handleClick1 = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };



  const handleClick2 = () => {
    setCount((prevCount)=> prevCount + 1);
    setCount((prevCount)=>prevCount + 1);
    setCount((prevCount)=>prevCount + 1);
		console.log(count);
  };

  return (
    <>
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick1}>Click Me1</button>
      <button onClick={handleClick2}>Click Me2</button>
    </div>
    </>
  )
}

export default App
