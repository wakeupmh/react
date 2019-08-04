import React from 'react'
import {Button, InputGroup} from 'react-bootstrap'
import If from './If'
export default props =>(
    <If test={!props.hide}>
        <InputGroup.Append>
            <Button variant={`outline-${props.variant}`}
                onClick={props.onClick}>{props.text}</Button>
        </InputGroup.Append>
    </If>
)
