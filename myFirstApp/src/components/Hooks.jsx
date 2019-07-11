import React, {useState, useEffect} from 'react'
export default props =>{
    const [counter, setCounter] = useState(100)
    const [status, setStatus] = useState('par')
    useEffect(()=>{
        counter % 2 === 0 ? setStatus('par') : 
            setStatus('impar')
    },[counter])
    return(
        <div>
            <h1>{counter}</h1>
            <h2>{status}</h2>
            <button onClick={()=> setCounter(counter+1)}>
                <span aria-label="minus" role="img">➕</span>
            </button>
            <button onClick={()=> setCounter(counter-1)}>   
                <span aria-label="minus" role="img">➖</span>
            </button>
            
        </div>
    )
}