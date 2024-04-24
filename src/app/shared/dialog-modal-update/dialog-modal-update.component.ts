import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../../pages/dashboard/models/product.model';
import { ProductsService } from '../../pages/dashboard/services/products/products.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { CreateForm } from '../models/interfaces/create-form.interface';

@Component({
  selector: 'app-dialog-modal-update',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
    MatSnackBarModule,],
  templateUrl: './dialog-modal-update.component.html',
  styleUrl: './dialog-modal-update.component.scss'
})
export class DialogModalUpdateComponent {
  private _product = inject(ProductsService);
  private _formBuilder = inject(FormBuilder).nonNullable;

  form = this._formBuilder.group<CreateForm>({
    imageUrl: this._formBuilder.control('', Validators.required),
    name: this._formBuilder.control('', Validators.required),
    price: this._formBuilder.control(0, Validators.required),
    description: this._formBuilder.control('', Validators.required),
    quantity: this._formBuilder.control(0, Validators.required),
  });

  updateProduct() {
    const product: Product = {
      imageUrl: this.form.value.imageUrl ? this.form.value.imageUrl : '',
      name: this.form.value.name ? this.form.value.name : '',
      price: this.form.value.price ? this.form.value.price : 0,
      description: this.form.value.description
        ? this.form.value.description
        : '',
      quantity: this.form.value.quantity ? this.form.value.quantity : 0,
    };
    console.log(product);
    if (
      product.description ||
      product.imageUrl ||
      product.name ||
      product.price > 0 ||
      product.quantity > 0
    ) {

    }

  }
}
