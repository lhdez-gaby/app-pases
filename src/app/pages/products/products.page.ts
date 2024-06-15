import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonThumbnail, IonContent, IonRow ,IonCol, IonImg, IonCard, IonLabel, IonText, IonList, IonItem,  IonTitle, IonToolbar,IonSearchbar } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';

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
    CommonModule, 
    FormsModule, 
    SharedModule,]
})
export class ProductsPage implements OnInit {

  private api = inject(ApiService);
  // Se agregan dos arreglos de productos, una para guardar permanentemente todos los productos y otra para que cambie en función de la búsqueda.
  products: Product[] = [];
  allProducts: Product[] = [];

  showGrid: boolean = false;
  query!:string;

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.allProducts = this.api.items;
    this.products = [...this.allProducts];
  }
  // ----------Manejo de búsque de productos----------
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
