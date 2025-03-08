import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    ProductCardComponent,
    MatPaginatorModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true,
})
export class ProductListComponent {
  allProducts: Product[] = [];

  products: Product[] = [];

  pageIndex = 0;
  pageSize = 5;
  length = 0;
  
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void{
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.allProducts = data;
      this.length = data.length;
      this.updateProducts();
    });
  }

  updateProducts() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.products = this.allProducts.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateProducts();
  }

  onProductSelected(productId: number): void{
    this.router.navigate(['/products', productId]);
  }
}
