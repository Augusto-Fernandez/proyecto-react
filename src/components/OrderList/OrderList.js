import OrderItem from "../OrderItem/OrderItem"

const OrderList = ({cart}) => {
    return(
        <div>
            {cart.map(prod => <OrderItem key={prod.id} {...prod}/>)}
        </div>
    )
}

export default OrderList