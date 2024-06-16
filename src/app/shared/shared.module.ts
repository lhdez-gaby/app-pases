import { IonButton, IonButtons } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from './components/back-button/back-button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
  ]
})
export class SharedModule { }
