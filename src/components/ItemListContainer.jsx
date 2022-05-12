import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList";




const getProductos = new Promise((resolve)=>{
  setTimeout(()=>{
      resolve( <ItemList/> )        
  }, 2000)
})


function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getProductos
      .then(respuesta => setProductos(respuesta))
      .finally(() => setLoading(false))
  },[]);

  return (
      <>
        { loading ? 
          <h2>Cargando...</h2> 
          : 
          <ItemList/> 
        }    
      </>
  )
}
  
export default ItemListContainer