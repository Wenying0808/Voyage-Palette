import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
  @Input() product!: Product;
}
