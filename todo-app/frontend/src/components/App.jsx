import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import React from 'react'
import Todo from './Todo'
import About from './About'
import Menu from '../template/Menu'

export default props =>
    <div className='container'>
        <Menu/>
        <Todo/>
        <About/>
    </div>


