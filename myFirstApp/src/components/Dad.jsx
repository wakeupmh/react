import React from 'react'
import Child from './Child'

export default props =>{
    const notifyOut = 
        place => alert(`Liberado para o ${place}`)
    return (
        <div>
            <Child notifyOut={notifyOut}/>
        </div>
    )
}