import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  product?: Product;

  constructor(private productService: ProductService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({id}) => {
        this.productService.getProduct(id)
          .subscribe((product) => {
            if (!product) {this.router.navigate(['/products/list'])}
            this.product = product[0];
            return;
        })
      })
  }

  goToListProducts(): void {
    this.router.navigate(['/products/list'])
  }



}
