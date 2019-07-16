import React from 'react'
import ReactDom from 'react-dom'
import InputMasked from './InputMasked'
import './css/Style.css'
const element = document.getElementById('root')
ReactDom.render(
    <div>
        <InputMasked imgSrc="brazil.png"/>
    </div>
, element)
