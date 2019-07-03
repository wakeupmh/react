import React from 'react'

const childWithProps= props=>{
    return React.Children.map(props.children, child=>{
        return React.cloneElement(child,{...props})
    })
}
export {childWithProps}