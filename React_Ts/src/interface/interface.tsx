export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    idCate: number
}

export interface ICategory {
    id: number,
    cateName: string
}