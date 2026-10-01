import { useContext } from  'react'
import UserContext from './UserContext'
function UserName(){
    const {user, setUser } = useContext(UserContext)
    function changeName(){
        setUser({
            name: 'React Developer'
        })
    }
    return(
        <>
            <h3>Name: {user.name}</h3>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default UserName 