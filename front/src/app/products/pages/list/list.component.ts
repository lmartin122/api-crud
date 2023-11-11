import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductService) {}
  public products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( (products) => {
        this.products = products
        console.log(this.products);
      } )
  }
}
