import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({opracion,calculo}) => {
    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
             <span >{opracion} : {calculo}</span>
        </div>
    )
}

Resultado.propTypes = {
    opracion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado
