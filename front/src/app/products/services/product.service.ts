import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]> {

    return this.http.get<Product[]>('http://localhost:3000/api/products')
  }
  
  getProduct(id: string):Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:3000/api/product/${id}`);

  }

  addProduct(product: Product):Observable<any> {
    return this.http.post(`http://localhost:3000/api/product/add`,product);
  };

  deleteProduct(id: string):Observable<any> {
    return this.http.delete(`http://localhost:3000/api/product/${id}`);
  };

  updateProduct(product:Product):Observable<any> {
    return this.http.put(`http://localhost:3000/api/product/${product._id}`,product);
  }

}

