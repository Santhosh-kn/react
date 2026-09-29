import { useRef, useState, useEffect } from 'react'
function App(){
  const [count, setCount] = useState(0)
  const previousCount = useRef(null)

  useEffect(() => {
    previousCount.current = count
  }, [count])
  return(
    <>
      <p>current count: {count}</p>
      <p>previous count : {previousCount.current}</p>

      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
    </>
  )
}
export default App