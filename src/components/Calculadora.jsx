import React, {useState} from 'react'
import Numberinput from './Numberinput';
import Resultado from './Resultado';

const Calculadora = () => {
    //agregando el estado

    const [suma, setSuma] = useState(0);
    return (
        <div>
            <Numberinput/>
           
        </div>
    )
}

export default Calculadora
