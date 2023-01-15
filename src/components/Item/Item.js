const Item = ({name, img, price}) =>{
    return(
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name} style={{width: 100}}/>
            <p>$ {price}</p>
        </div>
    )
}

export default Item;