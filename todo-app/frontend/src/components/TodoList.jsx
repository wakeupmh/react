import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
export default props =>
    <div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl type='text' aria-label="Text input with checkbox" />
        </InputGroup>
    </div>
