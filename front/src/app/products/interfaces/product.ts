export interface Product {
    _id: string
    name: string,
    brand: string
    qty: number
    price: number
    imageUrl: string
    weight: {uom: string, value: number}
    
}