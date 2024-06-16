import { Product } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>(null);

  get cart(){
    return this._cart.asObservable();
  } 

  constructor() { }

  addQuantity(product: Product){
    const data = this._cart.value;
    const productsInCart = (data?.productsInCart || 0) + 1;
    this._cart.next({productsInCart});
  }  
}
