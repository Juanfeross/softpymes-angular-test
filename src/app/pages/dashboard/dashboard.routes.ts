import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products.component')
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo:'products'
      },
    ]
  }
]

export default routes;
