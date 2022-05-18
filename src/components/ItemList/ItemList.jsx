import React from "react"
import {Producto} from '../Item/Item'

export const ItemList = ({productos}) => {

  return (
    <div className="catalogo">
      {
        productos.map((producto)=> <Producto {...producto} key={producto.id} />)
      }
    </div>
  )
}