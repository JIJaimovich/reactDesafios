import { useEffect, useState } from "react";

const ItemCount = ({stock, inicio, onAdd}) => {
  
  const [count, setCount] = useState(inicio);
  
  function suma(){
  if (stock > count) {
      setCount (count + 1); 
  } else {
      console.log("Stock insuficiente")
  }    
  };
  function resta(){
      if (count > inicio) {
        setCount(count - 1);
      }
  };
  function onAdd(){
      console.log(count)
  };
  return(
    <div>
        <p>{count}</p>
        <button onClick={resta}>Click -</button>
        <button onClick={suma}>Click +</button>
        <br/>
        <button onClick={onAdd}>Agregar al carrito</button>
         
    </div>  
  )
}
export default ItemCount

