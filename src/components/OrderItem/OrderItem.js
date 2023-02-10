const OrderItem = ({name, price, qtty}) =>{
    return(
        <div style={{display:'flex', justifyContent:'space-around', backgroundColor:"#6aa4c2", margin:'10px', borderRadius:"8px"}}>
            <p>{name}</p>
            <p>Precio: ${price}</p>
            <p>Cantidad: {qtty}</p>
        </div>
    )
}

export default OrderItem