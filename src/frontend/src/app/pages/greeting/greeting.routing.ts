import { Routes } from '@angular/router';


// pages
import { AppGreetingComponent } from './app-greeting/app-greeting.component';
import { AppPersonasComponent } from './app-personas/app-personas.component';
import { ArticulosComponent } from './app-articulos/app-articulos.component';
import { AppCarritoComponent } from './app-carrito/app-carrito.component';
import { AppShopArticulosComponent } from './app-shop-articulos/app-shop-articulos.component';

export const GreetingRoutes: Routes = [
  {
    path: '',
    component: AppGreetingComponent,
  },
  {
    path: 'people',
    component: AppPersonasComponent,
  },
  {
    path: 'articulo',
    component: ArticulosComponent,
  },
  {
    path: 'carrito',
    component: AppCarritoComponent,
  },
  {
    path: 'shop-articulo',
    component: AppShopArticulosComponent,
  },
];
