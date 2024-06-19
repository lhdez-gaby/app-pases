import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonIcon, IonContent, IonLabel, IonItem, IonMenuToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, cardOutline, cartOutline, personCircleOutline, removeCircleOutline, storefrontOutline, storefrontSharp, ticketOutline, ticketSharp, trashOutline } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp, 
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonLabel,
    IonContent,
    IonItem,
    IonMenuToggle,
    NgClass,
  ],
})
export class AppComponent {

  pages =  [
    {
      title: 'Tienda de pases',
      url: '/products',
      icon: 'storefront',
      active: true,
    },
    {
      title: 'Mis pases',
      url: '/myPasses',
      icon: 'ticket',
      active: false,
    },
  ]

  constructor() {
    addIcons({
      cartOutline,
      trashOutline,
      addCircleOutline,
      removeCircleOutline,
      cardOutline,
      personCircleOutline,
      storefrontOutline,
      storefrontSharp,
      ticketOutline,
      ticketSharp,
    });
  }

  onItemTap(page: any){
    if(!page?.active){
      const index = this.pages.findIndex(item => item.active);//busca la página que esta activa
      this.pages[index].active = false; //desactiva la página que esta activa
      page.active = true; //activa la página tocada
    }
  }
}
