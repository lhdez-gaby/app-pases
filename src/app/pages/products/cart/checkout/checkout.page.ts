import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader,
    IonTitle, 
    IonToolbar, 
    SharedModule,
    CommonModule, 
    FormsModule
  ]
})
export class CheckoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
