import { useEffect, useState } from "react"
import { productos } from "../data/productos"
import {listarArray} from '../components/helpers/listarArray'
import {ItemList} from '../components/ItemList/ItemList'

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true)
        .then(respuesta => setProductos(respuesta))
        .finally(() => setLoading(true))
    },[]);
  
    return (
        <div className="contenedor-catalogo">
          <ItemDetail producto={producto}  />
        </div>
    )
  }
  
  export default ItemListContainer