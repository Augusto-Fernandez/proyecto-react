const OrderItem = ({name, price, qtty}) =>{
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p>Cantidad: {qtty}</p>
        </div>
    )
}

export default OrderItem