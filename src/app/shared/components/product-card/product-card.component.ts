import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../pages/dashboard/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../pages/dashboard/services/products/products.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product?: Product;
  private _product = inject(ProductsService);

  deleteProduct(id?: string) {
    if(id) this._product.deleteProduct(id);
  }
}
