import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardPizzaComponent } from './shared/card-pizza/card-pizza.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    CardPizzaComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
