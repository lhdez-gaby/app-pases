import { Order } from './../../models/order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order: Order[] = [];
  constructor() { }

  getOrder(){
    return this.order
  }

  placeOrder(data: any){
    for (const product of data.products){
      const id:string = this.getId();
      if (id === "typeError"){
        console.error("Error al obtener el id de la orden")
        return
      }
      
      const orderData: Order= 
        {
          id: id,
          products: product,
          status: true,
        }

      this.order.push(orderData);
      console.log(this.order);
    }
    
  }

  private getId():string{
    let id: number = 1;
    if(this.order){
      id = this.order.length + 1;
    }
    const orderId = id.toString();
    let stringId!: string; 
    if (typeof(orderId) == "string"){
      stringId = orderId;
      return stringId;
    }
    return "typeError"
  }
}
