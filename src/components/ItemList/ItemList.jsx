// import Item from "../Item/item";    

const productos = [
    {id: '1', categoria:'Suculeta', nombre:'Little Warty', precio:'$3000', img:'https://m.media-amazon.com/images/I/81YvOKTCplS._AC_SX425_.jpg'},
    {id: '2', categoria:'Suculeta', nombre:'Echeveria', precio:'$4000', img:'https://m.media-amazon.com/images/I/81YvOKTCplS._AC_SX425_.jpg'},
    {id: '3', categoria:'Suculeta', nombre:'Crásula', precio:'$2500', img:'https://m.media-amazon.com/images/I/81YvOKTCplS._AC_SX425_.jpg'},
    {id: '4', categoria:'Cactus', nombre:'Rhipsalis', precio:'$5000', img:'https://m.media-amazon.com/images/I/81YvOKTCplS._AC_SX425_.jpg'},
    {id: '5', categoria:'Cactus', nombre:'Echinocactus', precio:'$6500', img:'https://m.media-amazon.com/images/I/81YvOKTCplS._AC_SX425_.jpg'} 
   ];

function ItemList(){
    
    return(
        productos.map((prod) =>  
            <div 
              key={prod.id}
              className='col-md-10 w-25'
              >                        
                  <div className="card w-100 mt-5" >
                       <div className="card-header">
                            {`${prod.nombre} - ${prod.categoria}`}
                       </div>
                       <div className="card-body">
                          <img src={prod.img} alt='' className='w-50' />
                          <div className="card-precio">
                            {prod.precio}
                          </div>                                                         
                       </div>
                       
                       <div className="card-footer">  
                            <button className="card-boton-detalles">Ver detalles</button>
                       </div>
                  </div>
            </div>
        ) 
    )
}
export default ItemList;