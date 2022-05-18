import React from 'react'

export const Producto = ({nombre, categoria, precio, img}) => {
    return(
        <div className='producto'>
            <div className='nombre'>{nombre}</div>
            <img src={img} alt={nombre} />
            <div className='categoria'>{categoria}</div>
            <button>Ver más detalles</button>
        </div>
    )
}
              