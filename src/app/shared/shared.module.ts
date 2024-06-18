import { IonButton, IonButtons } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
    CustomInputComponent,
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
  ]
})
export class SharedModule { }
