import { Component } from '@angular/core';
import { BasketProductCardComponent } from '../../components/basket-product-card/basket-product-card.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [BasketProductCardComponent, MatButtonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {

}
