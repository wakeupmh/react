import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import ImgDetect from './components/ImageDetection'
import './css/style.css'


const root = document.getElementById("root")

ReactDOM.render(<ImgDetect />, root)

serviceWorker.register() 
