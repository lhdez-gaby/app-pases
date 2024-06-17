import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    SharedModule,
  ]
})
export class CartPage implements OnInit {

  cartSubscribe!: Subscription;
  model: any = null;

  private cartService = inject(CartService);
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

  

}
