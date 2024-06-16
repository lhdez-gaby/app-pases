import { CartService } from './../../../services/cart/cart.service';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, NavController, IonImg, IonItem, IonLabel, IonText, IonFooter, IonButton, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.model';
import { Subscription } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons,
    IonBackButton,
    IonImg,
    IonItem,
    IonLabel,
    IonText,
    IonFooter,
    IonButton,
    IonIcon,
    IonBadge,
    CommonModule, 
    FormsModule,
    SharedModule,
    RouterLink,
  ]
})
export class ProductDetailPage implements OnInit, OnDestroy {

  id?: string;
  product!: Product;
  addToCartText?: string | null; 
  productsInCart: number = 0;

  cartSubscribe!: Subscription;

  private route = inject(ActivatedRoute);
  private navControl = inject(NavController);
  private api = inject(ApiService);
  private cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    this.getItem();

    this.cartSubscribe = this.cartService.cart.subscribe({
      next: (cart) => {
        this.productsInCart = cart ?  cart?.productsInCart: 0;
      }
    })
  }

  getItem(){
    const id = this.route.snapshot.paramMap.get('id')
    if(!id || id ==='0'){
      this.navControl.back();
      return;
    }

    this.id = id;
    const foundProduct = this.api.items.find((item)=> item.id == id);
    if(foundProduct){
      this.product = foundProduct;
    }
  }

  addProduct(){
    const result = this.cartService.addQuantity(this.product)
    this.addedText();
  }

  //Cambia texto para botton "agregar al carrito"
  addedText(){
    this.addToCartText = "Agregado al carrito";
    setTimeout(()=>{
      this.addToCartText = null;
    },1000
    );
  }

  ngOnDestroy(): void {
    if(this.cartSubscribe) this.cartSubscribe.unsubscribe
  }

}
