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
        path: 'cart',
        loadComponent: () => import('./pages/products/cart/cart.page').then( m => m.CartPage)
      },
      {
        path: 'product/:id',
        children:[
          {
            path: '',
            loadComponent: () => import('./pages/products/product-detail/product-detail.page').then( m => m.ProductDetailPage)
          },
          {
            path: 'cart',
            loadComponent: () => import('./pages/products/cart/cart.page').then( m => m.CartPage)
          },
        ],
        
      },
    ],
    
  },
];
