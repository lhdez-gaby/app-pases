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
        children:[
          {
            path: '',
            loadComponent: () => import('./pages/products/cart/cart.page').then( m => m.CartPage)
          },
          {
            path: 'checkout',
            loadComponent: () => import('./pages/products/cart/checkout/checkout.page').then( m => m.CheckoutPage)
          },
        ]
        
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
            children:[
              {
                path: '',
                loadComponent: () => import('./pages/products/cart/cart.page').then( m => m.CartPage)
              },
              {
                path: 'checkout',
                loadComponent: () => import('./pages/products/cart/checkout/checkout.page').then( m => m.CheckoutPage)
              },
            ]
          },
        ],
      },
    ],
  },
  
];
