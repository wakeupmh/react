import React from 'react'
import { childWithProps } from '../utils/ComponentsUtil'
export default props =>
    <div>
        <h1>Família {props.lastName}</h1>
        {childWithProps(props)}

        {/* {React.cloneElement(props.children, {...props})} */}

        {/* {React.cloneElement(props.children, 
            {lastName: props.familyName})} */}

        {/* {props.children} */}
    </div>