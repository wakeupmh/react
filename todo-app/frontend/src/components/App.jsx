import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/fontawesome-free-solid'
import React from 'react'

export default props =>
    <div className='container'>
        <h1> Teste</h1>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faPlus} />
    </div>


