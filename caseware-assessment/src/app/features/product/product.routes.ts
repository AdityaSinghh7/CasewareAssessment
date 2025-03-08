import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


export const ProductRoutes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductListComponent},
    { path: 'products/:id', component: ProductDetailComponent},
];