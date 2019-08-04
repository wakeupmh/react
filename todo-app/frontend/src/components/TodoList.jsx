import React from 'react'
import {Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/fontawesome-free-solid'
import TextButton from './TextButton'

export default props =>{
    const list = props.list || []
    const renderRows = ()=>{
        return list.map(todo =>(
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <TextButton
                        variant='danger'
                        text={<FontAwesomeIcon icon={faTrash}/>}
                        onClick={()=>props.handleRemove(todo)}/>
                </td>
            </tr>
        ))
    }
    if(props.list.length > 0){
        return(
            <div>
                <Table variant='dark' responsive>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </Table>
            </div>
        )
    }else
        return false
    
}
