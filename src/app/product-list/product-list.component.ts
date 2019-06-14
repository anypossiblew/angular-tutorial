import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  constructor() {
    this.products = [
      {
        Product: "HT-1120",
        ProductName: "英语国际无线蓝牙键盘",
        Price: 800
      },
      {
        Product: "HT-1023",
        ProductName: "高端舒适",
        Price: 500
      }
    ]
  }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}