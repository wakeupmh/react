import React,{useState, useEffect} from 'react'
import mask from './masked'
export default props =>{
    const [documentId, change] = useState('')
    useEffect(()=>{
        if(documentId != ''){
            change(mask(documentId))
            document.getElementById('beforeState').style.display = 'none';
        }else{
            document.getElementById('beforeState').style.display = 'block';
        }
            
    },[documentId])
    return (
        <div className="App">
            <div className='CpfCard'>
                <div className='CpfCardLogo'>
                    <img src={require(`./${props.imgSrc}`)}/>
                </div>
                <div className='CpfCardData'>
                    <h1>CPF</h1>
                    <strong>Cadastro de Pessoas Físicas</strong>
                    <h2>
                        <label>Número de inscrição:</label><br/>
                        <span id="beforeState">xxx.xxx.xxx-xx</span>   
                        {documentId}
                    </h2>
                </div>
            </div>
            <div>
                <h3>DIGITE SEU CPF</h3>
                <input 
                    maxLength='14'
                    name='documentId'
                    value={documentId}
                    onChange={(event)=>{change(event.target.value)}}
                    className='InputCPF'
                />
            </div>
        </div>
    )
}