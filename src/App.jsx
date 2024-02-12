import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

// function App() {
//   const [count, setCount] = useState(0)

//   const handleIncrease = () => {
//     setCount(count+1)
//   }
//   const handleDecrease = () => {
//     setCount(count-1)
//   }

//   return (
//     <>
//       <h1>Count = {count}</h1>
//       <button type="button" onClick={handleIncrease}>Increase</button>
//       <button type="button" onClick={handleDecrease}>Decrease</button>
//     </>
//   )
// }

// export default App

function App(){
  return(
    <>
    <Counter/>
    </>
  )
}
export default App