import React from 'react'
const approved = ['Dylan', 'Inaê', 'Marcos', 'Leandro']

export default props =>{
    const generateItem = items =>{
        return items.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {generateItem(approved)}
        </ul>
    )
}