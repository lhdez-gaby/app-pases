import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonIcon, IonContent, IonLabel, IonItem, IonMenuToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, cardOutline, cartOutline, checkmarkCircle, personCircleOutline, qrCodeOutline, removeCircleOutline, storefrontOutline, storefrontSharp, ticketOutline, ticketSharp, trashOutline } from 'ionicons/icons';


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
export class AppComponent implements OnInit{

  pages =  [
    {
      title: 'Tienda de pases',
      url: '/products',
      icon: 'storefront',
      isActive: true,
    },
    {
      title: 'Mis pases',
      url: '/mypasses',
      icon: 'ticket',
      isActive: false,
    },
  ];

  private router = inject(Router)

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
      qrCodeOutline,
      checkmarkCircle,
    });
  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveState(event.urlAfterRedirects);
      }
    });

    this.updateActiveState(this.router.url);
  }

  updateActiveState(url: string) {
    this.pages.forEach(page => {
      page.isActive = page.url === url;
    });
  }

  onItemTap(page: any){
    if(!page?.active){
      const index = this.pages.findIndex(item => item.isActive);//busca la página que esta activa
      this.pages[index].isActive = false; //desactiva la página que esta activa
      page.active = true; //activa la página tocada
    }

    this.router.navigateByUrl(page?.url);
  }
}
