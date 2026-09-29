import { useState, useEffect } from 'react'
function App(){
  const [userId, setUserId] = useState(1)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    async function fetchUsers(){
      setLoading(true)
      setError('')
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{
          signal:controller.signal
        })
        if(!response.ok){
          throw new Error("Unable to fetch users");
        }
        const data = await response.json()
        setUser(data)
      } catch (error) {
        if(error.name === 'AbortError'){
          console.log('Requested cancelled')
          return
        }
        setError(error.message)
      } finally {
        if(!controller.signal.aborted){
          setLoading(false)
        }
      }
    }
    fetchUsers()
    return () => {
      controller.abort()
    }
  }, [userId])
  
  return(
    <>
      <button disabled={userId<=1} onClick={() => setUserId(prev => prev - 1)}>Previous</button>
      <button disabled={userId >= 10} onClick={() => setUserId(prev => prev + 1)}>Next</button>
      <h2>User ID: {userId}</h2>
      {loading && <p>Loading......</p>}
      {error && <p>{error}</p>}
      {!loading && !error && user && (
          <>
           <h1>{user.name}</h1>
           <p>{user.email}</p>
          </>
        )
      }
    </>
  )
}
export default App