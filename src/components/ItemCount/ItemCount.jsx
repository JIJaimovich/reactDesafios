import { useEffect, useState } from "react";

const ItemCount = ({stock, inicio}) => {
  
  const [count, setCount] = useState(inicio);
  
  function suma(){
  if (stock > count) {
      setCount (count + 1); 
  } else {
      console.log("Stock insuficiente")
  }    
  };
  function resta(){
      if (count > 0) {
        setCount(count - 1);
      }
  };
  return(
    <div>
        <p>{count}</p>
        <button onClick={resta}>Click -</button>
        <button onClick={suma}>Click +</button>
         
    </div>  
  )
}
export default ItemCount

