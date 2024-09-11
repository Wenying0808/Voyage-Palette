import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-basket-product-card',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatIconModule, MatSelectModule],
  templateUrl: './basket-product-card.component.html',
  styleUrl: './basket-product-card.component.scss'
})
export class BasketProductCardComponent {

}
