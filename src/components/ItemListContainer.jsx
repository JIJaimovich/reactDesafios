import { useEffect, useState } from "react"
import { productos } from "../data/productos"
import {listarArray} from '../components/helpers/listarArray'
import {ItemList} from '../components/ItemList/ItemList'

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      listarArray(productos)
      .then(respuesta => setProductos(respuesta))
      .finally(() => setLoading(true))
  },[]);

  return (
      <div className="contenedor-catalogo">
        {
          loading?
          <div className="cargando">Cargando...</div>
          :
          <ItemList productos={productos} /> 
        }
      </div>
  )
}

export default ItemListContainer