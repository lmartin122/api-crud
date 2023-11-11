import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product: Product = {
    _id: '',
    name: '',
    brand: '',
    qty: 0,
    price: 0,
    imageUrl: 'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725120-stock-illustration-image-available-icon-flat-vector.jpg',
    weight: {uom: '', value: 0}
  }
  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private snackBar:MatSnackBar,
              private router:Router,
              private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .subscribe(({id}) => this.productService.getProduct(id)
          .subscribe(product => {this.product = product[0]; console.log(this.product)}))
    }
  }

  save(): void {
    if (this.product.name.trim().length === 0) {return};

    if(this.product._id){
      this.productService.updateProduct(this.product)
        .subscribe( () => {
          this.showSnackBar('¡UPDATED!')
        });
    }
    else {
      console.log(this.product);
      this.productService.addProduct(this.product)
        .subscribe( (product) => {
          this.router.navigate(['/products/edit',product._id]);
          this.showSnackBar('Created');

        })
    }

  };

  deleteProduct(): void {
    const dialog = this.dialog.open(ConfirmDialogComponent,{
      width:'350px',
      data:this.product
    })
    dialog.afterClosed()
      .subscribe((result) => {
        if (result){ //true o false de acuerdo a si se cierra o acepta
          this.productService.deleteProduct(this.product._id)
            .subscribe(resp => {
              this.router.navigate(['/products/list']) 
            })
        }
      })
  };
  

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Ok!', {
      duration: 2700
    })
  }

}

