import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, 'products');

  private document(id: string) {
    return doc(this._firestore, `${'products'}/${id}`);
  }

  getProducts() {
    return collectionData(this._collection, { idField: 'id' }) as Observable<Product[]>;
  }

  createProduct(product: Product) {
    return addDoc(this._collection, product);
  }

  updateProduct(id: string, product: Product) {
    return updateDoc(this.document(id), { ...product });
  }

  deleteProduct(id: string) {
    return deleteDoc(this.document(id));
  }
}
