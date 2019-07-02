import React from 'react'
export default props =>
    <div>
        <h1>Família {props.lastName}</h1>
        {React.cloneElement(props.children, {...props})}

        {/* {React.cloneElement(props.children, 
            {lastName: props.familyName})} */}

        {/* {props.children} */}
    </div>