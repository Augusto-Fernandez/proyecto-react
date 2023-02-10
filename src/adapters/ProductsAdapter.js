export const createProductsAdapterFromFirestore = (doc) =>{
    const data = doc.data()

    const productsAdapted ={
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        stock: data.stock
    }

    return productsAdapted
}