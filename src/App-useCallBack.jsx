import { useState, useCallback } from 'react'
import Child from './Child'
function App(){
  console.log('App rendered')
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const handleChildClick = useCallback(() => {
    console.log('child clicked')
  },[count])
  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <br />
      <input type="text" value={name} onChange={event => setName(event.target.value)}/>
      <br />
      <p>{name}</p>
      <br />
      <Child onClick={ handleChildClick }></Child>
    </>
  )
}
export default App