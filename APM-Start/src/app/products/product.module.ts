import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,   
    FormsModule, 
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', 
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      }
    ]),
  ],
  declarations: [
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
  ]
})
export class ProductModule { }
