import React from 'react'
import Member from './Member'

export default props =>
    <div>
        <Member name="Marcos" lastName={props.lastName}/>
        <Member name="Dylan" lastName={props.lastName} />
        <Member name="Leandro" lastName={props.lastName} />
    </div>