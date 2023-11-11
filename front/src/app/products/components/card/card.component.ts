import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() public product!:Product;

  ngOnInit(): void {
    if( !this.product) {
      throw new Error('Product is required');
    }
    
  }

}
