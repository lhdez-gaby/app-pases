import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonButton, IonIcon, IonCard, IonThumbnail, IonImg, IonText, IonCol, IonRow, IonList, IonListHeader, IonItemGroup } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/models/product.model';

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
    CommonModule, 
    FormsModule,
    SharedModule,
  ]
})
export class CartPage implements OnInit, OnDestroy {

  cartSubscribe!: Subscription;
  model: any = null;

  cartService = inject(CartService);
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
    this.substractQuantity(product);
  }

  ngOnDestroy(){
    if(this.cartSubscribe) this.cartSubscribe.unsubscribe();
  }
  

}
