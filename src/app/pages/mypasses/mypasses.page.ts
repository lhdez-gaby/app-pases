import { OrderService } from 'src/app/services/order/order.service';
import { Order } from './../../models/order.model';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonText, IonIcon, IonItem, IonLabel, IonRow, IonButton, IonThumbnail, IonImg, IonCol } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-mypasses',
  templateUrl: './mypasses.page.html',
  styleUrls: ['./mypasses.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonCard,
    IonText,
    IonIcon, 
    IonItem,
    IonLabel,
    IonRow,
    IonButton,
    IonThumbnail,
    IonImg,
    IonCol,
    CommonModule, 
    FormsModule,
    SharedModule,
  ]
})
export class MypassesPage implements OnInit {

  orders : Order[] = [];

  private orderService = inject(OrderService);

  constructor() { }

  ngOnInit() {
    this.getOrders();
    console.log(this.orders);
  }

  getOrders(){
    this.orders = this.orderService.getOrder();
  }

}
