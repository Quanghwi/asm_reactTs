export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    idCate: number
}
export interface IProps {
    products: IProduct[],
    // onRemove: (id: number) => void
}