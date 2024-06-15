import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { Product } from 'src/app/models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class ProductsPage implements OnInit {

  private api = inject(ApiService);
  products: Product[] = [];
  productsInSearch: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products = this.api.items;
    this.productsInSearch = [...this.products];
  }
}
