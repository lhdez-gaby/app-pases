import { NavigationExtras, Router } from '@angular/router';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonCard, IonThumbnail, IonImg, IonText, IonCol, IonRow, IonList, IonListHeader, IonItemGroup, IonFooter } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem,
    IonLabel,
    IonIcon,
    IonCard,
    IonThumbnail,
    IonImg,
    IonText,
    IonCol,
    IonRow,
    IonButton,
    IonList,
    IonListHeader,
    IonItemGroup,
    IonFooter,
    CommonModule, 
    FormsModule,
    SharedModule,
  ]
})
export class CartPage implements OnInit, OnDestroy {

  cartSubscribe!: Subscription;
  model: any = null;

  private router = inject(Router);
  cartService = inject(CartService);
  orderService = inject(OrderService);
  constructor() { }

  ngOnInit() {
    this.cartSubscribe = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
      error: (e) =>{
        console.log(e)
      }
    })
  }

  addQuantity(product: Product){
    this.cartService.addQuantity(product);
  }
  substractQuantity(product: Product){
    this.cartService.substractQuantity(product);
  }

  navigateToCheckout(){
    let data: any = {
      products: this.model?.products,
      totalPrice: this.model?.totalPrice,
    };
    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data),
      }
    };
    this.router.navigate([this.router.url,'checkout'],navData);
  }

  ngOnDestroy(){
    if(this.cartSubscribe) this.cartSubscribe.unsubscribe();
  }
  

}
