import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() productsInCart!: number;
  @Input() hasBackButton?: boolean;
  @Input() hasCartButton?: boolean;
  @Input() hasMenuButton?: boolean;
  constructor() { }

  ngOnInit() {}

}
