import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail, IonContent, IonRow ,IonCol, IonImg, IonCard, IonLabel, IonText, IonList, IonItem,  IonTitle, IonToolbar,IonSearchbar } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonContent,
    IonRow,
    IonThumbnail,
    IonImg, 
    IonCard,
    IonLabel,
    IonText,
    IonList, 
    IonItem,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    RouterLink,
    CommonModule, 
    FormsModule, 
    SharedModule,
  ]
})
export class ProductsPage implements OnInit {

  private api = inject(ApiService); //api estática
  // Se agregan dos arreglos de productos, una para guardar permanentemente todos los productos y otra para que cambie en función de la búsqueda.
  products: Product[] = [];
  allProducts: Product[] = [];
  query!:string;
  // Ejemplo de uso de variables de entorno.
  showGrid!: boolean; // Funcionando variable para el modo en que se muestran los productos.
  data: any; //De ejemplo para el caso de tener una api dinámica.

  ngOnInit() {
    this.getProducts();
    this.showGrid = environment.showGrid;
    this.api.getData().subscribe(response => {
      this.data = response;
    });
  }

  getProducts(){
    this.allProducts = this.api.items;
    this.products = [...this.allProducts];
  }
  // ----------Manejo de búsqueda de productos----------
  onSearchChange(event: any){
    this.query = event.detail.value.toLowerCase().normalize('NFD');
    this.querySearch(); 
  }

  querySearch(){
    this.products = [];
    if (this.query.length > 0){
      this.searchItems();
    }else{
      this.products = [...this.allProducts];
    }
  }

  searchItems(){
    this.products = this.api.items.filter((product) =>
      product.productName.toLowerCase().normalize('NFD').includes(this.query)
    );
  }
}
