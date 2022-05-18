import Item from "../Item/Item"

const ItemDetail = ({producto}) => {
  return (
    <div className="row" >
      <div className="col">
        <img className="" src={producto.foto} />
      </div>
      <div className="col">
        <h1>{producto.nombre}</h1>
        <h2>{producto.categoria}</h2>
        <p>{producto.precio}</p>
      </div>
      {/* <div></div> */}
    </div>
    // <Item prod={producto} />
  )
}

export default ItemDetail
