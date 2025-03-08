import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-card',
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule

  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewDetails: EventEmitter<number> = new EventEmitter<number>();

  onView() {
    // Emit the product id when the button is clicked
    this.viewDetails.emit(this.product.id);
  }
}
