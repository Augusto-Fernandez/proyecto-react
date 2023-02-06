/* 7) trae el mock*/
const products = [
    { 
        id: '1', 
        name: 'Guitarra Ibanez', 
        price: 67590, 
        category: 'guitarra', 
        img:'../images/products/guitarra-ibanez.jpg', 
        stock: 25, 
        description:'RG GIO GRX40 de álamo black night'
    },
    { 
        id: '2', 
        name: 'Guitarra Squier', 
        price: 164230, 
        category: 'guitarra', 
        img:'../images/products/guitarra-squier.jpg', 
        stock: 16, 
        description:'Telecaster Affinity Series Hh'
    },
    { 
        id: '3', 
        name: 'Bajo Ibanez', 
        price: 188800, 
        category: 'bajo', 
        img:'../images/products/bajo-ibanez.jpg', 
        stock: 10, 
        description:'DAtk200nt Madera Natural'
    }
]


export const getProducts = (categoryId) => { /*8) devuevle los productos del array products */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => { /*9) devuelve los productos filtrados por categoria */
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => { /* 10) devuevle los productos filtrados por id*/
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}