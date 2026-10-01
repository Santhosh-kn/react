import { useState} from 'react'
import UserContext from './UserContext'
import Profile from './Profile'
function App(){
  const [ user, setUser ] = useState({
    name: 'Santhosh'
  })
  return(
    <>
      <UserContext.Provider value = {{user, setUser}}>
        <Profile />
      </UserContext.Provider>
    </>
  )
}
export default App