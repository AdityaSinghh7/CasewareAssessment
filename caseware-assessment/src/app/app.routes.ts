import { Routes, } from '@angular/router';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { ProductDetailComponent } from './features/product/components/product-detail/product-detail.component';
import { ProductRoutes } from './features/product/product.routes';

export const routes: Routes = [
    ...ProductRoutes,
    {path: "**", redirectTo: 'products'},
];
