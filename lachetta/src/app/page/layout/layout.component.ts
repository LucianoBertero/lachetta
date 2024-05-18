import { Component } from '@angular/core';
import { Pizza } from '../interface/Pizza.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public pizzas: Pizza[] = [
    {
      name: 'Pepperoni',
      price: 20,
      ingredientes: ['Pepperoni', ' cheese', ' tomato sauce'],
      image: '../../../assets/png-clipart-pizza-pizza.png',
    },
    {
      name: 'Margherita',
      price: 15,
      ingredientes: ['Pepperoni', ' cheese', ' tomato sauce'],
      image: '../../../assets/png-clipart-pizza-pizza.png',
    },
    {
      name: 'Hawaiian',
      price: 25,
      ingredientes: ['Pepperoni', ' cheese', ' tomato sauce'],
      image: '../../../assets/png-clipart-pizza-pizza.png',
    },
    {
      name: 'Meat Lovers',
      price: 30,
      ingredientes: ['Pepperoni', ' cheese', ' tomato sauce'],
      image: '../../../assets/png-clipart-pizza-pizza.png',
    },
    {
      name: 'Vegetarian',
      price: 20,
      ingredientes: ['Pepperoni', ' cheese', ' tomato sauce'],
      image: '../../../assets/png-clipart-pizza-pizza.png',
    },
  ];
}
