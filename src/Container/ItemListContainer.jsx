import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../components/ItemList/ItemList"
import { getFetch } from "../../helpers/getFetch"
 



// const getProductos = new Promise((resolve)=>{
//   setTimeout(()=>{
//       resolve( <ItemList/> )        
//   }, 2000)
// })


// function ItemListContainer() {
//   const [productos, setProductos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//       getProductos
//       .then(respuesta => setProductos(respuesta))
//       .finally(() => setLoading(false))
//   },[]);

//   return (
//       <>
//         { loading ? 
//           <h2>Cargando...</h2> 
//           : 
//           <ItemList/> 
//         }    
//       </>
//   )
// }
  
// export default ItemListContainer


const ItemListContainer = ( { saludo='saludo' } ) => {      
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams() 

  useEffect(() => {
      if (id) {
          getFetch()  // fetch llamada a una api  
          .then(respuesta=> setProductos(respuesta.filter((prods) => prods.categoria === id)))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false))                             
      } else {
          getFetch()  // fetch llamada a una api  
          .then(respuesta=> setProductos(respuesta))
          .catch((err)=> console.log(err))
          .finally(()=>setLoading(false))                 
      }
  }, [id])

  function onAdd(cant) {
      console.log(cant)
  }
  
  console.log(id)

  

  //onAdd(counter) 
  // if (true) else (false) => condition ? tue : false
  return (
      <div>
          {saludo} 
          { loading ? 
              <h2>Cargando...</h2> 
              : 
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  <ItemList productos={productos} /> 
              </div>
          }

          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
          {/* <button onClick={()=> setBool(!bool)}>click</button>            */}
      </div>

  )
}

export default ItemListContainer
