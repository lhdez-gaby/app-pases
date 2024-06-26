import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Strings } from 'src/app/enum/strings';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  model: any = null;
  iva_charge = 0.16;
  cartStoreName = Strings.CART_STORAGE;
  currency = Strings.CURRENCY;

  private _cart = new BehaviorSubject<any>(null);
  private storage = inject(StorageService)

  get cart(){
    return this._cart.asObservable();
  } 

  constructor() {
    this.getCart();
  }
  
  //Quita productos al carrito
  substractQuantity(product: any){
    if(this.model){
      const indexToRemove = this.model.products.findIndex((data: any) => data.id == product.id)
      console.log(indexToRemove)
      if(indexToRemove >= 0){
        if(this.model.products[indexToRemove]?.quantity > 0){
          const allProducts = this.model.products
          const products = allProducts.filter((_:any,index:number) => index !== indexToRemove);
          this.model.products = products;
        }
        console.log(this.model)
      }
      return this.calculatePrice();
    }
  }
  //Agrega productos al carrito
  addQuantity(product: any){
    if(this.model){
      //Aunque sea el mismo tipo de pase se toma como si fuera diferente porque es único
      const products = [{...product,quantity:1}];
      this.model.products = products.concat(this.model.products);
    }else{
      this.model={
        products: [{...product, quantity: 1}]
      }
    }
    console.log(this.model)
    return this.calculatePrice(); 
  }  
  calculatePrice(){
    
    const products = this.model.products.filter((product: any) => product.quantity > 0);
    //Verifica si el carro esta vacío
    if (products.length <= 0){
      this.clearCart();
      return
    }

    let productsInCart: number = 0;
    let totalProducts: number = 0; 
    let totalIva: number = 0;
    
    for(const product of products){
      productsInCart += product.quantity;
      totalProducts += product.price;
    }

    totalIva = totalProducts * this.iva_charge;
    const totalPrice = totalProducts + totalIva;

    this.model = {
      ...this.model,
      productsInCart,
      totalProducts,
      totalIva,
      totalPrice,
    }

    this._cart.next(this.model);
    this.saveCart(this.model);

    return this.model;
  }

  saveCart(data:any){
    const model = JSON.stringify(data);
    this.storage.setStorage(this.cartStoreName, model)
  }

  clearCart(){
    this.storage.removeStorage(this.cartStoreName)
    this.model = null;
    this._cart.next(null);
  }

  async getCart(){
    let  cartData: any = this._cart.value;
    
    if(!cartData){
      cartData = await this.storage.getStorage(this.cartStoreName);
      console.log(cartData);
      if(cartData?.value){
        this.model = JSON.parse(cartData.value);
        this._cart.next(this.model)
      }
    }
    return this.model;
  }
}
