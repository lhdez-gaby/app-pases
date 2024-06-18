import { OrderService } from 'src/app/services/order/order.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonInput, IonCol, IonRow, IonLabel, IonText, IonButton, NavController, IonToast } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { colorFill } from 'ionicons/icons';

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
    IonIcon,
    IonInput,
    IonCol,
    IonRow,
    IonLabel,
    IonText,
    IonButton,
    IonToast,
    SharedModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CheckoutPage implements OnInit {

  form = new FormGroup({
    cardHolderName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16),Validators.maxLength(16)]),
    expirationMonth: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    expirationYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.min(2024),]),
    ccv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
  })

  order!: any;
  isToastMessage: boolean = false;
  toastModal?: any;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private navCtrl = inject(NavController);
  private cartService = inject(CartService);
  private orderService = inject(OrderService);

  constructor() { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams;
    if(data['data']){
      const order = JSON.parse(data['data']);
      if(!order){
        this.navCtrl.back();
      }
      this.order = order;
      console.log(this.order);
    }
  }

  onSubmit(){
    console.log(this.form.value);
    this.orderService.placeOrder(this.order);
    this.cartService.clearCart();
    this.isToastMessage = true;
    this.toastModal = {
      message: 'Pago aceptado',
      color: 'success'
    }
    
    setTimeout(()=>{
      this.router.navigateByUrl('/products',{replaceUrl:true});
    }, 2000);
  }

}
