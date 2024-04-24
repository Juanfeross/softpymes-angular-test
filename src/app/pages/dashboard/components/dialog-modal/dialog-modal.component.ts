import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products/products.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';

export interface CreateForm {
  imageUrl: FormControl<string>;
  name: FormControl<string>;
  price: FormControl<number>;
  description: FormControl<string>;
  quantity: FormControl<number>;
}

@Component({
  selector: 'app-dialog-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf,
    MatSnackBarModule,
  ],
  templateUrl: './dialog-modal.component.html',
  styleUrl: './dialog-modal.component.scss',
})
export class DialogModalComponent {
  private _product = inject(ProductsService);
  private _formBuilder = inject(FormBuilder).nonNullable;

  form = this._formBuilder.group<CreateForm>({
    imageUrl: this._formBuilder.control('', Validators.required),
    name: this._formBuilder.control('', Validators.required),
    price: this._formBuilder.control(0, Validators.required),
    description: this._formBuilder.control('', Validators.required),
    quantity: this._formBuilder.control(0, Validators.required),
  });

  createProduct() {
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
      this._product.createProduct(product);
    }

  }
}
