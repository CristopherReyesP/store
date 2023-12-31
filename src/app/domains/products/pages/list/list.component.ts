import { Component, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProductComponent } from "../../components/product/product.component";
import { Product } from "../../../shared/models/product.model";
import { HeaderComponent } from "../../../shared/components/header/header.component";
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

constructor(){
  const initProducts: Product[] = [
    {
      id: Date.now(),
      title: "producto 1",
      price: 100,
      image: "https://picsum.photos/640/640/?r=23",
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: "producto 2",
      price: 200,
      image: "https://picsum.photos/640/640/?r=24",
      creationAt: new Date().toISOString()

    },
    {
      id: Date.now(),
      title: "producto 3",
      price: 300,
      image: "https://picsum.photos/640/640/?r=25",
      creationAt: new Date().toISOString()

    },
    {
      id: Date.now(),
      title: "producto 4",
      price: 300,
      image: "https://picsum.photos/640/640/?r=25",
      creationAt: new Date().toISOString()

    },
    {
      id: Date.now(),
      title: "producto 1",
      price: 100,
      image: "https://picsum.photos/640/640/?r=23",
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: "producto 2",
      price: 200,
      image: "https://picsum.photos/640/640/?r=24",
      creationAt: new Date().toISOString()

    },
  ]
  this.products.set(initProducts);
}

  addToCart(product: Product){
    this.cart.update(prevState => [...prevState, product ] )
  }
  
}
