const ItemDetail = ({id, name, img, price, category, description, stock}) => {
    return(
        <div>
            <h1>{name}</h1>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>${price}</p>
            <p>Descripción: {description}</p>
        </div>
    )
}

export default ItemDetail;