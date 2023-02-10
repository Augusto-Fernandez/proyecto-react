import ItemCart from "../ItemCart/ItemCart"

const Cartlist = ({cart}) =>{
    return(
        <div>
            {cart.map(prod => <ItemCart key={prod.id}{...prod}/>)} 
        </div>
    )
}

export default Cartlist