import React from 'react'
let isLegal = true
export default (props)=> 
    <div>
        <h1>{props.value}</h1>
        <h2>{2**9}</h2>
        <p>Legal? {isLegal ? '👍':'👎'}</p>
        <p>🎫: {Math.random()}</p>
    </div>
   