import { useMemo, useState } from 'react'
function App(){
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const result = useMemo(() => {
    console.log('calculation is running');
    let total = 0;
    for(let i=0; i< 10000000; i++){
      total += i;
    }
    return total + count;
  },[count])
  return(
    <>
      <h1>Count: {count}</h1>
      <p>Result: {result}</p>
      <br />
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
      <br />
      <input type="text" value={name} onChange={event => setName(event.target.value)} />
      <br />
      <p>Name: {name}</p>
    </>
  )
}
export default App
