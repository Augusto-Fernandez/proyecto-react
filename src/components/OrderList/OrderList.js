import OrderItem from "../OrderItem/OrderItem"

const OrderList = ({cart}) => {
    return(
        <div>
            <div>
                {cart.map(prod => <OrderItem key={prod.id} {...prod}/>)}
            </div>
            <h3>Total: ${cart.reduce((acc, currentValue) => acc + currentValue.price*currentValue.qtty,0)}</h3>
        </div>
    )
}

export default OrderList