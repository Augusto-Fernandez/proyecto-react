const ItemList = ({products}) => {
    return(
        <div>
            {products.map(prod => <h4 key={prod.id}>{prod.name}</h4>)}
        </div>
    )
}

export default ItemList