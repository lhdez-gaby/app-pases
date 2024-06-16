import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./pages/products/product-detail/product-detail.page').then( m => m.ProductDetailPage)
      },
    ],
    
  },
  
];
