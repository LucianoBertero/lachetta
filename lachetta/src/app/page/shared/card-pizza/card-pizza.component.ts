import { Component, Input } from '@angular/core';
import { Pizza } from '../../interface/Pizza.interface';

@Component({
  selector: 'app-card-pizza',
  templateUrl: './card-pizza.component.html',
  styleUrl: './card-pizza.component.css',
})
export class CardPizzaComponent {
  @Input() pizza?: Pizza;
}
