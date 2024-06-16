import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent  implements OnInit {
  
  previusUrl!: string;

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.checkUrl();
  }

  //Verifica la url para regresar a la página anterior
  checkUrl(){
    const routeUrl = this.router.url; //Obtinene la url actual
    const urlParts = routeUrl.split('/');//Separa las partes de la url
    urlParts.pop();//Quita la últma parte que corresponde a la página actual
    this.previusUrl = urlParts.join('/');//Une las partes para formar la url de la página anterior
  }

}
