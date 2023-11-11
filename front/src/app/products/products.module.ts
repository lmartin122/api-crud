import { NgModule } from '@angular/core';


import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
    AddComponent,
    ProductComponent,
    HomeComponent,
    ListComponent,
    CardComponent,
    ConfirmDialogComponent
  ],
    imports: [
      CommonModule,
      ProductRoutingModule,
      FormsModule,
      MaterialModule
    ],
    exports: [

    ]
  })
  export class ProductsModule { }