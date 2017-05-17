import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuardGuard } from 'app/products/product-guard.guard';
import { ProductService } from 'app/products/product.service';

import { SharedModule } from '../shared/shared.module';

// ng g m products/product --flat true

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent, canActivate: [ProductGuardGuard] },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductGuardGuard
  ]
})
export class ProductModule { }
