import { FormControl } from "@angular/forms";

export interface CreateForm {
  imageUrl: FormControl<string>;
  name: FormControl<string>;
  price: FormControl<number>;
  description: FormControl<string>;
  quantity: FormControl<number>;
}
