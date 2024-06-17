import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, cartOutline, removeCircleOutline, trashOutline } from 'ionicons/icons';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, 
    IonRouterOutlet
  ],
})
export class AppComponent {
  constructor() {
    addIcons({
      cartOutline,
      trashOutline,
      addCircleOutline,
      removeCircleOutline,
    });
  }
}
