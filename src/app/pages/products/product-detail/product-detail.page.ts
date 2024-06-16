import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, NavController, IonImg, IonItem, IonLabel, IonText, IonFooter, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.model';


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
    CommonModule, 
    FormsModule]
})
export class ProductDetailPage implements OnInit {

  id?: string;
  product?: Product;
  addToCart?: string | null;

  private route = inject(ActivatedRoute);
  private navControl = inject(NavController);
  private api = inject(ApiService);

  constructor() { }

  ngOnInit() {
    this.getItem();
  }

  getItem(){
    const id = this.route.snapshot.paramMap.get('id')
    if(!id || id ==='0'){
      this.navControl.back();
      return;
    }

    this.id = id;
    this.product = this.api.items.find((item)=> item.id == id);
  }

  addProduct(){
    this.addedText();
  }

  addedText(){
    this.addToCart = "Agregado al carrito";
    setTimeout(()=>{
      this.addToCart = null;
    },1000
    );
  }

}
