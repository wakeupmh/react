import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import React from 'react'
import Todo from './Todo'
import About from './About'

export default props =>
    <div className='container'>
        <Todo/>
        <About/>
    </div>


