import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-detail',
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(private router: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
      const productId = Number(this.router.snapshot.paramMap.get('id'));

      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
  }
}
