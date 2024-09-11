import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../interfaces/product.interface';
import { mockProducts } from '../../mockProducts';

@Component({
  selector: 'app-webshop',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './webshop.component.html',
  styleUrl: './webshop.component.scss'
})
export class WebshopComponent {
  
  products: Product[] = mockProducts;
}
