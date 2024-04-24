import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModalComponent } from '../../components/dialog-modal/dialog-modal.component';
import { ProductCardComponent } from "../../../../shared/components/product-card/product-card.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [CommonModule, MatButtonModule, MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose, ProductCardComponent]
})
export default class ProductsComponent {
  private _product = inject(ProductsService);
  public products = toSignal(this._product.getProducts());

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogModalComponent);
  }
}
