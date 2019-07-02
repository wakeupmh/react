import React from 'react'

const CompA = props =>
    <h1>Primeiro digo: {props.value}</h1>

const CompB = props =>
    <h1>Depois digo: {props.value}</h1>

export { CompA, CompB }
export default CompA