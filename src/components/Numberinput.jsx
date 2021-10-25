import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Resultado from './Resultado';

const Numberinput = ()=> {
    //definimos el estado del componente
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    })

    //desestructuramos el estado del componete
    const{numero1 ,numero2}= numeros

    const handleChange = (e)=>{
        setNumeros({
            ... numeros, //hacemos una copia del estado.
            //asignamos nuevo valor del estado en base al name
            [e.target.name]: parseFloat(e.target.value),
        })
    }

    //definimos las funciones de las operaciones
    const suma = () => numero1 + numero2
    const resta = () => numero1 - numero2
    const Multiplicación = () => numero1 * numero2
    const division = () => numero1 / numero2

    return (
        <>
        <label htmlFor="" className="mx-2 ">
            Numero1 : {" "} <input className="form-control" name="numero1" value={numero1} onChange={handleChange} type="number" />      
        </label>  
        
        <label htmlFor="" className="mx-2 ">
            Numero2 : {" "} <input className="form-control" name="numero2" value={numero2} onChange={handleChange} type="number" />      
        </label>  

        <Resultado opracion = "Suma" calculo={suma()}/>
        <Resultado opracion = "resta" calculo={resta()}/>
        <Resultado opracion = "Multiplicación" calculo={Multiplicación()}/>
        <Resultado opracion = "division" calculo={division()}/>
        </>
    )
}

Numberinput.propTypes = {
    name: PropTypes.string,
}

export default Numberinput
