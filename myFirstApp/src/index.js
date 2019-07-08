import React from 'react'
import ReactDom from 'react-dom'
// import FirstComp from './components/FirstComponent'
// import MultipleComponents from './components/MultipleElements'
// import A, { CompB as B } from './components/TwoComponents'
// import LimaFamily from './components/LimaFamily' 
// import Family from './components/Family'
// import Member from './components/Member'
// import ComponentFuctional from './components/ComponentFuctional'
import Dad from './components/Dad'
const element = document.getElementById('root');
ReactDom.render(
    <div>
        <Dad />
        {/* <ComponentFuctional/> */}
        {/* <Family lastName="Lima">
            <Member name="Marcos" />
            <Member name="Dylan" />
            <Member name="Leandro" />
        </Family> */}
        {/* <LimaFamily lastName="Lima"/> */}
        {/* <A value="🐱‍👤🔥"/>
        <B value="💨"/> */}
        {/* <MultipleComponents/> */}
        {/* <FirstComp value="Bom dia mh 😎" /> */}
    </div>
, element)

// const jsx = <h1>Sarve React!</h1>
// ReactDom.render(jsx, element);
// ReactDom.render(
//     <ul>
//         <li> 1) Dylan </li>
//         <li> 2) Inaê </li>
//         <li> 3) Mh </li>
//     </ul>
// , element)

