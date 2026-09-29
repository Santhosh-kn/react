import { useEffect, useState } from  'react'
function Timer(){
    const [seconds, setSeconds] = useState(0)
    useEffect(() => {
        console.log('Starting interval for seconds:', seconds)

        const timerId = setInterval(() => {
            setSeconds(seconds => seconds + 1)            
        }, 1000);
        return () => {
            console.log('Cleaning interval for seconds:', seconds)
            clearInterval(timerId)
        }
        
    },[])
    return <h2>{seconds}</h2>
}
export default Timer