import React from 'react'
export default props =>
    <div>
        <button onClick={() => props.notifyOut('Shopping')}>
            Vou sair!
        </button>
    </div>