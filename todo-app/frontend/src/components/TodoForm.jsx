import React from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
export default props =>
    <div>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Não se esqueça de..."
            aria-label="Não se esqueça de..."
            aria-describedby="Não se esqueça de..."
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Inserir lembrete</Button>
            </InputGroup.Append>
        </InputGroup>
    </div>
